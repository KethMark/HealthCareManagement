import { ColumnDef } from "@tanstack/react-table";
import Approved from "./Approved";
import { Data } from "./data";
import Cancel from "./cancel";

export const columnsPatient: ColumnDef<Appointment>[] = [
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
        const patient = row.original;
  
        return (
          <div className="flex items-center gap-3">
            <Data data={patient}/>
            <Approved data={patient}/>
            <Cancel data={patient}/>
          </div>
        );
      },
    },
  ];
  