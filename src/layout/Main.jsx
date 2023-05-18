import { Link, Outlet } from "react-router-dom";
import Navbar from "../component/shared/navbar/Navbar";
import { FaSearch, FaUserAlt } from "react-icons/fa";


const Main = () => {
    return (
        <>
            <header>
                <div className="flex justify-between items-center mx-20">
                    <span className="mr-2"></span>
                    <h1 className="my-2 text-3xl text-center">Castle Disney</h1>
                    <div className="flex items-center">
                        <FaUserAlt></FaUserAlt>
                        <Link to="/siginin" className="ml-2">Signin</Link>
                    </div>
                </div>
                <hr />
                <Navbar></Navbar>
                <hr />
            </header>

            <Outlet></Outlet>

        </>
    );
};

export default Main;