import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/navbar/Navbar";

const AuthLayout = () => {
    return (
        <>
        <header>
            <Navbar></Navbar>
        </header>

        <Outlet></Outlet>
        </>
    );
};

export default AuthLayout;