import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface VariantState {
  variant: number;
}

const initialState: VariantState = {
  variant: 0,
};

export const variantSlice = createSlice({
  name: "variant",
  initialState,
  reducers: {
    handleVariant: (state, action: PayloadAction<number>) => {
      state.variant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleVariant } = variantSlice.actions;

export default variantSlice.reducer;
