import { createSlice } from '@reduxjs/toolkit';
const FeaturesSlice = createSlice({
    name: 'Features',
    initialState: {
        SideBar: false,

    },
    reducers: {
        ShowSideBar(state) {
            state.SideBar = !state.SideBar;
        },
    },
});

export const FeatureAction = FeaturesSlice.actions;
export default FeaturesSlice.reducer;
