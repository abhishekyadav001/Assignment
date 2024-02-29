import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Notfoundpage from "./Page/Notfoundpage";
import Postpage from "./Page/Postspage";
function Mainroutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allposts/:userId" element={<Postpage />} />
      <Route path="/*" element={<Notfoundpage />} />
    </Routes>
  );
}

export default Mainroutes;
