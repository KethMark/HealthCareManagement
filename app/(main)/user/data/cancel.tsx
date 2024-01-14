import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader } from "@/components/ui/loader";
import { Textarea } from "@/components/ui/textarea";
import { statusDelete, statusPOST } from "@/lib/api";
import { statusPost } from "@/lib/formstate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Toaster, toast } from "sonner";

type cancels = {
  cancel: Appointment;
};

const cancel = ({ cancel }: cancels) => {
  const queryClient = useQueryClient();
  const { form, handleChange } = statusPost(cancel);

  const mutatePost = useMutation({
    mutationFn: statusPOST,
    onSuccess: () => {
      toast.success("Appointment cancel");
      removes();
    },
    onError: () => {
      toast.error("Their's something wrong. Try again");
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutatePost.mutate(form);
  };

  //appointment og status, sa appointment dli mo close ag modal
  //sa status dli ma update ag date
  const remove = useMutation({
    mutationFn: statusDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointment"] });
    }
  });

  const removes = () => {
    remove.mutate(cancel.id);
  };
  <Toaster richColors position="top-center" />;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-24 bg-red-700 hover:bg-red-700">
          Cancel
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cancel Appointment</DialogTitle>
          <DialogDescription>
             Click continue when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <Textarea
            name="message"
            onChange={handleChange}
          />
          <DialogFooter className="mt-5">
            <Button className="w-24 ">
              {mutatePost.isPending ? <Loader /> : "Continue"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default cancel;
