import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cashResults: (state, actions) => {
      state = Object.assign(state, actions.payload);
    },
  },
});

export const { cashResults } = searchSlice.actions;

export default searchSlice.reducer;
