import Toystable from "./Toystable";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';

const AllToys = () => {

    // All state are here (search , al toys)
    const [searchText, setSearchText] = useState('')
    const [totalToys, setTotalToys] = useState([])
    const [sort, setSort] = useState(false)
    const [sortOrder, setSortOrder] = useState('ascending')

    // Fetch data from database using api
    useEffect(() => {
        fetch(`http://localhost:5000/toys`)
            .then(res => res.json())
            .then(data => {
                setTotalToys(data)
            })
    }, [])

    // handlerSearch
    const handlerSearch = () => {

        fetch(`http://localhost:5000/toys/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setTotalToys(data)
            })
    }

    // Hander Sorting
    const handlerSort = () => {
        setSort(!sort)

        if(sort){
            setSortOrder('ascending')
        } else {
            setSortOrder('descending ')
        }

        fetch(`http://localhost:5000/toys/sort/${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                setTotalToys(data);
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
        </section>
    );
};

export default AllToys;