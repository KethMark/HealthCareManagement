import { useState } from "react";

export const Appointment = () => {
    const [forms, setForm] = useState({
      id: "",
      name: "",
      contact_number: "",
      gender: "",
      address: "",
      chiefAppointment: "",
      slot: "",
      date: "",
      status: false
    });
  
    const handleChanges = (e: any) => {
      setForm({
          ...forms,
          [e.target.name]: e.target.value
      })
    }
    return { forms, handleChanges}
};


export const ScheduleUpdate = (initialState: any) => {
  const [form, setForm] = useState({
    name: initialState.name || '',
    contact_number: initialState.contact_number || '',
    status: true
  });

  const handleChange = (e: any) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }
  return { form, handleChange}
};

export const statusUpdate = (initialState: any) => {
  const [form, setForm] = useState({
    name: initialState.name || '',
    contact_number: initialState.contact_number || '',
    gender: initialState.gender || '',
    address: initialState.address || '',
    chiefAppointment: initialState.chiefAppointment || '',
    slot: initialState.slot || '',
    date: initialState.date || '',
    status:  false
  });
 

  const handleChange = (e: any) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }
  return { form, handleChange}
};


export const statusPost = (initialState: any) => {
  const [form, setForm] = useState({
    id: '', 
    message: '',
    name: initialState.name || ''
  });
 

  const handleChange = (e: any) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }
  return { form, handleChange}
};

export const record = (initialState: any) => {
  const [form, setForm] = useState({
    id: initialState.id || '',
    name: initialState.name || '',
    contact_number: initialState.contact_number || '',
    gender: initialState.gender || '',
    address: initialState.address || '',
    chiefAppointment: initialState.chiefAppointment || '',
    slot: initialState.slot || '',
    date: initialState.date || '',

    record: true,
    case_no:  '',
    age:  '',
    symptoms:  '',
    date_of_record:  '',
    prescription: '',
    pres_no_days: '',
  });
 

  const handleChange = (e: any) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }
  return { form, handleChange}
};