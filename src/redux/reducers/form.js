import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basicInfo: null,
    companyInfo: null,
    productPortfolio: null
};

export const form = createSlice({
    name: "form",
    initialState,
    reducers: {
        setBasicInfo: (state, action) => {
            return { ...state, basicInfo: action?.payload }
        },
        setBroductPortfolio: (state, action) => {
            return { ...state, companyInfo: action?.payload }
        },
        setProductPortfolio: (state, action) => {
            return { ...state, productPortfolio: action?.payload }
        },

    },
});

export const { setBasicInfo, setBroductPortfolio, setProductPortfolio } = layout.actions;

export const getAllFormData = (state) => state.form;

export default form.reducer;
