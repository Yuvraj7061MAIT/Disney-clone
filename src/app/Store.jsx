import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/User/UserSlice"; // Updated import

export default configureStore({
  reducer: {
    user: userReducer, // Corrected reducer naming
  },
});
