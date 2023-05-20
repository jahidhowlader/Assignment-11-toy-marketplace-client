import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {

    const toysDetail = useLoaderData()
    console.log(toysDetail);

    return (
        <section>
            <div className="relative">
                <img src="https://i.ibb.co/s3Y3SdR/Disney-Princess-Banner-00b-scaled.jpg" alt="banner" />
            </div>

            {/* toys details */}
            <div>

            </div>
        </section>
    );
};

export default ToyDetails;