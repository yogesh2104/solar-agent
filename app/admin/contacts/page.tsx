import { db } from "@/lib/db";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MessageSquare, Mail, Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";

export default async function AdminContactsPage() {
  const messages = await db.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Contact Inquiries</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Review general messages and support requests from the contact form.
          </p>
        </div>
      </div>

      <Separator className="mb-12 opacity-50" />

      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed rounded-3xl bg-muted/20">
          <div className="bg-muted p-6 rounded-full mb-4">
            <MessageSquare className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold">No messages yet</h3>
          <p className="text-muted-foreground mt-2 max-w-xs mx-auto">
            New contact submissions will show up here.
          </p>
        </div>
      ) : (
        <div className="border border-border/50 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm shadow-xl shadow-primary/5">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[200px]">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="w-[400px]">Message</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((msg) => (
                <TableRow key={msg.id} className="hover:bg-primary/5 transition-colors">
                  <TableCell className="font-semibold">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      {msg.firstName} {msg.lastName}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 text-primary" />
                      {msg.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm text-muted-foreground line-clamp-2 italic">
                      &quot;{msg.message}&quot;
                    </p>
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm">
                    <div className="flex items-center justify-end gap-2">
                      <Calendar className="h-3 w-3" />
                      {format(new Date(msg.createdAt), "MMM d, yyyy")}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
