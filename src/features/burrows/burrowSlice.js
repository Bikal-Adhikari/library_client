import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burrows: [],
  allBurrows: [],
  selectedBurrow: {},
};

const burrowSlice = createSlice({
  name: "burrows",
  initialState,
  reducers: {
    setBurrows: (state, { payload }) => {
      state.burrows = payload || [];
    },
    setAllBurrows: (state, { payload }) => {
      state.allBurrows = payload || [];
    },
    setSelectedBurrow: (state, { payload }) => {
      state.selectedBurrow = payload;
    },
  },
});

const { reducer, actions } = burrowSlice;

export const { setBurrows, setSelectedBurrow, setAllBurrows } = actions;
export default reducer;
