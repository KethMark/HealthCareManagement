"use client";
import { Loader } from "@/components/ui/loader";
import { Separator } from "@/components/ui/separator";
import { adminGET, userGET } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { DataTablePatient } from "./data-table";
import { columnsPatient } from "./columns";

const page = () => {
  
  const { data, isLoading } = useQuery({
    queryKey: ["approved"],
    queryFn: adminGET,
  });

  console.log(data)

  const confirmedSchedule = data?.filter((item) => item.status === true);

  return (
    <>
      <h1 className="font-serif text-lg font-bold">Medical Records</h1>
      <Separator />
      <div>
        {isLoading ? (
          <Loader size={30} style={{ margin: "auto", marginTop: "100px" }} />
        ) : (
          confirmedSchedule && (
            <DataTablePatient columns={columnsPatient} data={confirmedSchedule} />
          )
        )}
      </div>
    </>
  )
}

export default page;
