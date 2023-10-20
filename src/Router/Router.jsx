import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Home/Home";
import ErrorPage from "../Page/Error/ErrorPage";
import AddProduct from "../Page/AddProduct/AddProduct";
import BrandDetails from "../Page/BrandDetails/BrandDetails";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";


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
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        
        {
          path: "/brandDetails/:name",
          element: <BrandDetails></BrandDetails>,
          // loader: ({params}) => fetch(``)
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