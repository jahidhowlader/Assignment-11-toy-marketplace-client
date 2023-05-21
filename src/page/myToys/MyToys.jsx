import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyToysTable from "./MyToysTable";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {

    // Auth Context
    const { user } = useContext(AuthContext)

    // custom Hooks
    useTitle('My Toys')

    // state for total toys of mine
    const [mineToys, setMineToys] = useState(null)

    // Fetch my Toys
    useEffect(() => {

        fetch(`https://castle-disney-server.vercel.app/my-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setMineToys(data)
            })
    }, [user])

    // handlerDeleteToy
    const handlerDeleteToy = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`https://castle-disney-server.vercel.app/my-toys${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(() => {

                            const remaining = mineToys.filter(toy => toy._id !== _id)
                            setMineToys(remaining)
                        })
                }
            })


    }

    return (
        <>
            <hr />
            <section className="max-w-screen-2xl mx-auto">

                <h3 className="text-3xl my-8">My Toys</h3>
                <MyToysTable
                    mineToys={mineToys}
                    handlerDeleteToy={handlerDeleteToy}
                ></MyToysTable>
            </section>
        </>
    );
};

export default MyToys;