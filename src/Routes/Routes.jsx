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
                loader: () => fetch('http://localhost:4000/services')
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
                loader: ({params}) => fetch(`http://localhost:4000/myServices/${params.id}`)
            }
        ]
    }
])

export default router;