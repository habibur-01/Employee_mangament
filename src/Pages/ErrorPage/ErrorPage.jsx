import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=' h-[60vh] flex flex-col justify-center items-center'>
            <div className='space-y-4 text-center'>
                <h1 className='text-3xl font-medium'>404 </h1>
                <p className='text-3xl font-semibold'>Oops!Sorry,Your file Dose not Exist.</p>
                <p><button className='btn btn-primary'><Link to={"/"}>Back To Home</Link></button></p>
            </div>
        </div>
    );
};

export default ErrorPage;