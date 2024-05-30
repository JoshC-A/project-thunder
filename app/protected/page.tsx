import { redirect } from "next/navigation";
import Header from "../components/Header";
import { createClient } from "../../utils/supabase/server";
import SignInButton from "../components/SignInButton";
import EmailTable from "./components/EmailTable";
import getSupabaseServerComponentClient from "../core/supabase/server-component-client";
import { getEmailsByUserId } from "./queries";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const client = getSupabaseServerComponentClient();

  const emails = await getEmailsByUserId(client, user.id);

  return (
    <div className="flex-1 w-full flex flex-col gap-20">
      <div className="animate-in flex-1 flex flex-col mt-20 gap-20 opacity-0 max-w-4xl px-3">
        <p className="text-5xl font-light">Your Emails</p>

        <main>
          <EmailTable emails={emails} />
        </main>
      </div>
    </div>
  );
}
