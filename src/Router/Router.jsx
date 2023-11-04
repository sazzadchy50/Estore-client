import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Home/Home";
import ErrorPage from "../Page/Error/ErrorPage";
import AddProduct from "../Page/AddProduct/AddProduct";
import BrandDetails from "../Page/BrandDetails/BrandDetails";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Cart from "../Page/Cart/Cart";
import CardDetails from "../Page/BrandDetails/CardDetails";
import Update from "../Page/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brandDetails/:brandName",
        element: (
         
            <BrandDetails></BrandDetails>
          
        ),
        loader: ({ params }) =>
          fetch(
            `https://estore-server-ll89cnlgf-sazzads-projects-05d40223.vercel.app/brand/${params.brandName}`
          ),
      },
      {
        path: "/cardDetails/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://estore-server-ll89cnlgf-sazzads-projects-05d40223.vercel.app/brand/${params.brandName}/${params.id}`
          ),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },

      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            `https://estore-server-ll89cnlgf-sazzads-projects-05d40223.vercel.app/cart`
          ),
      },
      {
        path: "/update/:id",
        element:<PrivateRoute>
           <Update></Update>
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://estore-server-ll89cnlgf-sazzads-projects-05d40223.vercel.app/brand/${params.brandName}/${params.id}`
          ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
