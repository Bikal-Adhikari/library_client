import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllStudentAction } from "../../features/users/userAction";

const isPrivate = true;
export const UserTable = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const { role, ...rest } = user;

  const { students } = useSelector((state) => state.studentInfo);

  useEffect(() => {
    dispatch(getAllStudentAction(isPrivate, role));
  }, [dispatch, role]);
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{students.length} Books found!</div>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} alt="" width={"70px"} />
              </td>
              <td>
                <h2>{item.title.slice(0, 30)} ...</h2>
                <div>{item.author}</div>
              </td>
              <td>
                <Link to={"/admin/book/edit/" + item._id}>
                  <Button variant="warning">Edit</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
