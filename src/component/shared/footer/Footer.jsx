import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer p-10 text-neutral-content max-w-screen-xl mx-auto items-center justify-around">
            <div>
                <h1 className="my-2 text-3xl text-center custom-font">Castle Disney</h1>
                <p>Hasbro Industries Ltd.<br />Providing reliable toy since 1992</p>
                <span className="mt-">Help | &copy; Jahid Howlader</span>
            </div>
            
                <div className="grid grid-flow-col gap-4 text-3xl">

                    <Link to="https://twitter.com/JahidHowlader10" target="_blank">
                        <FaTwitter></FaTwitter>
                    </Link>

                    <Link to="https://www.youtube.com/" target="_blank">
                        <FaYoutube></FaYoutube>
                    </Link>

                    <Link to="https://www.facebook.com/jahidhowlader.info/" target="_blank">
                        <FaFacebookF></FaFacebookF>

                    </Link>
                </div>
                
            <div>
                <div className=" space-x-2 mb=5">
                    <input type="text" className="p-2 text-black" placeholder="Email"/>
                    <button className="bg-white  shadow-white text-red font-bold  mt-2 px-5 py-2">Send</button>
                </div>
                <p>Please provide your email address and keep in touch</p>
            </div>
        </footer>
    );
};

export default Footer;