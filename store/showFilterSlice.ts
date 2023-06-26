import { createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  colorShow: boolean;
  sizeShow: boolean;
}

const initialState: FilterState = {
  colorShow: false,
  sizeShow: false,
};

export const showFilterSlice = createSlice({
  name: "showFilter",
  initialState,
  reducers: {
    handleColorShow: (state) => {
      state.colorShow = !state.colorShow;
    },
    handleSizeShow: (state) => {
      state.sizeShow = !state.sizeShow;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleColorShow, handleSizeShow } = showFilterSlice.actions;

export default showFilterSlice.reducer;
