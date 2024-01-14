import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { recordDelete, recordPOST } from "@/lib/api";
import { record } from "@/lib/formstate";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Toaster, toast } from "sonner";

type Datas = {
  data: Appointment;
};

export const Medical_Records = ({ data }: Datas) => {
  const queryClient = useQueryClient();
  const { form, handleChange } = record(data);

  const mutation = useMutation({
    mutationFn: recordPOST,
    onSuccess: () => {
      toast.success("Medical record added");
      removes();
    },
    onError: () => {
      toast.error("Their's something wrong. Try again");
    },
  });

  const Onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  const remove = useMutation({
    mutationFn: recordDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["approved"] });
      queryClient.invalidateQueries({ queryKey: ["records"] });
    },
  });

  const removes = () => {
    remove.mutate(data.id);
  };

  <Toaster richColors position="top-center" />;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Pencil1Icon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Medical Record</DialogTitle>
          <DialogDescription>
            create an medical records of user
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={Onsubmit}>
          <Tabs defaultValue="information" className="w-[460px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="information">Information</TabsTrigger>
              <TabsTrigger value="prescription">Prescriptions</TabsTrigger>
            </TabsList>
            <TabsContent value="information">
              <Card>
                <CardHeader>
                  <CardTitle>Information</CardTitle>
                  <CardDescription>
                    Enter the information about the patient.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label>Case_No</Label>
                    <Input onChange={handleChange} name="case_no" />
                  </div>
                  <div className="space-y-1">
                    <Label>Age</Label>
                    <Input onChange={handleChange} name="age" maxLength={3} />
                  </div>
                  <div className="space-y-1">
                    <Label>Symptoms</Label>
                    <Textarea
                      placeholder="Write something..."
                      className="w-full"
                      name="symptoms"
                      onChange={handleChange}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="prescription">
              <Card>
                <CardHeader>
                  <CardTitle>Prescription</CardTitle>
                  <CardDescription>
                    Enter the prescription of patient, Click save
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label>Date of Record</Label>
                    <Input
                      onChange={handleChange}
                      type="date"
                      name="date_of_record"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Prescription</Label>
                    <Textarea
                      placeholder="Write something..."
                      className="w-full"
                      name="prescription"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>No of Days</Label>
                    <Input
                      onChange={handleChange}
                      className="col-span-3"
                      name="pres_no_days"
                    />
                  </div>
                </CardContent>
                <DialogFooter>
                  <CardFooter>
                    <Button>
                      {mutation.isPending ? <Loader /> : "Submit"}
                      {mutation.error ? "Their's something error" : null}
                    </Button>
                  </CardFooter>
                </DialogFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </form>
      </DialogContent>
    </Dialog>
  );
};
