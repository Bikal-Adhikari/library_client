import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  student: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setStudent: (state, action) => {
      state.student = action.payload || [];
    },
  },
});

const { reducer, actions } = userSlice;

export const { setUser, setStudent } = actions;

export default reducer;
