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
    // SIGN REDUCER ========================== *** *** *** ================================
    signStart: (state) => {
      state.loading = true;
    },
    signSuccess: (state, action) => {
      state.loading = false;
      state.loggedIn = true;
      state.user = action.payload;
    },
    signFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }

  },
});

export const { signStart, signSuccess, signFailed } = authSlice.actions;
export default authSlice.reducer