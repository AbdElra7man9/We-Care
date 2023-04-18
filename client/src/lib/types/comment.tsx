import { userType } from "./user";

export interface CommentType {
    user: userType;
    blog: string;
    content: string;
    createdAt?: string;
    updatedAt: string;
    _id?: string;
    __v?: 0;
}