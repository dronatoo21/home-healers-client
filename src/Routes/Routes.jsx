import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddService from "../Pages/AddService/AddService";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import MyServices from "../Pages/MyServices/MyServices";
import UpdateService from "../Pages/UpdateService/UpdateService";
import Detail from "../Pages/DetailPage/Detail";
import MyShedule from "../Pages/MyShedule/MyShedule";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/services',
                element: <Services/>,
                loader: () => fetch('https://home-healers.web.app/services')
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService/></PrivateRoute>
            },
            {
                path: '/myServices',
                element: <PrivateRoute><MyServices/></PrivateRoute>
            },
            {
                path: '/updateService/:id',
                element: <PrivateRoute><UpdateService/></PrivateRoute>,
                loader: ({params}) => fetch(`https://home-healers.web.app/myServices/${params.id}`)
            },
            {
                path: '/detail/:id',
                element: <PrivateRoute><Detail/></PrivateRoute>,
                loader: ({params}) => fetch(`https://home-healers.web.app/myServices/${params.id}`)
            },
            {
                path: '/myBookings',
                element: <PrivateRoute><MyShedule/></PrivateRoute>
            }
        ]
    }
])

export default router;