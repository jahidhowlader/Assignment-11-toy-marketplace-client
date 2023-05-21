import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/navbar/Navbar";
import 'react-toastify/dist/ReactToastify.css';

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