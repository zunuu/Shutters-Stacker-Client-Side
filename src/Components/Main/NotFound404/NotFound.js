import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notfound bg-light d-flex align-items-center justify-content-center'>
            <h1><span className='text-danger'>Opps!(Not Found 404)</span> <br /> The page you are looking for is not found</h1>
        </div>
    );
};

export default NotFound;