import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/countriesSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
