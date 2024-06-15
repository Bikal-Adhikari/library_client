import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from "../../components/layout/UserLayout";
import { useEffect } from "react";
import { fetchBurrowsAction } from "../../features/burrows/burrowAction";

const AllBurrowList = () => {
  const dispatch = useDispatch();
  const { burrows } = useSelector((state) => state.burrowInfo);
  useEffect(() => {
    dispatch(fetchBurrowsAction());
  }, [dispatch]);
  return <UserLayout pageTitle={"All burrow list"}></UserLayout>;
};

export default AllBurrowList;
