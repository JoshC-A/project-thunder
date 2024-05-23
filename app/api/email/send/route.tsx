import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-templates/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Josh <onboarding@resend.dev>", // Leaving as resend email as need to verify DNS records to be able to send from spydr (will do eventually)
      to: ["josh@spydr.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "Josh" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
