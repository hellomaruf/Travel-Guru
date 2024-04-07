import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Home/Booking/Booking";

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
        path: '/booking',
        element:<Booking/>
      }
    ],
  },
]);
