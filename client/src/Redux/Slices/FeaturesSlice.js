import { createSlice } from '@reduxjs/toolkit';
const FeaturesSlice = createSlice({
    name: 'Features',
    initialState: {
        DocSide: false,

    },
    reducers: {
        setDocSide(state) {
            state.DocSide = !state.DocSide;
        },
    },
});

export const FeatureAction = FeaturesSlice.actions;
export default FeaturesSlice.reducer;
