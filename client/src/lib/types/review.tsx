import { userType } from "./user";

export interface ReviewType {
    _id?: string;
    __v?: string;
    patient?: userType;
    doctor?: userType;
    createdAt?: string;
    updatedAt: string;
    rating?: number;
    comment?: string;
}