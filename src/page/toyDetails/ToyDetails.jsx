import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {

    // custom Hooks
    useTitle('Toy Details')

    const toysDetail = useLoaderData()
    const { seller, seller_email, toy_name, available_quantity, sub_category, price, image, rating, description } = toysDetail

    return (
        <section>
            <div className="relative">
                <img src="https://i.ibb.co/s3Y3SdR/Disney-Princess-Banner-00b-scaled.jpg" alt="banner" />
            </div>

            {/* toys details */}
            <div className="max-w-screen-2xl mx-auto my-32">
                <div className="grid grid-cols-5">
                    <div className="col-span-2 max-h-[700px]">
                        <img src={image} alt={toy_name} className="w-80 h-96 md:h-full" />
                    </div>
                    <div className="col-span-3">
                        <div>
                            <h3 className="text-3xl">{toy_name}</h3>
                            <h5>{sub_category}</h5>
                        </div>

                        <p className="py-12 tracking-wider">{description}</p>

                        <div>
                            <h2 className="text-5xl">${price}</h2>
                            <p className="italic">Available Quantity: {available_quantity}</p>
                            <Rating
                                readonly
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar className='text-red text-xl'></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-red text-xl'></FaStar>}
                                fullSymbol={<FaStar className='text-xl'></FaStar>}
                            />
                        </div>

                        <div>
                            <h5 className="text-xl font-semibold pt-8">Seller Name: {seller}</h5>
                            <p>Seller Email: {seller_email}</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToyDetails;