import { setupListeners } from "@reduxjs/toolkit/query"
import { configureStore } from '@reduxjs/toolkit'
import UserSlice from "./Slices/UserSlice";
import FeaturesSlice from './Slices/FeaturesSlice';
import MessageSlice from "./Slices/MessageSlice";
import { apiSlice } from './ApiSlice';
export const Store = configureStore({
    reducer: {
        auth: UserSlice,
        MSGs: MessageSlice,
        Features: FeaturesSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        apiSlice.middleware),
    devTools: process.env.REACT_APP_NODE_ENV !== "production",
});
setupListeners(Store.dispatch)

