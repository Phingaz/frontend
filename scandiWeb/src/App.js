import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import Footer from "./components/Footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  }
])


export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}