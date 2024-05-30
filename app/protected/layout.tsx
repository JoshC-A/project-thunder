import SignInButton from "../components/SignInButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm">
            <SignInButton />
          </div>
        </nav>
      </div>
      {children}
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>Footer</p>
      </footer>
    </>
  );
};

export default Layout;
