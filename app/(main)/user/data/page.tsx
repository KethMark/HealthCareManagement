"use client";
import { userGET } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/components/ui/loader";
import { Separator } from "@/components/ui/separator";
import { DataTablePatient } from "./data-table";
import { columnsPatient } from "./columns";

const page = () => {
  const { data: status, isLoading } = useQuery({
    queryKey: ["appointment"],
    queryFn: userGET,
  })

  return (
    <>
      <h1 className="font-serif text-lg font-bold">Status</h1>
      <Separator />
      <div>
      {isLoading ? (
          <Loader size={30} style={{ margin: "auto", marginTop: "100px" }} />
        ) : (
          status && (
            <DataTablePatient columns={columnsPatient} data={status} />
          )
        )}
      </div>
    </>
  )
}

export default page
