import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Loader from '../Pages/Looder';
import ScrollSmooth from '../components/ScrollSmooth';
import BookingForm from '../components/BookingForm';

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
       <div className='font-sans w-full min-h-screen bg-white pt-20'>
    <Navbar />
    <ScrollSmooth />
    <Outlet />
    <BookingForm />
    <Footer />
</div>

    );
};

export default MainLayout;
