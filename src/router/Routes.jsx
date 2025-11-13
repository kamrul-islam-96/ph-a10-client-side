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
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


export default function Routes() {
    const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
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
                loader: () => fetch('https://ph-a10-eventhub.vercel.app/events')
            },
            {
                path: '/create-event',
                element: <PrivateRoute><CreateEvent /></PrivateRoute>,
            },
            {
                path: '/manage-event',
                element: <PrivateRoute><ManageEvent /></PrivateRoute>,
            },
            {
                path: '/joined-events',
                element: <PrivateRoute><JoinedEvents /></PrivateRoute>,
            },
            {
                path: '/event-details/:id',
                element: <EventDetails />,
                loader: ({params}) => fetch(`https://ph-a10-eventhub.vercel.app/events/${params.id}`)
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
