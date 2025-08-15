import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner';
import Loader from '../Pages/Looder';

const MainLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay (e.g., fetch or image preload)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds delay

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader isVisible={loading} />; // Show loader while loading
    }

    return (
        <div className='font-sans w-full min-h-screen bg-white'>
            <Navbar />
            <Banner />
            <div className="max-w-7xl mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
