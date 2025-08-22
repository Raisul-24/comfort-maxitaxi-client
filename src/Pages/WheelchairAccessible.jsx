import React from "react";
import {
    FaWheelchair,
    FaUserTie,
    FaCheckCircle,
    FaClock,
    FaPhoneAlt,
    FaCarSide,
    FaRegSmile,
    FaCalendarCheck,
    FaRoute,
} from "react-icons/fa";
import wheelchairImg from "/images/b4.jpg";
import assistImg from "/images/b5.jpg";
import comfortImg from "/images/b4.jpg";
import { FaPhoneVolume } from "react-icons/fa6";

const WheelchairAccessible = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div
                className="relative py-24 px-4 text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${wheelchairImg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#00240D]/90 to-[#00247D]/70"></div>
                <div className="relative z-10 max-w-3xl mx-auto text-white">
                    <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg tracking-wide">
                        Maxi Taxi Perth – Wheelchair Accessible Taxis
                    </h1>
                    <p className="mt-4 text-base md:text-lg leading-relaxed">
                        Safe, reliable, and comfortable wheelchair taxi services across Perth.
                        Our vehicles are fully equipped to ensure accessible travel for all
                        passengers.
                    </p>
                </div>
            </div>

            {/* Intro */}
            <div className="max-w-6xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#00247D] mb-6">
                    Inclusive, Reliable & Comfortable Travel
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We believe every journey should be safe, comfortable, and accessible.
                    Our wheelchair-friendly taxis are equipped with ramps, secure harness
                    systems, and extra space for carers or companions.
                </p>
            </div>

            {/* 3 Features with Images */}
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 mb-20">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <img src={assistImg} alt="Driver Assistance" className="w-full h-48 object-cover" />
                    <div className="p-6 text-center">
                        <FaUserTie className="text-4xl text-red-600 mx-auto mb-3" />
                        <h3 className="font-bold text-lg text-[#00247D]">Friendly Assistance</h3>
                        <p className="text-gray-600 text-sm">
                            Courteous drivers trained to assist with boarding, securing, and
                            comfortable travel.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <img src={comfortImg} alt="Comfort Travel" className="w-full h-48 object-cover" />
                    <div className="p-6 text-center">
                        <FaRegSmile className="text-4xl text-red-600 mx-auto mb-3" />
                        <h3 className="font-bold text-lg text-[#00247D]">Safe & Comfortable</h3>
                        <p className="text-gray-600 text-sm">
                            Spacious interiors, smooth rides, and safety restraints for peace
                            of mind.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <img src="/images/wheelchair.jpg" alt="Wheelchair Taxi Perth" className="w-full h-48 object-cover" />
                    <div className="p-6 text-center">
                        <FaCarSide className="text-4xl text-red-600 mx-auto mb-3" />
                        <h3 className="font-bold text-lg text-[#00247D]">Built for Accessibility</h3>
                        <p className="text-gray-600 text-sm">
                            All vehicles fitted with ramps and secure wheelchair anchoring
                            systems.
                        </p>
                    </div>
                </div>
            </div>

            {/* Booking Process */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#00247D] mb-10">
                        How to Book a Wheelchair Accessible Taxi
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <FaPhoneAlt className="text-4xl text-red-600 mx-auto mb-3" />
                            <h4 className="font-bold text-lg text-[#00247D] mb-2">Step 1</h4>
                            <p className="text-gray-600 text-sm">
                                Call our 24/7 hotline or book online with your pickup details.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <FaCalendarCheck className="text-4xl text-red-600 mx-auto mb-3" />
                            <h4 className="font-bold text-lg text-[#00247D] mb-2">Step 2</h4>
                            <p className="text-gray-600 text-sm">
                                Schedule your trip — choose immediate pickup or pre-book for
                                hospital, airport, or events.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <FaRoute className="text-4xl text-red-600 mx-auto mb-3" />
                            <h4 className="font-bold text-lg text-[#00247D] mb-2">Step 3</h4>
                            <p className="text-gray-600 text-sm">
                                Our driver arrives on time, assists you onboard, and ensures a
                                safe journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}

            <div className="hero max-w-7xl mx-auto py-16 px-4">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <img
                        src="/images/b5.jpg"
                        className="w-full md:w-60 lg:w-96 rounded-lg shadow-2xl"
                    />
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl lg:text-4xl font-bold text-[#00247D] mb-6">
                            Book Your Wheelchair Taxi in Perth Today
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base mb-8 leading-relaxed">
                            Inclusive, affordable, and always on time. Call us anytime and we’ll be there to make your journey easier.
                        </p>
                        <btn
                            onClick={() => window.location.href = "tel:+61478674464"}
                            className="w-60 btn px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-white hover:text-blue-950 flex items-center gap-2"
                        >
                            <FaPhoneVolume />
                            <p>Call Now to Book</p>
                        </btn>
                        <p className="mt-4 text-gray-700 text-xs md:text-sm">
                            Or contact us via email for a customised wedding transport quote.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WheelchairAccessible;
