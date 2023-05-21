import { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";


const Navbar = () => {

    // AuthContext
    const { user, logout } = useContext(AuthContext)

    // navigation
    const navigate = useNavigate()

    // Handler logout
    const handlerLogout = () => {
        logout()
            .then(() => {
                navigate("/auth/signin")
                toast.success('Successfully Logout!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
    }

    const navList = <>
        <li><NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "text-red" : ""
            }
        >
            HOME
        </NavLink></li>
        <li>
            <NavLink
                to="/toys"
                className={({ isActive }) =>
                    isActive ? "text-red" : ""
                }
            >
                ALL TOYS
            </NavLink>
        </li>
        {
            user && <>
                <li>
                    <NavLink
                        to="/my-toys"
                        className={({ isActive }) =>
                            isActive ? "text-red" : ""
                        }
                    >
                        MY TOYS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/add-toys"
                        className={({ isActive }) =>
                            isActive ? "text-red" : ""
                        }
                    >
                        ADD TOYS
                    </NavLink>
                </li>
            </>
        }
        <li><NavLink
            to="/blog"
            className={({ isActive }) =>
                isActive ? "text-red" : ""
            }
        >
            BLOG
        </NavLink></li>
    </>

    return (
        <>
            <div className="flex justify-between items-center mr-5 md:mx-20 my-2 md:my-0">
                <span className="mr-2 w-96 hidden md:block">Help | &copy; Jahid Howlader</span>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <Link to="/">
                <h1 className="my-2 md:text-3xl md:text-center custom-font">Castle Disney</h1>
                </Link>
                {
                    user ?
                        <div className="flex items-center md:w-96 justify-end">
                            {
                                user?.photoURL ?
                                    <img src={user?.photoURL} alt={user.displayName} className="w-8 h-8 rounded" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} /> :
                                    <FaUserAlt data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className="border text-2xl p-1 rounded"></FaUserAlt>

                            }
                            <Link onClick={handlerLogout} to="/auth/signin" className="ml-2">SignOut</Link>
                        </div> :
                        <div className="flex items-center w-96 justify-end">
                            <FaUserAlt></FaUserAlt>
                            <Link to="/auth/signin" className="ml-2">Signin</Link>
                        </div>
                }
            </div>

            <hr />

            <nav className="navbar hidden lg:flex">
                <div className="navbar-start">

                </div>
                <div className="navbar-center ">
                    <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                </div>
            </nav>

            <Tooltip id="my-tooltip"></Tooltip>
            <ToastContainer></ToastContainer>
        </>

    );
};

export default Navbar;