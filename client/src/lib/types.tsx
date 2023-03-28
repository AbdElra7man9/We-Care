
export type appointments = {
    _id: string;
};

export type UserInfoProps = {
    appointments: appointments | null;
    _id?: string;
    name?: string;
    email?: string;
    username?: string;
    confirmed?: boolean;
    __t?: string;
    __v?: number;
    createdAt?: Date;
    updatedAt?: Date;
};
export type user = {
    user: UserInfoProps;
    token?: string;
};

export interface AuthState {
    status?: string;
    token?: string;
    data?: user
}
