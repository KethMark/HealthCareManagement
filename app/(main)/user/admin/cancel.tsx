import { Button } from '@/components/ui/button'
import { Loader } from '@/components/ui/loader'
import { statusDelete } from '@/lib/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { Toaster, toast } from 'sonner'

type Cancels = {
    data: Appointment
}

const cancel = ({data}: Cancels) => {

    const queryClient = useQueryClient();

    const remove = useMutation({
        mutationFn: statusDelete,
        onSuccess: () => {
          toast.success("Appointment cancel"); 
          queryClient.invalidateQueries({ queryKey: ["pending"] });
        },
        onError: () => {
            toast.error("Their's something wrong. Try again");
        },
      });
    
      const removes = () => {
        remove.mutate(data.id);
      };

  return (
    <div>
        <Toaster richColors position="top-center" />
        <Button onClick={removes} className='w-24 bg-red-700 hover:bg-red-700'> {remove.isPending? <Loader/> : 'Cancel'} </Button>
    </div>
  )
}

export default cancel