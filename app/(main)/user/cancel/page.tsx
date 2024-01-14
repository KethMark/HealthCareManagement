'use client'
import { Separator } from "@/components/ui/separator";
import { statusGET } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { DataTablePatient } from "./data-table";
import { columnsPatient } from "./columns";
import { Loader } from "@/components/ui/loader";

const page = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["cancel"],
    queryFn: statusGET,
  });

  return (
    <>
      <h1 className="font-serif text-lg font-bold">Cancel Appointment</h1>
      <Separator />
      <div className="mt-6">
        {isLoading ? (
          <Loader size={30} style={{ margin: "auto", marginTop: "100px" }} />
        ) : (
          data && <DataTablePatient data={data} columns={columnsPatient} />
        )}
      </div>
    </>
  );
};

export default page;
