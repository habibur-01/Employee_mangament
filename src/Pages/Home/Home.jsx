import React from 'react';
import Banner from './Banner/Banner';
import Course from '../Courses/Course';
import Insructor from '../Instructor/Insructor';
import Testimonials from '../Testimonials/Testimonials';
import Subcscribe from './SubsCribe/Subcscribe';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Course></Course>
            <Insructor></Insructor>
            <Testimonials></Testimonials>
            <Subcscribe></Subcscribe>
        </div>
    );
};

export default Home;