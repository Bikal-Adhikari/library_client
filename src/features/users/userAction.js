import { setStudent, setUser } from "./userSlice";
import {
  EditUserInfo,
  fetchAllUserInfo,
  fetchUserInfo,
  loginUser,
  renewAccessJWT,
} from "./userAxios";
import { toast } from "react-toastify";

export const getUserObj = () => async (dispatch) => {
  const { status, user } = await fetchUserInfo();

  //update store
  dispatch(setUser(user));
};
export const getAllStudentAction = (isPrivate, role) => async (dispatch) => {
  const pending = fetchAllUserInfo(isPrivate, role);
  // toast.promise(pending, {
  //   pending: "Please wait...",
  // });

  const { status, message, students } = await pending;

  // toast[status](message);

  //update store
  dispatch(setStudent(students));
};

export const userSignInAction = (obj) => async (dispatch) => {
  const pending = loginUser(obj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message, tokens } = await pending;
  toast[status](message);
  //store tokens in the sessions
  sessionStorage.setItem("accessJWT", tokens.accessJWT);
  localStorage.setItem("refreshJWT", tokens.refreshJWT);

  if (status === "success") {
    dispatch(getUserObj());
  }
};

//auto login user
export const autoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  // when access JWT exists
  if (accessJWT) {
    dispatch(getUserObj());
    return;
  }

  //when accessJWT do not exist but refreshJWT exist
  if (refreshJWT) {
    const response = await renewAccessJWT();
    if (response.status === "success") {
      sessionStorage.setItem("accessJWT", response.accessJWT);
      dispatch(getUserObj());
    }
  }
};

export const editUserProfileAction = (obj) => async (dispatch) => {
  const pending = EditUserInfo(obj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message, data } = await pending;
  toast[status](message);

  if (status === "success") {
    dispatch(getUserObj());
  }
};
