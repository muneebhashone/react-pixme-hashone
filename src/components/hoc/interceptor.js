import React from "react";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/user/user.action";

function Interceptor({ children }) {
  const dispatch = useDispatch();

  if (localStorage.getItem("currentUser")) {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    dispatch(signInSuccess(user));
  }

  return <>{children}</>;
}

export default Interceptor;
