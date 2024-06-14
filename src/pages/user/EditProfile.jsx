import { UserLayout } from "../../components/layout/UserLayout";
import { CustomInput } from "../../components/customInpute/CustomInput";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { form, handleOnChange, setForm } = useForm({});
  const { user } = useSelector((state) => state.userInfo);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { __v, createdAt, isbn, updatedAt, ...rest } = form;

    if (window.confirm("Are you sure you want to make this changes?")) {
      dispatch(updateSingleBookAction(rest));
    }
  };

  return (
    <UserLayout pageTitle={"Update Profile"}>
      <div className="mt-5">
        {/* form here  */}

        <h4 className="py-4">Update the new book</h4>

        <Form onSubmit={handleOnSubmit}>
          {inputFields?.map((input, i) => (
            <CustomInput
              disabled={input.name === "isbn"}
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
