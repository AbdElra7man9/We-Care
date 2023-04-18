import { user } from "./user";

export interface LikeType {
    user: user;
    blog: string;
    createdAt?: string;
    updatedAt: string;
    _id?: string;
    __v?: 0;
}