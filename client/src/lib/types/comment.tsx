import { user } from "./user";

export interface CommentType {
    user: user;
    blog: string;
    content: string;
    createdAt?: string;
    updatedAt: string;
    _id?: string;
    __v?: 0;
}