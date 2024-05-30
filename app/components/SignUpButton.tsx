import Link from "next/link";
import { createClient } from "../../utils/supabase/server";
import { Button } from "../../@/components/ui/button";

export default async function SignUpButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return !user ? (
    <Button className="py-2 px-4 bg-black text-primary-foreground hover:bg-black/75">
      <a className="text-white" href="/sign-up">
        Sign Up
      </a>
    </Button>
  ) : (
    ""
  );
}
