
import { appointmentsType } from "./appointment";
import { ImageType } from "./Feature";

export type userType = {
    name?: string;
    email?: string;
    username?: string;
    confirmed?: boolean;
    profilePicture?: string;
    specialization?: string;
    fees?: string;
    timePerPatient?: string;
    averageRating?: string;
    status?: string;
    emailConfirm?: string;
    numberOfRating?: string;
    gender?: string;
    age?:string;
    timeTable?: string;
    patients?: string;
    ScheduleTiming?: string;
    appointments?: appointmentsType | null;

    _id?: string;
    __t?: 'Doctor' | 'Patient' | 'Coordinator';
    __v?: number;
    createdAt?: Date;
    updatedAt?: Date;
    image?: ImageType
};

export interface AuthState {
    status?: string;
    token?: string;
    expires?:string;
    user?: userType
}
