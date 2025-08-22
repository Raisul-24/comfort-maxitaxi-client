import React from 'react';
import Reliable from '../../components/Home/Reliable';
import WhyChooseUs from '../../components/Home/WhyChooseUs';
import Banner from '../../components/Banner';
import Services from '../../components/Home/Services';
import Testimonial from '../../components/Home/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-7xl mx-auto">
                <Reliable />
                <Services />
            </div>
            <WhyChooseUs />
            <Testimonial />
        </div>
    );
};

export default Home;