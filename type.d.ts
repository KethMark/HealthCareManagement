type Appointment = {
  id: string;
  name: string;
  contact_number: string;
  gender: string;
  address: string;
  chiefAppointment: string;
  slot: string;
  date: string;
  status: boolean;
};

type Status = {
  id: string;
  name: string;
  contact_number: string;
  gender: string;
  address: string;
  chiefAppointment: string;
  slot: string;
  date: string;
};

type CountAppointment = {
  id: string
  status: string
}

type CountRecord = {
  id: string
  record: string
}

type Cancel = {
  id: string;
  name: string;
  message: string;
};

type Records = {
  id: string;
  name: string;
  contact_number: string;
  gender: string;
  address: string;
  chiefAppointment: string;
  slot: string;
  date: string;
  record: boolean;

  case_no: string;
  age: string;
  symptoms: string;

  date_of_record: string;
  prescription: string;
  pres_no_days: string;
};
