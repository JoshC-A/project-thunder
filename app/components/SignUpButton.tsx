import Link from "next/link";
import { createClient } from "../../utils/supabase/server";

export default async function SignUpButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return !user ? (
    <Link
      href={{
        pathname: "/sign-up",
      }}
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Sign Up
    </Link>
  ) : (
    ""
  );
}
