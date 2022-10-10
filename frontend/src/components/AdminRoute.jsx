/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function AdminRoute({ children }) {
  const { currentUser } = useContext(CurrentUserContext);
  // currentUser && console.log(currentUser);
  return currentUser && currentUser.isAdmin === 1 ? (
    children
  ) : (
    <Navigate to="/unauthorized" />
  );
}
