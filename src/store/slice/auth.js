import { createSlice } from "@reduxjs/toolkit";
import { removeItem, setItem } from "../../helpers/persistance-storage";

const initialState = {
  user: null,
  loading: false,
  error: null,
  loggedIn: false,
};

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

      setItem("token", action.payload.token);
    },
    signFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // SIGN OUT REDUCER ========================== *** *** *** ================================
    signOut: (state) => {
      state.loggedIn = false;
      state.user = null;
      removeItem("token");
    },
  },
});

export const { signStart, signSuccess, signFailed, signOut } =
  authSlice.actions;
export default authSlice.reducer;
