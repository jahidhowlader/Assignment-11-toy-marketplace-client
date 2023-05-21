import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Toystable = ({ totalToys, handlerSort, sort }) => {

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>No: </th>
                        <th>Toy Name</th>
                        <th>Seller</th>
                        <th>Price
                            <button onClick={handlerSort} className='ml-3'>
                                {
                                    sort ? 
                                    <FaArrowUp></FaArrowUp> :
                                    <FaArrowDown></FaArrowDown>
                                }
                            </button>
                        </th>
                        <th>Available</th>
                        <th>Information</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        totalToys && totalToys.map((toy, idx) =>
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
                                <td className='font-semibold'>
                                    {toy.seller}
                                </td>
                                <th className='pl-5'>${toy.price}
                                </th>
                                <th className='pl-5'>{toy.available_quantity}</th>
                                <th>
                                    <Link to={`/toy/${toy._id}`}>
                                        <button className="bg-sky-blue w-full rounded py-2 shadow-md shadow-sky-blue text-white my-5">details</button>
                                    </Link>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Toystable;