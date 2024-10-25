import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "global/theme/theme.slice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

if (window.Cypress) {
  window.store = store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
