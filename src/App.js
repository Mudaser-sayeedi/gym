import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/home/Home.container";
import NotFound from "./containers/notFound/NotFound.container";
import LoginMis from "./containers/loginMis/LoginMis.container";
import AdminMis from "./containers/admin_mis/AdminMis.container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/loginMis" element={<LoginMis></LoginMis>}></Route>
        <Route path="/loginPortal" element={<LoginMis></LoginMis>}></Route>
        <Route path="/admin/mis" element={<AdminMis></AdminMis>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
