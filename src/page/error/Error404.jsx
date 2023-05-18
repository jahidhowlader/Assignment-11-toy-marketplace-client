import Lottie from "lottie-react";
import showError from  "./Error.json"
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div>
            <Link to="/">
            <FaArrowLeft className="bg-black text-white ml-5 mt-5 text-4xl p-2 rounded-lg"></FaArrowLeft>
            </Link>
            <Lottie animationData={showError}></Lottie>
        </div>
    );
};

export default Error404;