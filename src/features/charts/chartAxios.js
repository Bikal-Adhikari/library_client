import axios from "axios";

import { setChartData, setLoading, setError } from "./chartSlice";

export const fetchChartData = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get("/api/v1/burrows/stats");
    dispatch(setChartData(response.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};
