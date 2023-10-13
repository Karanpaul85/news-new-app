import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const store = () =>
  configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
  });
export const wrapper = createWrapper(store, { debug: false });
