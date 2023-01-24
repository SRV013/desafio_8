import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components/layout/index";
import {Home} from "../pages/home";
import {Login} from "../pages/login";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="user_new" element={<Login />} />
        <Route path="user_edit" element={<Login />} />
        <Route path="pet_list" element={<Login />} />
        <Route path="pet_new" element={<Login />} />
        <Route path="pet_edit" element={<Login />} />
        <Route path="report_new" element={<Login />} /> */}
      </Route>
    </Routes>
  );
}
