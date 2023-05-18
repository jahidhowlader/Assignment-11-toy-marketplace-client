import { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {

    // AuthContext
    const { user, logout } = useContext(AuthContext)

    // Handler logout
    const handlerLogout = () => {
        logout()
            .then(() => {
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
                        to="/blog"
                        className={({ isActive }) =>
                            isActive ? "text-red" : ""
                        }
                    >
                        MY TOYS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/blog"
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
            <div className="flex justify-between items-center mx-20">
                <span className="mr-2 w-96">Help | &copy; Jahid Howlader</span>
                <h1 className="my-2 text-3xl text-center custom-font">Castle Disney</h1>
                {
                    user ?
                        <div className="flex items-center w-96 justify-end">
                            <FaUserAlt></FaUserAlt>
                            <Link onClick={handlerLogout} to="/signin" className="ml-2">SignOut</Link>
                        </div> :
                        <div className="flex items-center w-96 justify-end">
                            <FaUserAlt></FaUserAlt>
                            <Link to="/signin" className="ml-2">Signin</Link>
                        </div>
                }
            </div>

            <hr />

            <nav className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                </div>
            </nav>
        </>

    );
};

export default Navbar;