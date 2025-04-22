import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
]);

window.addEventListener("DOMContentLoaded", (event => {
  createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
  );
  
}))