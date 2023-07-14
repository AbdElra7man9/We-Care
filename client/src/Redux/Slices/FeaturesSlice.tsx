'use client';
import { createSlice } from '@reduxjs/toolkit';
interface FeaturesProps {
    DocSide: Boolean;
    logged: Boolean;
    isModalAddBlog: Boolean;
    rangeValues: number[];
    gender: string;
    specialization: string,
    address_city: string,
    address_governorate: string
}
const initialState: FeaturesProps = {
    DocSide: false,
    logged: false,
    isModalAddBlog: false,
    rangeValues: [0, 100],
    gender: '',
    specialization: '',
    address_city: '',
    address_governorate: '',

}
const FeaturesSlice = createSlice({
    name: 'Features',
    initialState,
    reducers: {
        setDocSide(state) {
            state.DocSide = !state.DocSide;
        },
        setLogged(state, action) {
            state.logged = action.payload;
        },
        setModalAddBlog(state, action) {
            state.isModalAddBlog = action.payload;
        },
        setRangeValues(state, action) {
            state.rangeValues = action.payload;
        },
        setGender(state, action) {
            state.gender = action.payload;
        },
        setSpecialization(state, action) {
            state.specialization = action.payload;
        },
        setGovernmant(state, action) {
            state.address_governorate = action.payload;
        },
        setCity(state, action) {
            state.address_city = action.payload;
        }
    },
});

export const FeatureAction = FeaturesSlice.actions;
export default FeaturesSlice.reducer;
