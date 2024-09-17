import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../data/dummyData";
import axios from "axios";

const url = "https://www.course-api.com/react-useReducer-cart-project";

// export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
//   try {
//     const res = await fetch(url);
//     return await res.json();
//   } catch (err) {
//     return console.log(err);
//   }
// });
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong", error);
    }
  }
);

const initialState = {
  cartItems: cartItems,
  amount: 2,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];

      // state.amount = 0;
      // state.total = 0;
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      // const itemId = action.payload;
      // const itemToRemove = state.cartItems.find((item) => item.id === itemId);
      // if (itemToRemove) {
      //   state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      //   state.amount -= itemToRemove.amount;
      //   state.total -= itemToRemove.amount * itemToRemove.price;
      // }
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;

      // const cartItem = state.cartItems.find((item) => item.id === payload.id);
      // if (cartItem) {
      //   cartItem.amount += 1;
      //   state.amount += 1;
      //   state.total += cartItem.price;
      // }
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;

      // const cartItem = state.cartItems.find((item) => item.id === payload.id);
      // if (cartItem && cartItem.amount > 1) {
      //   cartItem.amount -= 1;
      //   state.amount -= 1;
      //   state.total -= cartItem.price;
      // }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log(action.payload);

        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
