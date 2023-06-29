import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  product: any[];
}

const initialState: ProductState = {
  product: [],
};

export const getProductSlice = createSlice({
  name: "getProduct",
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<any[]>) => {
      state.product = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProducts } = getProductSlice.actions;

export default getProductSlice.reducer;
