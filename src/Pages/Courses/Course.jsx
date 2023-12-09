import React, { useEffect, useState } from 'react';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle';
import { renderStars } from '../../hooks/ratingStar';

const Course = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://assignment-12-server-side-psi.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // console.log(course)
    return (
        <div className='container mx-auto'>
            <div>
                <HeaderTitle subHeading={"OUR COURSES"} heading={'Checkout New Releases Of Our Courses'}></HeaderTitle>
            </div>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-6'>
                 {
                    courses?.map(course =>  <div key={course._id} className="card w-96 shadow-xl bg-[#3B82F633]">
                    <figure><img src= {course.courseImg} className='w-full h-64' alt="Shoes" /></figure>
                    <div className="card-body items-center  text-center">
                        <h2 className="card-title text-center">
                            $ {course.price}
                        </h2>
                        <h2 className="card-title text-center">
                            {
                                renderStars(course.ratings)
                            }
                        </h2>
                        <h2 className="card-title text-center">

                            {course.courseTitle}
                            
                        </h2>
                        
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline py-3">Read more</div>
                            <div className="badge badge-outline py-3">Join now</div>
                        </div>
                    </div>
                </div>)
                 }
            </div>
        </div>
    );
};

export default Course;