import { FaEye, FaTrash, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToysTable = ({ mineToys, handlerDeleteToy }) => {

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
                                        <FaUserEdit className="text-sky-blue"></FaUserEdit>

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