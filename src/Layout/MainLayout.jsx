import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto text-blue-900 font-sans"> 
            <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;