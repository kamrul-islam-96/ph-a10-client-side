import { use, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace />;
  }

  return children;
};

export default PrivateRoute;
