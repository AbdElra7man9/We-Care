'use client';
import { userType } from "@lib/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";

interface UserState {
    user: userType;
    token: string;
}

const initialState: UserState = {
    user: {},
    token: '',
};

const UserSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, action: PayloadAction<{ user: userType, token: string }>) {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        LogOut(state) {
            state.user = {};
            state.token = '';
        },
    },
    // extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //         return {
    //             ...state,
    //             ...action.payload.auth,
    //         };
    //     },
    // },
});

export const { setCredentials, LogOut } = UserSlice.actions;
export default UserSlice.reducer;

export const selectCurrentUser = (state: { auth: UserState }) => state.auth.user;
export const selectCurrentToken = (state: { auth: UserState }) => state.auth.token;