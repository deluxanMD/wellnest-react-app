import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "global/theme/theme.slice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: {
      theme: themeSlice,
    },
    preloadedState,
  });
};

if (window.Cypress) {
  window.store = store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
