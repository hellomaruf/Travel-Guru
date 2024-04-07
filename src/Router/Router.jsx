import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Booking/Booking";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        // element: <Slider />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: '/login',
        element:<Login/>
      }
    ],
  },
]);
