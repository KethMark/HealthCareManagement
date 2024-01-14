import { countGET } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export const Appointment = () => {
  const { data: appointment } = useQuery({
    queryKey: ["counts"],
    queryFn: countGET,
  });

  return (
    <div className="mt-10 justify-end space-y-3">
      <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
        {appointment}
      </div>
      {/** with approved appointment */}
      <p>Appointment</p>
    </div>
  );
};
