import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({Children}) => {

    const {user} = useContext(AuthContext)
    const location = useLocation()


    if(user) {
        return Children
    }

    return <Navigate to="/auth/signin" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;