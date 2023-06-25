import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  colors: string[];
  sizes: string[];
}

const initialState: FilterState = {
  colors: [],
  sizes: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterColor: (state, action: PayloadAction<string>) => {
      state.colors = [...state.colors, action.payload];
    },
    deleteFilterColor: (state, action: PayloadAction<string>) => {
      state.colors = state.colors.filter((color) => color !== action.payload);
    },
    filterSize: (state, action: PayloadAction<string>) => {
      state.sizes = [...state.sizes, action.payload];
    },
    deleteFilterSize: (state, action: PayloadAction<string>) => {
      state.sizes = state.sizes.filter((size) => size !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterColor, deleteFilterColor, filterSize, deleteFilterSize } =
  filterSlice.actions;

export default filterSlice.reducer;
