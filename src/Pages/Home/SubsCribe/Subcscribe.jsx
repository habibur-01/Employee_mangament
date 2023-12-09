import React from 'react';

const Subcscribe = () => {
    return (
        <div className='flex justify-center items-center bg-blue-200 h-96 mb-20'>
            <div className='w-3/5 text-center space-y-5'>
                <p className='text-2xl font-medium'>Stay With Us</p>
                <p><input type="email" placeholder='email' className='input input-bordered w-full' /></p>
                <p><button className='btn btn-primary'>Subscribe</button></p>

            </div>
            
        </div>
    );
};

export default Subcscribe;