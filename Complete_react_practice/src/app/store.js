import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import cartSlice from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    User: userSlice,
    Cart: cartSlice,
  },
});
