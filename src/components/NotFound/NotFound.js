import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container text-center mt-5'>
            <h1>We can not find your desired page</h1>
            <p>Or you can go to <Link className='btn btn-primary' to="/">Home</Link></p>
        </div>
    );
};

export default NotFound;