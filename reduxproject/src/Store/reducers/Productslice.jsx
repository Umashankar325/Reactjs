import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { id: 1, product: "Product01", price: 100 },
    { id: 2, product: "Product02", price: 150 },
    { id: 3, product: "Product03", price: 200 },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
});

export default productSlice.reducer