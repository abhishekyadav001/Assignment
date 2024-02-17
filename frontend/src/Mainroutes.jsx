import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Notfoundpage from "./Page/Notfoundpage";
import Alluserpage from "./Page/Alluserpage";
import SingleUserPage from "./Page/SingleUserPage";

function Mainroutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/allusers" element={<Alluserpage />} /> */}
      <Route path="/allusers/singleuser" element={<SingleUserPage />} />
      <Route path="/*" element={<Notfoundpage />} />
    </Routes>
  );
}

export default Mainroutes;
