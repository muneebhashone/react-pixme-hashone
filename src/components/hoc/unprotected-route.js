import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UnprotectedRoute(WrappedComponent) {
  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();

  if (currentUser) {
    history.push("/pixme/customer");
  }

  return (props) => {
    return <WrappedComponent {...props} />;
  };
}

export default UnprotectedRoute;
