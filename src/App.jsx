import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/DashboardPages";
import Create from "./pages/CreatePages";
import NewPages from "./pages/NewPages";
import Progress from "./pages/ProgressPages";
import Completed from "./pages/CompledPages";
import Canceled from "./pages/CanceledPages";
import Profile from "./pages/ProfilePages";
import Login from "./pages/LoginPages";
import Registration from "./pages/RegistrationPages";
import ForgtPass from "./pages/ForgetPassPages";
import Pages404 from "./pages/Pages404";
import FullScreenLoader from "./components/masterLayout/FullScreenLoader";
import { getToken } from "./helper/SessionHelper";

const App = () => {
  if (getToken()) {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/All" element={<NewPages />} />
            <Route path="/Progress" element={<Progress />} />
            <Route path="/Completed" element={<Completed />} />
            <Route path="/Canceled" element={<Canceled />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="*" element={<Pages404 />} />
          </Routes>
        </BrowserRouter>
        <FullScreenLoader />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/Login" replace />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Forgtpass" element={<ForgtPass />} />
            <Route path="*" element={<Pages404 />} />
          </Routes>
        </BrowserRouter>
        <FullScreenLoader />
      </Fragment>
    );
  }
};

export default App;
