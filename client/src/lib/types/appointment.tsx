import { userType } from "./user";

export interface iAppointments {
    _id: string;
    type: string;
    status: string;
    paid: string;
    date: string;
    price: number;
    doctor: userType;
    patient: userType;
    createdAt: string;
    updatedAt: string;
    __v: 0
};