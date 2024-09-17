import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    modal: modalReducer,
  },
});

export default store;
