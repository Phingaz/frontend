import "./index.css"
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";

const router = createBrowserRouter([
  { path: "/",
   element: <RootLayout />,
  children: [
    path: "/", element: 
  ] },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);