"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Loader } from "@/components/ui/loader";
import { Separator } from "@/components/ui/separator";
import { recordGET } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { DataTablePatient } from "./data-table";
import { columnsPatient } from "./columns";

export const Table = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["final"],
    queryFn: recordGET,
  });

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>View all medical records</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full container">
          <div className="flex justify-center">
            <DrawerHeader>
              <DrawerTitle className="text-center">Medical History</DrawerTitle>
              <DrawerDescription>
                you can't make changes in this table
              </DrawerDescription>
            </DrawerHeader>
          </div>
          <div className="p-4 pb-0">
            <div className="">
              {isLoading ? (
                <div>
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                data && (
                  <DataTablePatient columns={columnsPatient} data={data} />
                )
              )}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
