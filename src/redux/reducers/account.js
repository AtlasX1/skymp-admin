import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storage } from "../../utils";
import { authApi } from "../../api";
export const login = createAsyncThunk(
  "accountReducer/login",
  async (payload, { rejectWithValue }) => {
    try {
      const user = await authApi.login(payload.email, payload.password);
      if (payload.isSaveAccount) {
        storage.set(user, "newConnection");
      }
      return user;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const initialState = {
  user: storage.get("newConnection") ?? null,
  loading: "",
  error: "",
};

const accountSlice = createSlice({
  name: "accountReducer",
  initialState,
  reducers: {
    logoutOld: (state, action) => {
      storage.set(null, "connection");
    },
    logout: (state, action) => {
      storage.set(null, "newConnection");
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending.type]: (state) => {
      state.loading = "pending";
      state.error = "";
    },
    [login.fulfilled.type]: (state, { payload }) => {
      state.loading = "idle";
      state.error = "";
      state.user = payload;
    },
    [login.rejected.type]: (state, action) => {
      state.loading = "idle";
      state.error = action.payload;
    },
  },
});

export default accountSlice;
