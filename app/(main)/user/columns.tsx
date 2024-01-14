import { ColumnDef } from "@tanstack/react-table";

export const columnsPatient: ColumnDef<Records>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "contact_number",
    header: "Contact_number",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "slot",
    header: "Slot",
  },
  {
    accessorKey: "case_no",
    header: "Case No",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "symptoms",
    header: "Syptomns",
  },
  {
    accessorKey: "date_of_record",
    header: "Date of record",
  },
  {
    accessorKey: "prescription",
    header: "Prescription",
  },
  {
    accessorKey: "pres_no_days",
    header: "Days",
  },
];
