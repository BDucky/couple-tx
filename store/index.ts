import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import fixedReducer from "./fixedSlice";
import showFilterReducer from "./showFilterSlice";
import variantReducer from "./variantSlice";
import GenderReducer from "./genderSlice";

export const store = configureStore({
  reducer: {
    filterReducer,
    fixedReducer,
    showFilterReducer,
    variantReducer,
    GenderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
