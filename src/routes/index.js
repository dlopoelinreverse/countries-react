import React from "react";
import { Route, Routes } from "react-router-dom";
import Country from "../pages/Country";
import Home from "../pages/Home";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:countryName" element={<Country />} />
    </Routes>
  );
}
