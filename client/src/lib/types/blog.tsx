import { ImageType } from "./Feature";
import { userType } from "./user";

export interface BlogType {
    _id?: string;
    __v?: string;
    title?: string;
    des?: string;
    createdAt?: string;
    updatedAt?: string;
    image: ImageType;
    numComments?:number;
    numLikes?:number;
    user?: userType;
}