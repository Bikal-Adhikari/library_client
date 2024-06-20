import { UserLayout } from "../../components/layout/UserLayout";
import { CustomInput } from "../../components/customInpute/CustomInput";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import {
  editUserProfileAction,
  getUserObj,
} from "../../features/users/userAction";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  const { user } = useSelector((state) => state.userInfo);
  const { form, handleOnChange, setForm } = useForm({ user });
  useEffect(() => {
    //fetch single book
    if (_id !== form?._id) {
      dispatch(getUserObj());
      user?._id && setForm(user);
    }
  }, [dispatch, _id, user, setForm, form]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { __v, createdAt, updatedAt, role, email, ...rest } = form;

    if (window.confirm("Are you sure you want to make this changes?")) {
      dispatch(editUserProfileAction(rest));
    }
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "Write your first name",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Write your Last name",
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      required: false,
      placeholder: "041345678",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@email.com",
    },
  ];

  return (
    <UserLayout pageTitle={"Update Profile"}>
      <div className="mt-5">
        {/* form here  */}

        <h4 className="py-4">Update the new book</h4>

        <Form onSubmit={handleOnSubmit}>
          {inputs?.map((input, i) => (
            <CustomInput
              disabled={input.name === "email"}
              key={i}
              {...input}
              onChange={handleOnChange}
              value={form[input.name]}
            />
          ))}

          <div className="d-grid">
            <Button type="submit">Update Profile</Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};

export default EditProfile;
