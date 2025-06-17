import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isAlready = state.cartItems.some((item) => {
        return item.id === action.payload.id;
      });
      console.log(isAlready);

      if (!isAlready) {
        state.cartItems.push(action.payload);
        state.cartCount += 1;
        alert("item added to cart");
      } else {
        alert("item is already exist");
      }
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
