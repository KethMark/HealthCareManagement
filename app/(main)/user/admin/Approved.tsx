import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { userPUT } from '@/lib/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { ScheduleUpdate } from '@/lib/formstate'
import { Toaster, toast } from 'sonner'
import { Loader } from '@/components/ui/loader'

type confirmation = {
    data: Appointment
}

const Approved = ({data}: confirmation) => {

    const {form, handleChange } = ScheduleUpdate(data);
    const queryClient = useQueryClient();

    const mutates = useMutation({
        mutationFn: userPUT,
        onSuccess: () => {
            toast.success('Appointment confirmed');
            queryClient.invalidateQueries({queryKey: ["pending"]});
        },
        onError: () => {
            toast.error("Their's something wrong. Try again")
        }
    })

    const update = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault(), mutates.mutate({id: data.id, ...form})
    }

    // create cancel dashbaoard
  return (
    <div>
        <form onSubmit={update}>
        <Toaster richColors position="top-center"/>
            <Button className='w-20'> {mutates.isPending? <Loader/> : 'Confirm'}</Button>
        </form>
    </div>
  )
}

export default Approved