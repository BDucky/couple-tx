import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GenderState {
  gender: string;
}

const initialState: GenderState = {
  gender: "",
};

export const GenderSlice = createSlice({
  name: "gender",
  initialState,
  reducers: {
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGender } = GenderSlice.actions;

export default GenderSlice.reducer;
