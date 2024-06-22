import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchChartData } from "../../features/charts/chartAction";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatisticsChart = () => {
  const dispatch = useDispatch();
  const chartData = useSelector((state) => state.chartInfo.data);
  const loading = useSelector((state) => state.chartInfo.loading);
  const error = useSelector((state) => state.chartInfo.error);

  useEffect(() => {
    dispatch(fetchChartData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const data = {
    labels: chartData.map((item) => item.date),
    datasets: [
      {
        label: "Number of Borrows",
        data: chartData.map((item) => item.count),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Library Borrow Statistics",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StatisticsChart;
