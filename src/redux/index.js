import { configureStore } from "@reduxjs/toolkit";
import accountSlice, { login } from "./reducers/account";
import screenSlice from "./reducers/screens";

const store = configureStore({
  reducer: {
    accountReducer: accountSlice.reducer,
    screenReducer: screenSlice.reducer,
  },
});

export const accountActions = {
  ...accountSlice.actions,
  asyncActions: { login },
};

export const screenActions = {
  ...screenSlice.actions,
};
export default store;
