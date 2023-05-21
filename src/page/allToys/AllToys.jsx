import { useLoaderData } from 'react-router-dom';
import Toystable from "./Toystable";

const AllToys = () => {

    // use useLoader for load data from database
    const totalToys = useLoaderData()

    return (
        <section >
            <div  data-aos="zoom-in" data-aos-duration="1500" className="relative">
                <img src="https://i.ibb.co/s3Y3SdR/Disney-Princess-Banner-00b-scaled.jpg" alt="" />
            </div>
            <div className="max-w-screen-2xl mx-auto my-12">
                <Toystable totalToys={totalToys}></Toystable>
            </div>
        </section>
    );
};

export default AllToys;