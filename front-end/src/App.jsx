// import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Router, Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import ProtectedRouteHome from "./pages/ProtectedRouteHome";
import ProtectedRouteTimeline from "./pages/ProtectedRouteTimeline";


function App() {
  return (

    <div className="pagebackground">

      {/* <Navbars /> */}
      <UserAuthContextProvider>
        <Routes>
          <Route path="/home" element={<ProtectedRouteHome>{<Home />}</ProtectedRouteHome>} />
          <Route path="/timeline" element={<ProtectedRouteTimeline>{<Timeline />}</ProtectedRouteTimeline>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserAuthContextProvider>
    </div >

  );
}

export default App;
