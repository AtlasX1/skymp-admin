import { createSlice } from "@reduxjs/toolkit";
import { storage } from "../../utils";

const initialState = {
  screen: "Preloader",
  loading: "",
  error: "",
};

const screenSlice = createSlice({
  name: "screenReducer",
  initialState,
  reducers: {
    changeScreen: (state, action) => {
      state.screen = action.payload;
    },
  },
});

export default screenSlice;
