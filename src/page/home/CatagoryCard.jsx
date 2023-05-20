import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CatagoryCard = ({bg, textColor}) => {
    return (
      <Link>
        <div className={`card  p-5 ${bg} hover:bg-opacity-50 `}>
            <small className={`pb-3 font-bold ${textColor}`}>Disney Princes</small>
            <figure><img src="https://i.ibb.co/Swm2RPW/3581280.jpg" alt="" className="h-32 w-32 rounded-full mx-8" /></figure>
            <div className="">
                <h2 className="card-title py-3">
                    Elena
                </h2>
                <h2 className="text-2xl font-bold">$25.30</h2>

                <div className="flex items-end justify-between">
                    <button className={`mt-2 font-bold ${textColor}`}>View Details</button>
                    <div className="flex gap-1 items-center">
                        <FaRegHeart className={textColor}></FaRegHeart>
                        <p className="font-semibold">4.6</p>
                    </div>
                </div>

            </div>
        </div>
      </Link>
    );
};

export default CatagoryCard;