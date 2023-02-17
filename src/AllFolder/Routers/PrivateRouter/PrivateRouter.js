import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../component/AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(authContext);
    console.log(user, loading);
    const location = useLocation();

    if (loading) {
        return <div>Loading ...</div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRouter;