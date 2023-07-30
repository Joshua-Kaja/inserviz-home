import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  credentials: sessionStorage.getItem("credentials")
    ? JSON.parse(sessionStorage.getItem("credentials"))
    : [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: {
      reducer(state, action) {
        state.credentials = action.payload;
      },
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
