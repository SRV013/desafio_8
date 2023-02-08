import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components/Layout";
import { Home } from "pages/home";
import { Login } from "pages/login";
import { LoginEdit } from "pages/login_edit";
import { UserNew } from "pages/user_new";
import { UserEdit } from "pages/user_edit";
import { PetList } from "pages/pet_list";
import { PetNew } from "pages/pet_new";
import { PetEdit } from "pages/pet_edit";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="login_edit" element={<LoginEdit />} />
                <Route path="user_new" element={<UserNew />} />
                <Route path="user_edit" element={<UserEdit />} />
                <Route path="pet_list" element={<PetList />} />
                <Route path="pet_new" element={<PetNew />} />
                <Route path="pet_edit" element={<PetEdit />} />
                {/*
        <Route path="report_new" element={<Login />} /> */}
            </Route>
        </Routes>
    );
}
