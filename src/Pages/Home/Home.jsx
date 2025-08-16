import React from 'react';
import Reliable from '../../components/Home/Reliable';
import WhyChooseUs from '../../components/Home/WhyChooseUs';
import Banner from '../../components/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-7xl mx-auto">
                <Reliable />
            </div>
            <WhyChooseUs />
        </div>
    );
};

export default Home;