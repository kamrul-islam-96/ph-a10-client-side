import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import ManageEvent from "../pages/ManageEvent/ManageEvent";
import JoinEvents from "../pages/JoinEvents/JoinEvents";
import UpComingEvents from "../pages/UpcomingEvents/UpComingEvents";


export default function Routes() {
    const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/upcoming-events',
                element: <UpComingEvents />
            },
            {
                path: '/create-event',
                element: <CreateEvent />
            },
            {
                path: '/manage-event',
                element: <ManageEvent />
            },
            {
                path: '/join-events',
                element: <JoinEvents />
            },
        ]
    }
])

  return (
    <RouterProvider router={router} />
  )
}
