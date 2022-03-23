import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Home from "./Home"


const ProtectedRoute = () => {
  // const user = useContext(useUserAuth);
   const {user} = useUserAuth();
  if(!user) {
   return <Navigate to="/login" />
  }
  return <Home />;
}

export default ProtectedRoute;