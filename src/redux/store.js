"use client"
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer/index";
import { configureStore } from "@reduxjs/toolkit";

const store = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });
export const wrapper = createWrapper(store, { debug: false });
