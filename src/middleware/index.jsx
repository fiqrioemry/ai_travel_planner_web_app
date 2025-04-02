/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return <Fragment>{children}</Fragment>;
};
