import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/home/Home";
import Error404 from "../page/error/Error404";
import Signin from "../page/Authentication/Signin";
import Signup from "../page/Authentication/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "signin",
                element: <Signin></Signin>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            },
            {
                path: "toys",
                element: ""
            },
            {
                path: "blog",
                element: ""
            }
        ]
    },
    {
        path: "*",
        element: <Error404></Error404>
    }
]);

export default router