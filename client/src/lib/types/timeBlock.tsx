import { userType } from "./user";

export interface iTimeBlock {
    period: number;
    startTime: string;
    type: string;
    doctor: userType;
    _id: string;
    __v: string;
}