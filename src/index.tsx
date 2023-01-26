import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./router";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

ReactDOM
.createRoot(document.getElementById('root'))
.render(
  <Suspense fallback={null}>
    <RecoilRoot>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RecoilRoot>
  </Suspense>,
);