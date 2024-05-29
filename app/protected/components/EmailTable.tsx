import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../core/ui/Table";
import { Email } from "../../types/email.type";

const EmailTable: React.FCC<{ emails: Email[] }> = ({ emails }) => {
  console.log(emails);

  return (
    <Table className="w-full">
      <TableCaption>Your recent emails</TableCaption>
      <TableHeader className="w-full">
        <TableRow className="w-full">
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="w-full">
        {emails.map((email: Email) => {
          return (
            <TableRow key={email.id} className="w-full">
              <TableCell className="font-medium w-full">
                {email.subject}
              </TableCell>
              <TableCell className="text-right">
                {new Date(email.sent_at).toLocaleDateString("en-US")}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default EmailTable;
