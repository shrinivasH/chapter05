import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantsMenu";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <BodyContainer></BodyContainer>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      { path: "/cart", element: <Cart></Cart> },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
