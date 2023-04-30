'use client';
import { setupListeners } from "@reduxjs/toolkit/query"
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { MakeStore, createWrapper, HYDRATE, Context } from "next-redux-wrapper";
import UserSlice from "./Slices/UserSlice";
import FeaturesSlice from './Slices/FeaturesSlice';
import MessageSlice from "./Slices/MessageSlice";
import { apiSlice } from './ApiSlice';

// const combinedReducer = combineReducers({
//     auth: UserSlice,
//     MSGs: MessageSlice,
//     Features: FeaturesSlice,
// });

// const reducer = (state: any, action: any) => {
//     if (action.type === HYDRATE) {
//         const nextState = {
//             ...state,
//             ...action.payload,
//         };
//         return nextState;
//     } else {
//         return combinedReducer(state, action);
//     }
// };
export const store = configureStore({
    reducer: {
        auth: UserSlice,
        MSGs: MessageSlice,
        Features: FeaturesSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        apiSlice.middleware),
    devTools: process.env.REACT_APP_NODE_ENV !== "production"
});

// const makeStore = () => store;
setupListeners(store.dispatch);

// export type RootStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<RootStore["getState"]>;
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// export const wrapper = createWrapper<RootStore>(makeStore, { debug: true });