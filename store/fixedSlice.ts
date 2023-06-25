import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FixedState {
  fixed: boolean;
}

const initialState: FixedState = {
  fixed: true,
};

export const fixedSlice = createSlice({
  name: "fixed",
  initialState,
  reducers: {
    handleFixed: (state, action: PayloadAction<boolean>) => {
      state.fixed = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleFixed } = fixedSlice.actions;

export default fixedSlice.reducer;
