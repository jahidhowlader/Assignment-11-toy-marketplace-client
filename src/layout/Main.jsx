import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../component/shared/footer/Footer";


const Main = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <Outlet></Outlet>

            <footer className="bg-gradient-to-r from-gd-first to-gd-second">
                <Footer></Footer>
            </footer>
            <ToastContainer></ToastContainer>

        </>
    );
};

export default Main;