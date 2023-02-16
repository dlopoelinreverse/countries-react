import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  filters: {
    countryNameFilter: "",
    regionFilter: "reset",
  },
  isLoading: true,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload.sort((a, b) => b.area - a.area);
      state.isLoading = false;
    },
    setCountryNameFilter: (state, action) => {
      state.filters.countryNameFilter =
        action.payload !== ""
          ? (state.filters.countryNameFilter = action.payload)
          : (state.filters.countryNameFilter = "");
    },
    setRegionFilter: (state, action) => {
      state.filters.regionFilter =
        action.payload !== "reset"
          ? (state.filters.regionFilter = action.payload)
          : (state.filters.regionFilter = "reset");
    },
  },
});

export const {
  setCountries,
  setCountry,
  setCountryNameFilter,
  setRegionFilter,
} = countriesSlice.actions;

export default countriesSlice.reducer;

export const selectRegionFilter = (state) =>
  state.countries.filters.regionFilter;

export const selectCountries = (state) => state.countries.countries;

export const selectCountryName = (state) =>
  state.countries.filters.countryNameFilter;

export const countriesSelector = createSelector(
  selectCountries,
  selectRegionFilter,
  selectCountryName,
  (countries, selectedRegion, inputName) => {
    if (selectedRegion !== "reset") {
      if (inputName !== "") {
        return countries
          .filter((country) => country.region === selectedRegion)
          .filter((country) =>
            country.name.common.toLowerCase().includes(inputName)
          );
      }
      return countries.filter((country) => country.region === selectedRegion);
    } else {
      if (inputName !== "") {
        return countries.filter((country) =>
          country.name.common.toLowerCase().includes(inputName)
        );
      }
      return countries;
    }
  }
);

export const selectIsLoading = (state) => state.countries.isLoading;
