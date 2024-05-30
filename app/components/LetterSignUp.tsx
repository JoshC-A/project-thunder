"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "../../@/components/ui/button";
import { TextFieldInput } from "../../@/components/ui/TextField";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

const LetterSignUp = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const SIGN_UP_PATH = "sign-up";

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const target = event.currentTarget;
    const data = new FormData(target);
    const email = data.get("email") as string;

    const params = new URLSearchParams(searchParams);
    if (email) {
      params.set("email", email);
    } else {
      params.delete("email");
    }

    // Get page domain (useful for development)
    const origin =
      typeof window !== "undefined" && window.location.origin
        ? window.location.origin
        : "";

    replace(`${origin}/${pathname}/${SIGN_UP_PATH}?${params.toString()}`);
  };

  return (
    <form className={"w-full"} onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <TextFieldInput
          name={"email"}
          className="max-w-xs mb-5"
          placeholder="example@mail.com"
        />
        <Button
          type="submit"
          className="py-2 px-4 bg-black text-white hover:bg-black/75"
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default LetterSignUp;
