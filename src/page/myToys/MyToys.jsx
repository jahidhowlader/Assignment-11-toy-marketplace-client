import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyToysTable from "./MyToysTable";

const MyToys = () => {

    // Auth Context
    const { user } = useContext(AuthContext)

    console.log(user?.email);

    // state for total toys of mine
    const [mineToys, setMineToys] = useState(null)

    // Fetch my Toys
    useEffect(() => {

        fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setMineToys(data)
            })
    }, [user])

    // handlerDeleteToy
    const handlerDeleteToy = _id => {
        console.log(_id);

        fetch(`http://localhost:5000/my-toys${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    console.log(mineToys);
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