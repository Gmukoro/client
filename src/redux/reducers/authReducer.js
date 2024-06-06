import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: true,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, loginFail } = authSlice.actions;

export default authSlice.reducer;
