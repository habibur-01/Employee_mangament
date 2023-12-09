import React from 'react';
import bg from "../../../img/header.jpg"
import bottomBg from "../../../img/overlay-bottom.png"
import topBg from "../../../img/overlay-top.png"

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        height: '700px',
    };
    
    return (
        <div className='bg-cover relative w-full h-[700px] mb-10  bg-[#2878EB] bg-blend-soft-light' style={bannerStyle}>
            <div className='h-[700px] '>
                <div>
                    <p className='bg-[#dc3545] px-4 py-2 w-56 text-white'>30% off <br/>for new student</p>
                </div>
                <div className='w-2/3 h-[600px] mx-auto  space-y-4 -mt-4 flex justify-center items-center flex-col text-white'>
                    <h1 className='text-5xl text-center font-semibold'>Experience more than 4 years <br/> in this platform</h1>
                    
                    <p className=' text-2xl text-center'>More than 2000 students enroll with us</p>
                </div>

            </div>
            <img src={bottomBg}  className='absolute bottom-0 h-[80px] w-full' alt="" />
            
            
        </div>
    );
};

export default Banner;