'use client';
import { createSlice } from '@reduxjs/toolkit';
interface FeaturesProps {
    DocSide: Boolean;
    isModalAddBlog: Boolean;
}
const initialState: FeaturesProps = {
    DocSide: false,
    isModalAddBlog: false,
}
const FeaturesSlice = createSlice({
    name: 'Features',
    initialState,
    reducers: {
        setDocSide(state) {
            state.DocSide = !state.DocSide;
        },
        setModalAddBlog(state, action) {
            state.isModalAddBlog = action.payload;
        },
    },
});

export const FeatureAction = FeaturesSlice.actions;
export default FeaturesSlice.reducer;
