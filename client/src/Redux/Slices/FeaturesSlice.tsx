'use client';
import { createSlice } from '@reduxjs/toolkit';
interface FeaturesProps {
    DocSide: Boolean;
}
const initialState: FeaturesProps = {
    DocSide: false,
}
const FeaturesSlice = createSlice({
    name: 'Features',
    initialState,
    reducers: {
        setDocSide(state) {
            state.DocSide = !state.DocSide;
        },
    },
});

export const FeatureAction = FeaturesSlice.actions;
export default FeaturesSlice.reducer;
