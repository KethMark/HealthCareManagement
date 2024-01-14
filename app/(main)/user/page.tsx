"use client";
import { Card, CardContent} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Record } from "./record";
import { Appointment } from "./appointment";
import { Table } from "./table";

const page = () => {

  return (
    <>
      <h1 className="font-serif text-lg font-bold">Information</h1>
      <Separator />
      <div className="mt-10 grid grid-cols-3 gap-4 ">
        <Card>
          <CardContent className="w-60">
            <Appointment/>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="w-60">
            <div className="mt-10 justify-end space-y-3">
              <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                1
              </div>
              {/** with doctor */}
              <p>Doctor</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="w-60">
            <Record/>
          </CardContent>
        </Card>
      </div>
      <div className="mt-10">
        <Table/>
      </div>
    </>
  );
};

export default page;
