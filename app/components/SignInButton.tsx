import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";
import Button from "../core/ui/Button";

export default async function SignInButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Button
      href="/sign-in"
      className="no-underline bg-btn-background hover:bg-btn-background-hover"
      variant={"outline"}
    >
      Sign In
    </Button>
  );
}
