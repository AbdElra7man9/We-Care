'use client';
import { LogOut, setCredentials } from '../Slices/UserSlice';
import { apiSlice } from '../ApiSlice';
import getSocket from '../SocketRTK';
import { RootState } from '../Store';
import { AuthState, userType } from '@lib/types/user';
interface SignInData {
    email: string;
    password: string;
}
interface SignUpData {
    email: string;
    password: string;
    name: string;
    passwordConfirm: string;
}
interface SignUpDoctorData {
    email: string;
    password: string;
    name: string;
    specialization: string;
    passwordConfirm: string;
}
export const AuthApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        SigninUser: builder.mutation<AuthState, SignInData>({
            query: ({ email, password }) => ({
                url: '/api/v1/users/login',
                method: 'POST',
                body: { email, password },
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(
                        setCredentials({
                            token: data.token as string,
                            user: data.user as userType,
                        })
                    );
                    let userId = (getState() as RootState).auth?.user?._id;
                    const socket = getSocket()
                    socket.on("connect", () => {
                        socket.emit("join", userId);
                    });
                    socket.on("getusers", (data) => {
                        console.log(`goined ${data.length}`)
                        console.log(data)
                    });
                } catch (err) {
                    // do nothing
                }
            },
        }),
        signup: builder.mutation<{ status: string; token: string; user: userType }, SignUpData>({
            query: (data) => ({
                url: '/api/v1/patients/signup',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Auth'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;
                    const { token, user } = data
                    localStorage.setItem('persist', 'true')
                    dispatch(
                        setCredentials({ token, user })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        signupDoctor: builder.mutation<{ status: string; token: string; user: userType }, SignUpDoctorData>({
            query: (data) => ({
                url: 'api/v1/doctors/signup',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Auth'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data)
                    localStorage.setItem('persist', 'true')
                    dispatch(
                        setCredentials({
                            token: data.token,
                            user: data.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        logOut: builder.mutation<{ message: string }, void>({
            query: () => ({
                url: '/api/v1/users/logout',
                method: 'POST',

            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                    dispatch(LogOut())
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState())
                        localStorage.removeItem('persist')
                        localStorage.removeItem('id')
                    }, 1000)
                } catch (err) {
                    console.log(err)
                }
            },
            invalidatesTags: ['Auth'],
        }),
        refresh: builder.mutation<{ token: string; user: userType }, void>({
            query: () => ({
                url: '/api/v1/users/refresh',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    const { token, user } = data
                    dispatch(setCredentials({ token, user }))
                    let userId = user?._id;
                    const socket = getSocket()
                    socket.on("connect", () => {
                        socket.emit("join", userId);
                    });
                } catch (err) {
                    // console.log(err)
                }
            },
            invalidatesTags: ['Auth'],
        }),
        VerifyEmail: builder.mutation({
            query: (data) => ({
                url: `/api/v1/users/emailConfirmation`,
                method: 'POST',
                body: data
            }),

        }),
        ChangePassword: builder.mutation<{ user: userType; message: string }, {
            passwordCurrent: string, password: string, passwordConfirm: string
        }>({
            query: ({ passwordCurrent, password, passwordConfirm }) => ({
                url: `/api/v1/users/updatePassword`,
                method: 'PATCH',
                body: { passwordCurrent, password, passwordConfirm }
            }),
            invalidatesTags: ['Auth'],
        }),
        RequestOTP2: builder.mutation({
            query: (data) => ({
                url: '/api/auth/request2otpactivate',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Auth'],
        }),
        ForgetPassword: builder.mutation({
            query: (email) => ({
                url: `api/v1/users/forgotPassword`,
                method: 'POST',
                body: email
            }),
            invalidatesTags: ['Auth'],
        }),
        ResetPassword: builder.mutation({
            query: ({ token, data }) => ({
                url: `/api/v1/users/resetPassword/${token}`,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem('persist', 'true')
                    localStorage.setItem('id', data.data.user._id)
                    dispatch(
                        setCredentials({
                            token: data.token,
                            user: data.data.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
            invalidatesTags: ['Auth'],
        }),
    }),
});
export const {
    useLogOutMutation,
    useRefreshMutation,
    useSigninUserMutation,
    useSignupMutation,
    useSignupDoctorMutation,
    useVerifyEmailMutation,
    useRequestOTP2Mutation,
    useForgetPasswordMutation,
    useResetPasswordMutation,
    useChangePasswordMutation,
} = AuthApi;