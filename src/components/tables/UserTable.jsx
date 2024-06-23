import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getAllStudentAction } from "../../features/users/userAction";

const isPrivate = true;
export const UserTable = () => {
  const dispatch = useDispatch();
  const { user, student } = useSelector((state) => state.userInfo);

  const { role, ...rest } = user;

  useEffect(() => {
    dispatch(getAllStudentAction(isPrivate, role));
  }, [dispatch, role]);
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{student?.length} students found!</div>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {student?.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>{item.fName}</td>
              <td>{item.lName}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
