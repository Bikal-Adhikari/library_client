import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import { useDispatch } from "react-redux";

export const AllBurrowTable = ({ burrows = [] }) => {
  const dispatch = useDispatch();
  const [burrow, setBurrow] = useState({});

  useEffect(() => {}, [dispatch]);
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{burrows?.length} Burrowed history found!</div>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>thumbnail</th>
            <th>Name</th>
            <th>Due Date</th>
            <th>Returned Date</th>
            <th>Burrowed By</th>
          </tr>
        </thead>
        <tbody>
          {burrows.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} alt="" width={"70px"} />
              </td>
              <td>
                <h2>{item.bookTitle.slice(0, 30)} ...</h2>
              </td>
              <td>{item?.dueDate?.slice(0, 10)}</td>
              <td>{item?.returnedDate?.slice(0, 10) || "-"}</td>

              <td>{item.userName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
