import { userType } from "./user";

export interface LikeType {
    user?: userType;
    blog?: string;
    createdAt?: string;
    updatedAt?: string;
    _id?: string;
    __v?: 0;
}