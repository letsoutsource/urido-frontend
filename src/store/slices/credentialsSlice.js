import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCredentials: false,
};

const credentialsSlice = createSlice({
  name: "credentials",
  initialState,
  reducers: {
    show: (state) => {
      state.showCredentials = true;
    },
    hide: (state) => {
      state.showCredentials = false;
    },
    toggle: (state) => {
      state.showCredentials = !state.showCredentials;
    },
  },
});

export const { show, hide, toggle } = credentialsSlice.actions;
export default credentialsSlice.reducer;
