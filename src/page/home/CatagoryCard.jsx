import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CatagoryCard = ({ subCategory, idx }) => {

    const { toy_name, sub_category, price, image, _id } = subCategory

    return (
        <Link to={`/toy/${_id}`}>
            <div className={`card rounded-md flex h-full p-5 shadow-red hover:bg-opacity-50 ${idx % 2 === 0 ? 'border border-sky-blue  hover:bg-sky' : 'border border-red -red  hover:bg-rose'} `}>
                <small className={`pb-3 font-bold ${idx % 2 === 0 ? 'text-sky-blue' : 'text-red'}`}>{sub_category}</small>
                <div className="flex flex-col">
                    <div>
                        <figure><img src={image} alt={toy_name} className="h-32 w-32 rounded " /></figure>
                        <h2 className="text-lg font-semibold py-3">
                            {toy_name}
                        </h2>
                        <h2 className="text-xl font-bold">${price}</h2>
                    </div>

                    <div className="flex items-end justify-between">
                        <button className={`mt-2 font-bold ${idx % 2 === 0 ? 'text-sky-blue' : 'text-red'}`}>View Details</button>
                        <div className="flex gap-1 items-center">
                            <FaRegHeart className={`${idx % 2 === 0 ? 'text-sky-blue' : 'text-red'}`}></FaRegHeart>
                            <p className="font-bold">4.6</p>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default CatagoryCard;