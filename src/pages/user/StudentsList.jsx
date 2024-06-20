import { UserLayout } from "../../components/layout/UserLayout";
import { UserTable } from "../../components/tables/UserTable";

const StudentsList = () => {
  return (
    <UserLayout pageTitle="Student List">
      <div className="text-end mb-5">
        <UserTable />
      </div>
    </UserLayout>
  );
};

export default StudentsList;
