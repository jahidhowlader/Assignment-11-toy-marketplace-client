import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/home/Home";
import Error404 from "../page/error/Error404";
import Signin from "../page/Authentication/Signin";
import Signup from "../page/Authentication/Signup";
import AuthLayout from "../layout/AuthLayout";
import AllToys from "../page/allToys/AllToys";
import ToyDetails from "../page/toyDetails/ToyDetails";

const router = createBrowserRouter([
    {
        path: "*",
        element: <Error404></Error404>
    },
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "toys",
                element: <AllToys></AllToys>,
                loader: () => fetch("http://localhost:5000/toys")
            },
            {
                path: "toys/:_id",
                element: <ToyDetails></ToyDetails>,
                loader: ({params}) =>  fetch(`http://localhost:5000/toys/${params._id}`)
            },
            {
                path: "blog",
                element: ""
            }
        ]
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "signin",
                element: <Signin></Signin>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            }
        ]
    }
]);

export default router