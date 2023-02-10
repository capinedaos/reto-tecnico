import { configureStore } from "@reduxjs/toolkit";

// Reducers
import isLoadingSlice from "./isLoading.slice";
import shipSlice from "./ship.slice";

export const store = configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    ship: shipSlice,
  },
});
