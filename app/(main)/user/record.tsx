import { recordsGET } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export const Record = () => {

    const { data: record, isLoading } = useQuery({
        queryKey: ["records"],
        queryFn: recordsGET, 
    });

  return (
    <div className="mt-10 justify-end space-y-3">
      <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
        {record}
        {/* {con1} */}
      </div>
      {/** with consultations */}
      <p>Records</p>
    </div>
  );
};
