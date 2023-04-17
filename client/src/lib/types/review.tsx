import { user } from "./user";

export interface ReviewType {
    _id?: string;
    __v?: string;
    patient?: user;
    doctor?: user;
    createdAt?: string;
    updatedAt: string;
    rating?: number;
    comment?: user;
}