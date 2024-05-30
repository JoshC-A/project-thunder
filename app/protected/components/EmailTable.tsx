import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../@/components/ui/Table";
import { Email } from "../../types/email.type";

const EmailTable: React.FCC<{ emails: Email[] }> = ({ emails }) => {
  return (
    <Table className="w-full">
      <TableHeader className="w-full">
        <TableRow className="w-full">
          <TableHead className="w-[100px] text-left">Title</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="w-full">
        {emails.map((email: Email) => {
          return (
            <TableRow key={email.id} className="w-full">
              <TableCell className="font-medium w-full">
                <Link href={`/protected/email/${email.id}`}>
                  {email.subject}
                </Link>
              </TableCell>
              <TableCell className="text-right">
                <Link href={`/protected/email/${email.id}`}>
                  {new Date(email.sent_at).toLocaleDateString("en-US")}
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      {/* <TableCaption>Your recent emails</TableCaption> */}
    </Table>
  );
};

export default EmailTable;
