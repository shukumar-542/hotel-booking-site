import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    // console.log(loading);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <div>loading..</div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    
};

export default PrivateRoute;