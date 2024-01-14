"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader } from "@/components/ui/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { userPOST } from "@/lib/api";
import { Appointment } from "@/lib/formstate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";
import { Toaster, toast } from "sonner";
import Details from "./details";

const page = () => {
  const queryClient = useQueryClient();
  const forRef = useRef<HTMLFormElement>(null);
  const { forms, handleChanges } = Appointment();

  const mutation = useMutation({
    mutationFn: userPOST,
    onSuccess: async () => {
      forRef.current?.reset();
      toast.success("Appointment added");
      queryClient.invalidateQueries({ queryKey: ["pending"] });
      queryClient.invalidateQueries({ queryKey: ["appointment"] });
      queryClient.invalidateQueries({ queryKey: ["approved"] });
    },
    onError: async () => {
      toast.error("Their's something wrong. Try again");
    },
  });

  const Onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(), mutation.mutate(forms);
  };

  return (
    <div>
      <h1 className="font-serif text-lg font-bold">Appointment</h1>
      <Separator />
      <Details />
      <div className="mt-10">
        <Toaster richColors position="top-center" />

        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Create Appointment</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create Appointment</DialogTitle>
                <DialogDescription>
                  Book your appointment with our specialists.
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-2 " onSubmit={Onsubmit} ref={forRef}>
                <div className="flex flex-col space-y-1.5">
                  <Label>Name</Label>
                  <Input name="name" onChange={handleChanges} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Contact Number</Label>
                  <Input name="contact_number" onChange={handleChanges} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Sex</Label>
                  <Select
                    name="gender"
                    onValueChange={(value) =>
                      handleChanges({ target: { name: "gender", value } })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Address</Label>
                  <Input name="address" onChange={handleChanges} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Chief Appointment</Label>
                  <Textarea name="chiefAppointment" onChange={handleChanges} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Slot Time</Label>
                  <Select
                    name="slot"
                    onValueChange={(value) =>
                      handleChanges({ target: { name: "slot", value } })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                      <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                      <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Select Date</Label>
                  <Input onChange={handleChanges} name="date" type="date" />
                </div>
                <DialogFooter>
                  <Button className="w-32">
                    {mutation.isPending ? <Loader /> : "Submit"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default page;
