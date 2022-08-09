import EventJournal from "../pages/EventJournal"
import RealTime from "../pages/RealTime"
import Login from "../pages/Login"
import Register from "../pages/Register"

export const privateRoutes = [
    {path:'/panopticon', element: <RealTime/>},
    {path:'/event-journal', element: <EventJournal/>},
    {path:'/my-events', element: <EventJournal/>},
]

export const publicRoutes = [
    {path:'/login', element: <Login/>},
    {path:'/register', element: <Register/>}
]