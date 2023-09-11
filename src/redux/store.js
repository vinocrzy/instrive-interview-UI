import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import layout from "./reducers/layout";
import { userReducer } from "./reducers/user";

export const store = configureStore({
  reducer: {
    layout: layout,
    user: userReducer,
  },
});


