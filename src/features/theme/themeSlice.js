import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeStatus: "light-mode",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeToggle: (state, action) => {
      state.theme.themeStatus =
        state.theme.themeStatus === "light-mode"
          ? (state.theme.themeStatus = "dark-mode")
          : (state.theme.themeStatus = "light-mode");
    },
  },
});

// Action creators are generated for each case reducer function
export const { themeToggle } = themeSlice.actions;

export default themeSlice.reducer;

export const selectTheme = (state) => state.theme.themeStatus;
