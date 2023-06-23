import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  colors: string[];
}

const initialState: FilterState = {
  colors: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterColor: (state, action: PayloadAction<string>) => {
      state.colors = [...state.colors, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterColor } = filterSlice.actions;

export default filterSlice.reducer;
