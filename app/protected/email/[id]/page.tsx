import { redirect } from "next/navigation";
import { createClient } from "../../../../utils/supabase/server";
import Button from "../../../core/ui/Button";
import EmailTemplateCopy from "../../components/EmailTemplateCopy";
import { getAllEmailDataById } from "../../queries";

interface Context {
  params: {
    id: string;
  };
}

const EmailPage = async ({ params }: Context) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const emailData = await getAllEmailDataById(supabase, params.id);

  const {
    weather,
    stocks: shareData,
    users: { name },
  } = emailData;

  const percentDiff =
    100 *
    Math.abs(
      (shareData.open - shareData.close) /
        ((shareData.open + shareData.close) / 2)
    );

  return (
    <div>
      <Button
        href="/protected"
        className="absolute top-20 left-8 pr-2 no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Button>

      <EmailTemplateCopy
        percentDiff={percentDiff}
        weather={weather}
        shareData={shareData}
        username={name}
      />
    </div>
  );
};

export default EmailPage;
