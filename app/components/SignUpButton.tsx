import Link from "next/link";
import { createClient } from "../../utils/supabase/server";
import Button from "../core/ui/Button";

export default async function SignUpButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return !user ? (
    <Button
      href={{
        pathname: "/sign-up",
      }}
      className="text-white"
      variant={"black"}
    >
      Sign Up
    </Button>
  ) : (
    ""
  );
}
