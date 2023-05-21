import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AddToys = () => {

    // AuthContext
    const { user } = useContext(AuthContext)

    // handlerAddToy
    const handlerAddToy = event => {
        event.preventDefault()

        const form = event.target
        const toyName = form.toyName.value
        const subCategory = form.subCategory.value
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const details = form.details.value
        const sellerName = form.sellerName.value
        const image = form.photo.value
        const addToy = {
            toy_name: toyName,
            sub_category: subCategory,
            rating,
            price,
            available_quantity: quantity,
            description: details,
            seller: sellerName,
            seller_email: user.email,
            image
        }

        fetch("http://localhost:5000/add-toys", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        console.log(addToy);
    }

    return (
        <section className="bg-red bg-opacity-30 rounded-lg max-w-screen-xl mx-auto my-12">

            <form onSubmit={handlerAddToy} className="p-8">
                {/* Toys Information */}
                <h4 className="text-xl font-semibold mb-5">Toys Information:</h4>
                <div className="grid grid-cols-2 gap-6">
                    <input type="text" placeholder="Toy Name" name="toyName" className="p-2 rounded" required />
                    <input type="text" placeholder="Sub-category" name="subCategory" className="p-2 rounded" required />
                    <input type="text" placeholder="Price" name="price" className="p-2 rounded" required />
                    <input type="text" placeholder="Rating" name="rating" className="p-2 rounded" required />
                    <input type="text" placeholder="Available quantity" name="quantity" className="p-2 rounded" required />
                    <input type="text" placeholder="Photo Url" name="photo" className="p-2 rounded" required />
                </div>
                <textarea className="w-full mt-8 rounded p-2" name="details" rows={6} required></textarea>

                {/* Seller Information */}
                <h4 className="text-xl font-semibold mt-10 mb-5">Seller Information:</h4>
                <div className="grid grid-cols-2 gap-8">
                    <input type="text" placeholder="Seller Name" name="sellerName" className="p-2 rounded" required />
                    <input type="email" placeholder={user?.email} className="p-2 rounded" disabled />
                </div>

                <input type="submit" value="Submit" className='bg-gradient-to-r from-gd-first to-gd-second w-full rounded-lg py-2 shadow-lg shadow-gd-second text-white font-bold text-xl my-5 cursor-pointer ' />
            </form>
        </section>
    );
};

export default AddToys;