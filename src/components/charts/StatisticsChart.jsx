import { useDispatch, useSelector } from "react-redux";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useEffect } from "react";
import { fetchBurrowsAction } from "../../features/burrows/burrowAction";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const StatisticsChart = () => {
  const dispatch = useDispatch();
  const { burrows } = useSelector((state) => state.burrowInfo);
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    if (user?._id) {
      dispatch(fetchBurrowsAction());
    }
  }, [dispatch, user]);

  const processData = (data) => {
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

  const barData = {
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
  const pieData = {
    labels,
    datasets: [
      {
        data: counts,
        backgroundColor: labels.map(
          (_, idx) =>
            `rgba(${(idx * 30) % 255}, ${(idx * 60) % 255}, ${
              (idx * 90) % 255
            }, 0.6)`
        ),
        borderColor: labels.map(
          (_, idx) =>
            `rgba(${(idx * 30) % 255}, ${(idx * 60) % 255}, ${
              (idx * 90) % 255
            }, 1)`
        ),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar data={barData} options={options} />
      <Pie data={pieData} options={options} />
    </div>
  );
};

export default StatisticsChart;
