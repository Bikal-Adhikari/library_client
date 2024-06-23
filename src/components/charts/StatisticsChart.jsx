import { useSelector } from "react-redux";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatisticsChart = () => {
  const { burrows } = useSelector((state) => state.burrowInfo);

  const processData = (data) => {
    // Process the borrowing data to the format required by Chart.js
    const groupedData = data.reduce((acc, burrows) => {
      const date = new Date(burrows.createdAt).toISOString().split("T")[0];
      if (!acc[date]) {
        acc[date] = 0;
      }
      acc[date] += 1;
      return acc;
    }, {});

    const labels = Object.keys(groupedData);
    const counts = Object.values(groupedData);

    return { labels, counts };
  };

  const { labels, counts } = processData(burrows);

  const data = {
    labels,
    datasets: [
      {
        label: "Number of Borrows",
        data: counts,
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
