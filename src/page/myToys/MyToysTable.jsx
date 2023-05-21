import { FaEye, FaTrash, FaUserEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysTable = ({ mineToys, handlerDeleteToy }) => {

    // Navigate Hooks
    const navigate = useNavigate()

    // handlerEditToy
    const handlerEditToy = (event) => {

        event.preventDefault()

        const form = event.target
        const _id = form.id.value
        const price = form.price.value
        const available_quantity = form.quantity.value
        const description = form.details.value
        const updatedData = {
            price,
            available_quantity,
            description
        }

        fetch(`http://localhost:5000/my-toys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    Swal.fire(
                        'Toys Modify updated!',
                        'Your toys has added with your dashboard.',
                        'success'
                    )
                    navigate(`/toys/${_id}`)
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full mb-32">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>No: </th>
                        <th>Toy Name</th>
                        <th>Seller</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>Information</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mineToys && mineToys.map((toy, idx) =>
                            <tr key={toy._id}>
                                <th>
                                    <p className=''>{idx + 1}</p>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="rounded w-24">
                                                <img src={toy.image} alt={toy.toy_name} className='w-full h-full' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{toy.toy_name}</div>
                                            <span className="badge badge-ghost badge-sm">
                                                {toy.sub_category}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-semibold pl-5'>
                                    {toy.seller}
                                </td>
                                <th className="pl-5">${toy.price}</th>
                                <th className='pl-5'>{toy.available_quantity}</th>
                                <th >
                                    <div className="flex gap-3 pl-3">

                                        <Link to={`/toys/${toy._id}`}>
                                            <FaEye></FaEye>
                                        </Link>

                                        {/* The button to open modal */}
                                        <label htmlFor="my-modal-3" className="">
                                            <FaUserEdit className="text-sky-blue cursor-pointer"></FaUserEdit>
                                        </label>

                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                        <div className="modal h-full">
                                            <div className="modal-box relative  max-w-6xl ">
                                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                <h3 className="text-lg font-bold text-center ">Update Your Toys Information!</h3>

                                                {/* Form for modal */}
                                                <form onSubmit={handlerEditToy} className="p-8">
                                                    {/* Toys Information */}
                                                    <div className="grid grid-cols-2 gap-6">
                                                        <input type="text" name="id" defaultValue={toy._id} className="hidden" />
                                                        <div>
                                                            <label htmlFor="" className="block">Toy Name</label>
                                                            <input type="text" placeholder="Toy Name" name="toyName" defaultValue={toy.toy_name} className="p-2 rounded  w-full font-normal mt-2" disabled />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="" className="block">Sub Category</label>
                                                            <input type="text" placeholder="Sub-category" name="subCategory" defaultValue={toy.sub_category} className="p-2 rounded w-full font-normal mt-2" disabled />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="" className="block">Price</label>
                                                            <input type="text" placeholder="Price" name="price" defaultValue={toy.price} className="p-2 rounded bg-rose w-full font-normal mt-2" />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="" className="block">Ratings</label>
                                                            <input type="text" placeholder="Rating" name="rating" defaultValue={toy.rating} className="p-2 rounded w-full font-normal mt-2" disabled />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="" className="block">Available Quantity</label>
                                                            <input type="text" placeholder="Available quantity" defaultValue={toy.available_quantity} name="quantity" className="p-2 rounded bg-rose w-full font-normal mt-2" />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="" className="block">Seller Email</label>
                                                            <input type="text" placeholder="Photo Url" name="photo" defaultValue={toy.image} className="p-2 rounded w-full font-normal mt-2" disabled />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="" className="block mt-8">Toy Details</label>
                                                        <textarea className="w-full  rounded p-2 bg-rose font-normal mt-2" defaultValue={toy.description} name="details" rows={6}></textarea>
                                                    </div>

                                                    <input type="submit" value="Submit" className='bg-gradient-to-r from-gd-first to-gd-second w-full rounded-lg py-2 shadow-lg shadow-gd-second text-white font-bold text-xl my-5 cursor-pointer ' />
                                                </form>
                                            </div>
                                        </div>

                                        <button onClick={() => handlerDeleteToy(toy._id)}>
                                            <FaTrash className="text-red"></FaTrash>

                                        </button>

                                    </div>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToysTable;