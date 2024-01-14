import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader } from '@/components/ui/loader';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { statusPUT } from '@/lib/api';
import {  statusUpdate } from '@/lib/formstate';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { Toaster, toast } from 'sonner';

type reSchedules = {
    reSchedule: Appointment;
};

const Re_schedule = ({reSchedule}: reSchedules) => {

  const queryClient = useQueryClient();
  const { form, handleChange } = statusUpdate(reSchedule)

  const mutate = useMutation({
    mutationFn: statusPUT,
    onSuccess: () => {
      toast.success("Appointment Update");
      queryClient.invalidateQueries({ queryKey: ["appointment"] });
    },
    onError: () => {
      toast.error("Their's something wrong. Try again");
    },
  });

  const status = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(), mutate.mutate({ id: reSchedule.id, ...form });
  };
  
  return (
    <Dialog>
      <Toaster richColors position="top-center" />
      <DialogTrigger asChild>
        {reSchedule.status ? (
          <Button>Update</Button>
        ) : (
          null
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={status}>
          <DialogHeader>
            <DialogTitle>Change Schedule</DialogTitle>
            <DialogDescription>
              Make changes to your schedule here. Click save change when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <Label className="text-right">Slot</Label>
              <Select
                name="slot"
                onValueChange={(value) =>
                  handleChange({ target: { name: "slot", value } })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder={form.slot}/>
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                  <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                  <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Date</Label>
              <Input
                name="date"
                value={form.date}
                className="col-span-3"
                onChange={handleChange}
                type="date"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-32">
              {mutate.isPending ? <Loader /> : "Save Change"}{" "}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default Re_schedule