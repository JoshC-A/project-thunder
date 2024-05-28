import { Resend } from "resend";
import { inngest } from "../client";
import { EmailTemplate } from "../../app/components/email-templates/email-template";
import getSupabaseServerActionClient from "../../app/core/supabase/action-client";

const resend = new Resend(process.env.RESEND_API_KEY);

const createSupabaseClient = () =>
  getSupabaseServerActionClient({ admin: true });

export const sendEmail = inngest.createFunction(
  { id: "sendEmail" },
  { event: "email/send.email" },

  async ({ event, step }) => {
    const userEmails = await step.run("get users emails", async () => {
      const supabase = createSupabaseClient();
      return supabase.from("users").select("email");
    });

    return { body: userEmails };

    // const sendEmailResponse = await step.run("send email", async () => {
    //   try {
    //     const { data, error } = await resend.emails.send({
    //       from: "Josh <onboarding@resend.dev>", // Leaving as resend email as need to verify DNS records to be able to send from spydr (will do eventually)
    //       to: ["josh@spydr.com"],
    //       subject: "Hello world",
    //       react: EmailTemplate({ firstName: "Josh" }),
    //     });

    //     if (error) {
    //       console.error(error);

    //       throw new Error("Error while sending email");
    //     }

    //     return { event, body: "Email successfully sent" };
    //   } catch (error) {
    //     console.error(error);
    //     throw new Error("Error while attempting to send email");
    //   }
    // });
    // return sendEmailResponse;
  }
);
