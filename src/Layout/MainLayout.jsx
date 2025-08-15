import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto"> 
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;