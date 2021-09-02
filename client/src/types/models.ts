type UID = string;


export interface User {
  uid: UID;
}

export interface Barber {
  uid: UID;
}

export interface BarberProfile {
  barber: string;
}
