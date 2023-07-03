'use client';
import { createSlice } from '@reduxjs/toolkit';
interface FeaturesProps {
    DocSide: Boolean;
    isModalAddBlog: Boolean;
    rangeValues: number[];
    gender: string;
    specialization: '',
}
const initialState: FeaturesProps = {
    DocSide: false,
    isModalAddBlog: false,
    rangeValues: [0, 100],
    gender: '',
    specialization: '',
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
        setRangeValues(state, action) {
            state.rangeValues = action.payload
        },
        setGender(state, action) {
            state.gender = action.payload
        },
        setSpecialization(state, action) {
            state.specialization = action.payload
        }
    },
});

export const FeatureAction = FeaturesSlice.actions;
export default FeaturesSlice.reducer;
