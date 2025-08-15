import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner';

const MainLayout = () => {
    return (
        <div className='font-sans w-full min-h-screen bg-white'>
            <Navbar />
            <Banner />
            <div className="container mx-auto"> 
            <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;