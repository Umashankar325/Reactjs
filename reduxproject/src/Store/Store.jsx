import { configureStore } from "@reduxjs/toolkit";
import productslice from "./reducers/Productslice";
export default configureStore({
  reducer: {
    products: productslice,
  },
});
