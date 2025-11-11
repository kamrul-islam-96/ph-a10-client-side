import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import ManageEvent from "../pages/ManageEvent/ManageEvent";

import UpComingEvents from "../pages/UpcomingEvents/UpComingEvents";
import { Toaster } from "react-hot-toast";
import EventDetails from "../pages/EventDetails/EventDetails";
import JoinedEvents from "../pages/JoinedEvents/JoinedEvents";
import EventUpdate from "../pages/EventUpdate/EventUpdate";


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
                element: <UpComingEvents />,
                loader: () => fetch('http://localhost:3000/events')
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
                path: '/joined-events',
                element: <JoinedEvents />,
            },
            {
                path: '/event-details/:id',
                element: <EventDetails />,
                loader: ({params}) => fetch(`http://localhost:3000/events/${params.id}`)
            },
            {
                path: '/event-update/:id',
                element: <EventUpdate/>,
            },
        ]
    }
])

  return (
   <>
     <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder={false} />
   </>
  )
}
