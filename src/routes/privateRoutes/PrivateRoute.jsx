import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import loader from '../../utilities/loading.json'
import Lottie from "lottie-react";


const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
         return <>
            <div className="grid grid-cols-5">
                <div></div>
                <div className="col-span-3">

                    <Lottie className='' animationData={loader}></Lottie>
                </div>
            </div>
        </>
    }

    if (user) {
        return children
    }

    return <Navigate to="/auth/signin" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;