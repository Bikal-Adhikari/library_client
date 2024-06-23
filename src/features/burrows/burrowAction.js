import { getAllBooksAction } from "../books/bookAction";
import {
  fetchBurrows,
  fetchUserBurrows,
  postNewBurrow,
  returnBook,
} from "./burrowAxios";
import { toast } from "react-toastify";
import { setBurrows, setUserBurrows } from "./burrowSlice";

export const addNewBurrowAction = (obj) => async (dispatch) => {
  const pending = postNewBurrow(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status) {
    //fetch the seleted book
    dispatch(getAllBooksAction());
  }
};

export const fetchBurrowsAction = () => async (dispatch) => {
  const { status, burrows } = await fetchBurrows();

  if (status === "success") {
    dispatch(setBurrows(burrows));
  }
};

export const fetchUserBurrowsAction = (userId) => async (dispatch) => {
  const { status, burrows } = await fetchUserBurrows(userId);
  if (status === "success") {
    dispatch(setUserBurrows(burrows));
  }
};

export const returnBurrowAction = (obj) => async (dispatch) => {
  const pending = returnBook(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    dispatch(getAllBooksAction());
    dispatch(fetchBurrowsAction());
  }
};
