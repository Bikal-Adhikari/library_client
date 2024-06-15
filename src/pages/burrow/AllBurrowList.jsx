import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from "../../components/layout/UserLayout";
import { useEffect } from "react";
import { fetchBurrowsAction } from "../../features/burrows/burrowAction";
import { AllBurrowTable } from "../../components/tables/AllBurrowTable";

const AllBurrowList = () => {
  const dispatch = useDispatch();
  const { burrows } = useSelector((state) => state.burrowInfo);
  useEffect(() => {
    dispatch(fetchBurrowsAction());
  }, [dispatch]);
  return (
    <UserLayout pageTitle={"All burrow list"}>
      <AllBurrowTable burrows={burrows} />
    </UserLayout>
  );
};

export default AllBurrowList;
