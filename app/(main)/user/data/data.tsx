import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import React from 'react'

type Datas = {
    data: Appointment;
};

export const Data = ({data}:Datas) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'><DotsHorizontalIcon/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>User profile</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4  items-center gap-4">
              <Label className="text-right">sex</Label>
              <Input
                value={data.gender}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Address</Label>
              <Input
                value={data.address}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Chief App</Label>
              <Input
                value={data.chiefAppointment}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Slot</Label>
              <Input
                value={data.slot}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Date</Label>
              <Input
                name="date"
                value={data.date}
                className="col-span-3"
              />
            </div>
          </div>
      </DialogContent>
    </Dialog>
  )
}
