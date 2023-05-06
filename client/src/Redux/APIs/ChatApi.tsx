'use client';
import { ChatType } from '@lib/types/chat';
import { RootState } from '@Redux/Store';
import { apiSlice } from '../ApiSlice';
import getSocket from '../SocketRTK';

interface ChatResponse {
    status: string;
    results: number;
    chats: ChatType[];
}

export const ChatApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        NewChat: builder.mutation<{ status: string; chatId: string }, { id: string }>({
            query: ({ id }) => ({
                url: `/api/v1/chat/${id}`,
                method: 'Post',
            }),
            invalidatesTags: ['Chat', 'User'],
        }),
        UserChats: builder.query<ChatResponse, { page: 1 }>({
            query: ({ page }) => ({
                url: `/api/chat/all?page=${page}`,
                method: 'GET',
            }),
            // transformResponse(apiResponse, meta) {
            //     // const totalCount = Number(meta.response.headers.get('X-Total-Count'));
            //     let onlineStatus = false
            //     for (let i = 0; i < apiResponse.length; i++) {
            //         apiResponse[i].isOnline = onlineStatus; // add the new element to each object
            //     }
            //     return {
            //         Chats: apiResponse,
            //         totalCount: Number(apiResponse.length)
            //     };
            // },
            providesTags: ['Message'],
            async onCacheEntryAdded(
                args,
                { cacheEntryRemoved, updateCachedData, cacheDataLoaded, getState }
            ) {
                const chats = await cacheDataLoaded;
                let userId = (getState() as RootState).auth.user?._id;
                const socket = getSocket()
                socket.on("connect", () => {
                    socket.emit("join", userId);
                });
                // try {
                //     socket.on("getusers", (data) => {
                //         for (let i = 0; i < chats.length; i++) {
                //             const ckeckIsOnline = data?.some(user => user.userId === chats[i]?._id)
                //             updateCachedData((draft) => {
                //                 draft.Chats[i].isOnline = ckeckIsOnline
                //             });
                //         }

                //     });

                // } catch (err) { }

                await cacheEntryRemoved;
                socket.close();
            },
        }),

        getMoreChats: builder.query<{ status: string; results: number; chats: ChatType[] }, { page: 1 }>({
            query: ({ page }) => ({
                url: `/api/v1/chat/all?page=${page}`,
                method: 'GET',
            }),

                async onQueryStarted({ page }, { queryFulfilled, dispatch }) {
                    try {

                        const { data } = await queryFulfilled;

                        dispatch(
                            ChatApi.util.updateQueryData("UserChats", { page: 1 }, (draft) => {
                                return {
                                    chats: [
                                        ...draft.chats,
                                        ...data.chats,
                                    ],
                                    results: data.results,
                                    status: data.status,
                                };
                            })
                        );
                    } catch (err) {
                        console.log(err)
                    }
                },
            }),

            // SingleChat: builder.query({
            //     query: (id) => ({
            //         url: `/api/chat/${id}`,
            //         method: 'GET',
            //     }),
            //     providesTags: ['Chat', 'User'],
            // }),

        }),
    });

    export const {
        useNewChatMutation,
        useUserChatsQuery,
        // useSingleChatQuery,
    } = ChatApi;
