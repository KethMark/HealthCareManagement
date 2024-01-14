import { ColumnDef } from "@tanstack/react-table";

export const columnsPatient: ColumnDef<Cancel>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "message",
      header: "message",
    },
  ];