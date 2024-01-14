"use client";
import { adminGET, userGET } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Loader } from "@/components/ui/loader";
import { columnsPatient } from "./columns";
import { DataTablePatient } from "./data-table";

const page = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["pending"],
    queryFn: adminGET,
  });

  const pendingSchedule = data?.filter((item) => item.status === false);

  return (
    <>
      <h1 className="font-serif text-lg font-bold">Schedule</h1>
      <Separator />
      <div>
        {isLoading ? (
          <Loader size={30} style={{ margin: "auto", marginTop: "100px" }} />
        ) : (
          pendingSchedule && (
            <DataTablePatient columns={columnsPatient} data={pendingSchedule} />
          )
        )}
      </div>
    </>
  );
};

export default page;
