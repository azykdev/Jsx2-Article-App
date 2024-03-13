import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,  
  loggedIn: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      console.log("loading", state.loading);
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    loginFailed: (state, action) => {
      
    }

  },
});

export const { loginStart, loginSuccess, loginFailed } = authSlice.actions;
export default authSlice.reducer