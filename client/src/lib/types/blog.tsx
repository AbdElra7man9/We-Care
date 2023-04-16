import { ImageType } from "./Feature";
import { user } from "./user";

export interface BlogType {
    _id?: string;
    __v?: string;
    title: string;
    des?: string;
    createdAt?: string;
    updatedAt: string;
    image: ImageType;
    user:user;
}