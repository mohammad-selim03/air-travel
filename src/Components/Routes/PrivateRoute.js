import React, { useContext } from 'react';
import { context } from '../../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loader} = useContext(context);

    const location = useLocation();
    
   

    if(user && user?.uid) {
        return children;
    }

    if(loader) {
        return <p className='text-center mt-52'><span className="loading loading-dots loading-lg"></span></p>
    }

    return <Navigate to='/login' state={{from: location}}></Navigate>;
};

export default PrivateRoute;