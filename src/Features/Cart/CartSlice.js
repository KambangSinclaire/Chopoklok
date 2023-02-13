import { createSlice } from "@reduxjs/toolkit";
import products from "../../assets/Data/Products";

const initialState = {
  cartItems: [],
  itemAmountInCart: 0,
  totalPrice: 0,
  isLoadingFromDb: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ClearChopOklokCart: (state) => {
      state.cartItems =
        []; /* Can mutate the state(product object) because immer takes care of it behind the scenes */
    },
    removeItemFromCart: (state, action) => {
      const itemId =
        action.payload; /* Get unique Item Id from cartItems array */
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemId
      ); /* Remove item from array and set result as current cartItems array */

      console.log(itemId);
    },
    increaseItemQty: (state, { payload }) => {
      console.log(payload, "uuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
      const item = state.cartItems.find((i) => i.id === payload);
      item.amount = item.amount + 1;
    },
    decreaseItemQty: (state, { payload }) => {
      const item = state.cartItems.find((i) => i.id === payload);
      item.amount = item.amount - 1;
    },
    calculateTotalInCart: (state) => {
      let amount = 0;
      let total2 = 0;
      state.cartItems.forEach((item) => {
        // Track amount of items in cart
        amount += item.amount;
        console.log(amount + "amount");
        // Calculate Monetary total in cart
        total2 += item.amount * item.price;
        /*  console.log(total2 + "total"); */
      });
      state.itemAmountInCart = amount;
      state.totalPrice = total2;
    },
    addToCart: (state, action) => {
      console.log(action);
      const newItem = action.payload;
      const itemInCart = state.cartItems.find((item) => item.id === action);

      if (itemInCart) {
        itemInCart.amount = state.itemAmountInCart++;
      } else {
        state.cartItems.push({
          ...action,
          amount: 1,
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image01: newItem.image01,
          category: newItem.category,
          desc: newItem.desc,
        });
      }
      /*    alert("Working!!!");
      console.log(itemInCart); */
      /*       const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem);
      state.itemAmountInCart++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          amount: newItem.amount,
          category: newItem.category,
          image01: newItem.image01,
        });
      } else {
        existingItem.amount++;
      } */
    },
  },
});

/* console.log(cartSlice) */

export const {
  ClearChopoklokCart,
  removeItemFromCart,
  increaseItemQty,
  decreaseItemQty,
  calculateTotalInCart,
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
