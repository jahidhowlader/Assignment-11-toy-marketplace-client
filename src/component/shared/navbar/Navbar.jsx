import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

    const navList = <>
        <li><Link to="/">Home</Link></li>
        <li><a>All Toys</a></li>
        <li><a>My Toys</a></li>
        <li><a>Add Toys</a></li>
        <li><a>Blog</a></li>

    </>


    return (

        <>
            <div className="flex justify-between items-center mx-20">
                <span className="mr-2 w-96">Help | &copy; Jahid Howlader</span>
                <h1 className="my-2 text-3xl text-center custom-font">Castle Disney</h1>
                <div className="flex items-center w-96 justify-end">
                    <FaUserAlt></FaUserAlt>
                    <Link to="/signin" className="ml-2">Signin</Link>
                </div>
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
                    <ul className="menu menu-horizontal px-1 font-bold">
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