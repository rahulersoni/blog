import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {

    // Check if the user is authenticated (use your own logic here)
    const isAuthenticated = localStorage.getItem('user') !== null;

    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    );
};

export default ProtectedRoute;

