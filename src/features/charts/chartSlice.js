import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setChartData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setChartData, setLoading, setError } = chartSlice.actions;

export default chartSlice.reducer;
