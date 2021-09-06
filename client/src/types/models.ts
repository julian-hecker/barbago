type UID = string;

export interface User {
  bio: string;
  name: string;
  phone: string;
  picture: string;
}

export interface Barber {
  uid: UID;
}

export interface BarberProfile {
  barber: string;
}
