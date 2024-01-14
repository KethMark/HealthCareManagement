import { ColumnDef } from "@tanstack/react-table";
import Update from "./update";
import Cancel from "./cancel";
import Re_schedule from "./re-schedule";
import { Data } from "./data";
import { Badge } from "@/components/ui/badge";

export const columnsPatient: ColumnDef<Appointment>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original;
      return (
        <Badge variant={status.status ? "success" : "destructive"}>
          {status.status ? "Approved" : "Pending"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "contact_number",
    header: "Contact Number",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const action = row.original;

      return (
        <div className="flex items-center justify-center gap-2">
          <Data data={action} />
          <Re_schedule reSchedule={action} />
          <Update update={action} />
          <Cancel cancel={action} />
        </div>
      );
    },
  },
];
