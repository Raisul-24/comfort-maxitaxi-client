import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Loader from '../Pages/Looder';
import ScrollSmooth from '../components/ScrollSmooth';
import BookingForm from '../components/BookingForm';
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon

const MainLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader isVisible={loading} />;
    }

    return (
        <div className='font-sans w-full min-h-screen bg-white pt-20'>
            <Navbar />
            <ScrollSmooth />
            <Outlet />
            <BookingForm />
            <Footer />

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/+61403330114" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors duration-300 z-50"
            >
                <FaWhatsapp size={30} />
            </a>
        </div>
    );
};

export default MainLayout;