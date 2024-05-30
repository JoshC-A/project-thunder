import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";
import { Button } from "../../@/components/ui/button";

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
      <Link href={"/protected"}>Hey, {user.email}!</Link>
      <form action={signOut}>
        <Button variant={"outline"} className="py-2 px-4">
          Logout
        </Button>
      </form>
    </div>
  ) : (
    <Button className="py-2 px-4" variant={"outline"}>
      <a href="/sign-in">Sign In</a>
    </Button>
  );
}
