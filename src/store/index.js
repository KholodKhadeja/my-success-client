import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // counter: counterReducer,
  },
});

export default store;
