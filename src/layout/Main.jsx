import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <Outlet></Outlet>

            <ToastContainer></ToastContainer>

        </>
    );
};

export default Main;