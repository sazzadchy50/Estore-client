import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Home/Home";
import ErrorPage from "../Page/Error/ErrorPage";
import AddProduct from "../Page/AddProduct/AddProduct";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("/brand.json")
        },
        {
          path: "/addProduct",
          element: <AddProduct></AddProduct>
        },
        {
          path: "*",
          element: <ErrorPage></ErrorPage>
      },

      ]
    },
  ]);

  export default router;