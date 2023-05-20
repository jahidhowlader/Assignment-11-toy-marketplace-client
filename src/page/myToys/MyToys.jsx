import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyToysTable from "./MyToysTable";

const MyToys = () => {

    // Auth Context
    const { user } = useContext(AuthContext)

    const [mineToys, setMineToys] = useState(null)

    useEffect(() => {

        fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMineToys(data)
            })
    }, [])


    return (
        <>
            <hr />
            <section className="max-w-screen-xl mx-auto">

                <h3 className="text-3xl my-8">My Toys</h3>
                <MyToysTable
                    mineToys={mineToys}
                ></MyToysTable>
            </section>
        </>
    );
};

export default MyToys;