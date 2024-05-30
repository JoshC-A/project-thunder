import { Suspense } from "react";
import Header from "./components/Header";
import LetterSignUp from "./components/LetterSignUp";
import SignInButton from "./components/SignInButton";
import SignUpButton from "./components/SignUpButton";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex space-x-2 justify-end p-3 text-sm">
          <SignInButton />
          <SignUpButton />
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 items-center opacity-0 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-thin text-4xl mb-4 opacity-65">
            Sign up for our free newsletter
          </h2>
          <Suspense>
            <LetterSignUp />
          </Suspense>
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>Footer</p>
      </footer>
    </div>
  );
}
