'use client';
import { LogOut, setCredentials } from '../Slices/UserSlice';
import { apiSlice } from '../ApiSlice';
import getSocket from '../SocketRTK';
export const AuthApi = apiSlice.injectEndpoints({
    endpoints: builder => ({

        birthday: builder.mutation({
            query: ({ data, email }) => ({
                url: `/api/auth/birthday?email=${email}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Auth'],
        }),
        signin: builder.mutation({
            query: (data) => ({
                url: '/api/v1/users/login',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem('persist', true)
                    localStorage.setItem('id', result?.data?.user?._id)
                    dispatch(
                        setCredentials({
                            token: result.data.token,
                            user: result.data.data.user,
                        })
                    );
                    let userId = getState().auth?.user?._id;
                    const socket = getSocket()
                    socket.on("connect", () => {
                        socket.emit("join", userId);
                    });
                } catch (err) {
                    // do nothing
                }
            },
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: '/api/v1/patients/signup',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Auth'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data)
                    localStorage.setItem('persist', true)
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
        }),
        signupDoctor: builder.mutation({
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
                    localStorage.setItem('persist', true)
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
        }),
        logOut: builder.mutation({
            query: () => ({
                url: '/api/auth/logout',
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
        refresh: builder.mutation({
            query: () => ({
                url: '/api/v1/users/refresh',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    const { token, user } = data
                    dispatch(setCredentials({ token, user }))
                } catch (err) {
                    console.log(err)
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
        ChangePassword: builder.mutation({
            query: (data) => ({
                url: `/api/auth/changepassword`,
                method: 'PUT',
                body: data
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
                    localStorage.setItem('persist', true)
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
    useBirthdayMutation,
    useLogOutMutation,
    useRefreshMutation,
    useSigninMutation,
    useSignupMutation,
    useSignupDoctorMutation,
    useVerifyEmailMutation,
    useRequestOTP2Mutation,
    useForgetPasswordMutation,
    useResetPasswordMutation,
    useChangePasswordMutation,
} = AuthApi;