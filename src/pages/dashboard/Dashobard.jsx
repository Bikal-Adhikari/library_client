import { UserLayout } from "../../components/layout/UserLayout";
import StatisticsChart from "../../components/charts/StatisticsChart";

const Dashobard = () => {
  return (
    <UserLayout pageTitle="Dashboard">
      <h1>Library Dashboard</h1>
      <StatisticsChart />
    </UserLayout>
  );
};

export default Dashobard;
