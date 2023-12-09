import { useEffect, useState } from "react";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";
import {  FaFacebookF } from "react-icons/fa";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import {Grid, Navigation } from 'swiper/modules';


const Insructor = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('https://assignment-12-server-side-psi.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div className="container mx-auto">
            <HeaderTitle subHeading={'Instrutors'} heading={'Meet Our Instructors'}></HeaderTitle>
            <div>
                <Swiper
                    slidesPerView={1}
                    grid={{
                        rows: 1
                    }}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Grid, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                    className="mySwiper"
                >
                    {
                        instructors?.map(instructor =>

                            <SwiperSlide key={instructor._id}><div className="card w-80 bg-[#3B82F633] shadow-xl mb-4">
                                <figure className="px-10 pt-10">
                                    <img src={instructor.img} alt="Shoes" className=" w-full rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{instructor.name}</h2>
                                    <p>{instructor.course}</p>
                                    <div className="card-actions">
                                        
                                            <a className=""><FaFacebookF /></a>
                                            <a className=""><FaTwitter /> </a>
                                            <a className=""><FaLinkedinIn /></a>
                                            <a className=""><FaInstagram /></a>
                                        
                                    </div>
                                </div>
                            </div></SwiperSlide>

                        )
                    }
                </Swiper>

            </div>
        </div >
    );
};

export default Insructor;