import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../FirebaseAuth/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loader) {
    return;
  }
  if (user) {
    return children;
  }
  console.log(location);
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
