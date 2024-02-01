import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalProducts: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.totalProducts += 1;
      state.products = [...state.products, action.payload];
    },
    removeToCart: (state, action) => {
      const productId = action.payload.id;
      state.totalProducts -= 1;
      state.products = state.products.filter(
        (product) => product.product.id !== productId
      );
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
