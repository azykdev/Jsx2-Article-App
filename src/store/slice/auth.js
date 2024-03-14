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
    // LOGIN REDUCER ========================== *** *** *** ================================
    loginStart: (state) => {
      state.loading = true;
      console.log("loading", state.loading);
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailed: (state, action) => {
      state.loading = false;
    },

    // REGISTER REDUCER ========================== *** *** *** ================================
    regiterStart: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
    },
    registerFailed: (state, action) => {
      state.loading = false;
    }

  },
});

export const { loginStart, loginSuccess, loginFailed, regiterStart, registerSuccess, registerFailed } = authSlice.actions;
export default authSlice.reducer