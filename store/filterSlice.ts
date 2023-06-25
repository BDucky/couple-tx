import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  colors: string[];
  sizes: string[];
  fixed: boolean;
}

const initialState: FilterState = {
  colors: [],
  sizes: [],
  fixed: false,
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
    handleFixed: (state, action: PayloadAction<boolean>) => {
      state.fixed = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  filterColor,
  deleteFilterColor,
  filterSize,
  deleteFilterSize,
  handleFixed,
} = filterSlice.actions;

export default filterSlice.reducer;
