import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "../index.css";
import "../styles/roadmap.css";

import { router } from "./router";
import { ExplorerProvider } from "../contexts/ExplorerContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ExplorerProvider>
      <RouterProvider router={router} />
    </ExplorerProvider>
  </React.StrictMode>
);