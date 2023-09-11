import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  darkTheme: true,
};

export const layout = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
      localStorage.setItem("darkTheme", JSON.stringify(!state.darkTheme));
    },
    switchTheme: (state, action) => {
      state.darkTheme = action.payload;
      localStorage.setItem("darkTheme", JSON.stringify(action.payload));
    },
  },
});

export const { toggleTheme, switchTheme } = layout.actions;

export const selectTheme = (state) => state.layout.darkTheme;

export default layout.reducer;
