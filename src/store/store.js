import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import credentialsReducer from "./slices/credentialsSlice";
import bookingReducer from "./slices/bookingSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    credentials: credentialsReducer,
    booking: bookingReducer,
  },
});

export default store;
