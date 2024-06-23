import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burrows: [],
  userBurrows: [],
  selectedBurrow: {},
};

const burrowSlice = createSlice({
  name: "burrows",
  initialState,
  reducers: {
    setBurrows: (state, { payload }) => {
      state.burrows = payload || [];
    },
    setUserBurrows: (state, { payload }) => {
      state.userBurrows = payload || [];
    },
    setSelectedBurrow: (state, { payload }) => {
      state.selectedBurrow = payload;
    },
  },
});

const { reducer, actions } = burrowSlice;

export const { setBurrows, setSelectedBurrow, setUserBurrows } = actions;
export default reducer;
