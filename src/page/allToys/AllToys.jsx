import Toystable from "./Toystable";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';
import useTitle from "../../hooks/useTitle";

const AllToys = () => {

    // All state are here (search , al toys)
    const [searchText, setSearchText] = useState('')
    const [totalToys, setTotalToys] = useState([])
    const [sort, setSort] = useState(false)
    const [sortOrder, setSortOrder] = useState('ascending')
    const [seemore, setSeemore] = useState(false)

    // custom Hooks
    useTitle('All Toys')

    // Fetch data from database using api
    useEffect(() => {
        fetch(`https://castle-disney-server.vercel.app/toys`)
            .then(res => res.json())
            .then(data => {
                setTotalToys(data.slice(0, 20))
            })
    }, [])

    // handlerSearch
    const handlerSearch = () => {

        fetch(`https://castle-disney-server.vercel.app/toys/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setTotalToys(data)
            })
    }

    // Hander Sorting
    const handlerSort = () => {
        setSort(!sort)

        if (sort) {
            setSortOrder('ascending')
        } else {
            setSortOrder('descending ')
        }

        fetch(`https://castle-disney-server.vercel.app/toys/sort/${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                setTotalToys(data);
            })
    }

    // handler See more data
    const handlerSeemore = () => {
        setSeemore(true)

        fetch(`https://castle-disney-server.vercel.app/toys`)
            .then(res => res.json())
            .then(data => {
                setTotalToys(data)
            })
    }

    return (
        <section >
            <div data-aos="zoom-in" data-aos-duration="1500" className="relative">
                <img src="https://i.ibb.co/s3Y3SdR/Disney-Princess-Banner-00b-scaled.jpg" alt="" />
            </div>

            <div className='max-w-xl mx-auto mt-24 flex '>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" className='bg-rose w-full px-5 py-3 rounded' />
                <button onClick={handlerSearch}>
                    <FaSearch className='bg-red text-white p-3 text-5xl rounded-tr rounded-br'></FaSearch>
                </button>

            </div>

            <div className="max-w-screen-2xl mx-auto my-12">
                <Toystable
                    totalToys={totalToys}
                    handlerSort={handlerSort}
                    sort={sort}
                ></Toystable>
            </div>

            <div className="mx-auto">
                <div className="flex justify-center">
                    <button onClick={handlerSeemore} className={`bg-sky-blue rounded py-2 shadow-md shadow-sky-blue px-5 text-white mb-32 ${seemore ? 'hidden' : 'block'}`}>Load More</button>
                </div>
            </div>
        </section>
    );
};

export default AllToys;