import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  loggedIn: false,
  role:null,
  userData: null,
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.role = action.payload.role;
      state.userData = action.payload;
    },

    logout: (state) => initialAuthState,
    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
