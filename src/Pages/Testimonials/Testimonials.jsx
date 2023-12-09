import { useEffect, useState } from "react";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Grid, Navigation } from 'swiper/modules';


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('https://assignment-12-server-side-psi.vercel.app/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className="container mx-auto mb-20">
            <HeaderTitle subHeading={'Testimonials'} heading={'See Our Valuable User Comment'}></HeaderTitle>
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

                    className="mySwiper"
                >
                    {
                        testimonials?.map(testimonial =>

                            <SwiperSlide key={testimonial._id}><div className="card  bg-[#3B82F633] shadow-xl pb-4">
                                <div className="flex justify-center">
                                    <div className="w-32 h-32">
                                        <picture className="px-10 pt-10 ">
                                            <img src={testimonial.userImg} alt="Shoes" className=" w-32 h-32 rounded-full" />
                                        </picture>
                                    </div>
                                </div>
                                <div className="card-body items-center text-center">
                                    <p className="px-6">{testimonial.review}</p>
                                    <h2 className="card-title">{testimonial.userName}</h2>
                                </div>
                            </div></SwiperSlide>

                        )
                    }
                </Swiper>

            </div>
        </div >
    );
};

export default Testimonials;