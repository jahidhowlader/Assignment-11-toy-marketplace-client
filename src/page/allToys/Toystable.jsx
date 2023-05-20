import { Link } from 'react-router-dom';

const Toystable = ({ totalToys }) => {

    // const { seller, toy_name, available_quantity, sub_category, price, image } = totalToys
    console.log(totalToys[1]);

    return (
        <div className="overflow-x-auto w-full">
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
                    {/* row 1 */}
                    {
                        totalToys.map((toy, idx) =>
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
                                <th>${toy.price}</th>
                                <th className='text-center'>{toy.available_quantity}</th>
                                <th>
                                    <Link to={`/toys/${toy._id}`}>
                                        <button className="bg-gradient-to-r from-gd-first to-gd-second w-full rounded py-2 shadow-md shadow-gd-second text-white my-5">details</button>
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