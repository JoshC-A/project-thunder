import { Resend } from "resend";
import { inngest } from "../client";
import { EmailTemplate } from "../../app/components/email-templates/email-template";
import getSupabaseServerActionClient from "../../app/core/supabase/action-client";
import { WeatherAndSharesTemplate } from "../../app/components/email-templates/WeatherAndShares";

const resend = new Resend(process.env.RESEND_API_KEY);

const createSupabaseClient = () =>
  getSupabaseServerActionClient({ admin: true });

export const sendEmail = inngest.createFunction(
  { id: "sendEmail" },
  //   { cron: "30 09 * * 1-5" },
  { event: "email/send.email" },

  async ({ event, step }) => {
    const weatherData = await step.run("get weather data from DB", async () => {
      const supabase = createSupabaseClient();
      //   Get most recent data collect for today
      const { data, error } = await supabase
        .from("weather")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      console.log(error);

      return data;
    });

    const users = await step.run("get users emails", async () => {
      const supabase = createSupabaseClient();
      const { data } = await supabase.from("users").select(`email,name`);
      return data;
    });

    const emailsSuccess = await step.run("send email", async () => {
      const emails = await Promise.all(
        users.map(async (user) => {
          try {
            const { data, error } = await resend.emails.send({
              from: "Josh <onboarding@resend.dev>", // Leaving as resend email as need to verify DNS records to be able to send from spydr (will do eventually)
              to: [user.email],
              subject: "Hello world",
              react: WeatherAndSharesTemplate({
                username: user.name,
                weather: weatherData,
              }),
            });

            if (error) {
              console.error(error);

              throw new Error("Error while sending email");
            }

            return user.email;
          } catch (error) {
            console.error(error);
            throw new Error("Error while attempting to send email");
          }
        })
      );
      console.log(emails);

      return emails;
    });

    return { event, body: emailsSuccess };
    // return { event, body: weatherData };
  }
);
