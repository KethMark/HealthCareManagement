import axios from "axios";

export const userPOST = (data: Appointment): Promise<Appointment> =>
 axios.post("/api/user", data).then((res) => res.data);

//data
export const userGET = (): Promise<Appointment[]> => 
 axios.get("/api/user").then((res) => res.data);

// admin og patient 
export const adminGET = (): Promise<Appointment[]> => 
 axios.get("/api/admin").then((res) => res.data);

export const adminDelete = (id: string): Promise<Appointment> =>
 axios.delete(`/api/admin/${id}`).then((res) => res.data);

export const userPUT = (data: any): Promise<Appointment> =>
 axios.put(`/api/user/${data.id}`, data).then((res) => res.data);

export const statusPUT = (data: any): Promise<Status> =>
 axios.put(`/api/status/${data.id}`, data).then((res) => res.data);

export const statusDelete = (id: string): Promise<Status> =>
 axios.delete(`/api/status/${id}`).then((res) => res.data);

//below 1, try change ag any to Cancel
export const statusPOST = (data: Cancel): Promise<Cancel> =>
 axios.post("/api/status", data).then((res) => res.data);

export const statusGET = (): Promise<Cancel[]> => 
 axios.get("/api/status").then((res) => res.data);

//below 1
export const countGET = (): Promise<CountAppointment[]> => 
 axios.get("/api/appointment").then((res) => res.data);

//below 2
export const recordPOST = (data: Records): Promise<Records> =>
 axios.post("/api/record", data).then((res) => res.data)

export const recordGET = (): Promise<Records[]> =>
 axios.get("/api/record").then((res) => res.data)


//below 1
export const recordsGET = (): Promise<CountRecord[]> => 
 axios.get("/api/recordD").then((res) => res.data);

export const recordDelete = (id: string): Promise<Appointment> =>
 axios.delete(`/api/user/${id}`).then((res) => res.data);
