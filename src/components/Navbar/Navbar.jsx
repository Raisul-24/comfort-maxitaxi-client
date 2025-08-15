import React, { useState } from "react";
import { FaSliders } from "react-icons/fa6";
import { Link } from "react-router";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdownMobile = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    return (
        <div className="shadow-xl bg-white text-blue-950 font-sans">
            {/* Small device buttons */}
            <div className="flex lg:hidden gap-x-4 p-2 justify-center items-center">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Book Now
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                    Login
                </button>
            </div>

            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3 lg:py-4">
                {/* Hamburger (mobile) */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-md focus:outline-none"
                    >
                        <FaSliders />
                    </button>
                </div>

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        className="w-7 md:w-16 h-7 md:h-16 rounded-full"
                        src="/maxitaxi.png"
                        alt=""
                    />
                    <Link to="/" className="font-bold md:text-lg">
                        Comfort MaxiTaxi
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 font-bold text-lg">
                    {/* OUR SERVICES */}
                    <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown("services")}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button
                            className={`pb-1 border-b-4 transition-all flex items-center gap-1 ${
                                activeDropdown === "services"
                                    ? "border-blue-500"
                                    : "border-transparent hover:border-blue-500"
                            }`}
                        >
                            OUR SERVICES <span>▼</span>
                        </button>
                        {activeDropdown === "services" && (
                            <div className="absolute left-0 mt-2 bg-white shadow-lg p-4 rounded-md w-56 font-semibold z-50">
                                <ul className="space-y-0">
                                    <li className="border-b border-blue-950 py-1 hover:text-blue-600"><Link to="/">Airport Pickup</Link></li>
                                    <li className="border-b border-blue-950 py-1 hover:text-blue-600"><Link to="/">Baby Capsule</Link></li>
                                    <li className="border-b border-blue-950 py-1 hover:text-blue-600"><Link to="/">Wedding Transport</Link></li>
                                    <li className="py-1 hover:text-blue-600"><Link to="/">Wheelchair Accessible</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* ABOUT US */}
                    <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown("about")}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button
                            className={`pb-1 border-b-4 transition-all flex items-center gap-1 ${
                                activeDropdown === "about"
                                    ? "border-blue-500"
                                    : "border-transparent hover:border-blue-500"
                            }`}
                        >
                            ABOUT US <span>▼</span>
                        </button>
                        {activeDropdown === "about" && (
                            <div className="absolute left-0 mt-2 bg-white shadow-lg p-4 rounded-md w-56 font-semibold z-50">
                                <ul className="space-y-0">
                                    <li className="border-b border-blue-950 py-1 hover:text-blue-600"><Link to="/">Blog</Link></li>
                                    <li className="border-b border-blue-950 py-1 hover:text-blue-600"><Link to="/">Contact</Link></li>
                                    <li className="py-1 hover:text-blue-600"><Link to="/">Why Choose Us</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Taxi Fare Calculator */}
                    <Link
                        to="/"
                        className="pb-1 border-b-4 border-transparent hover:border-blue-500 transition-all"
                    >
                        Taxi Fare Calculator
                    </Link>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex gap-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Book Now
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                        Login
                    </button>
                </div>
            </div>

            {/* Mobile Menu Slide */}
            <div
                className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
                    mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="p-4">
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="mb-4 p-2 rounded-md focus:outline-none"
                    >
                        ✕
                    </button>
                    <ul className="space-y-4">
                        <li>
                            <button
                                onClick={() => toggleDropdownMobile("services")}
                                className="w-full text-left font-semibold flex items-center gap-1"
                            >
                                OUR SERVICES <span>▼</span>
                            </button>
                            {activeDropdown === "services" && (
                                <ul className="ml-4 mt-2 space-y-0">
                                    <li className="border-b border-blue-950 py-1"><Link to="/">Airport Pickup</Link></li>
                                    <li className="border-b border-blue-950 py-1"><Link to="/">Baby Capsule</Link></li>
                                    <li className="border-b border-blue-950 py-1"><Link to="/">Wedding Transport</Link></li>
                                    <li className="py-1"><Link to="/">Wheelchair Accessible</Link></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={() => toggleDropdownMobile("about")}
                                className="w-full text-left font-semibold flex items-center gap-1"
                            >
                                ABOUT US <span>▼</span>
                            </button>
                            {activeDropdown === "about" && (
                                <ul className="ml-4 mt-2 space-y-0">
                                    <li className="border-b border-blue-950 py-1"><Link to="/">Blog</Link></li>
                                    <li className="border-b border-blue-950 py-1"><Link to="/">Contact</Link></li>
                                    <li className="py-1"><Link to="/">Why Choose Us</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/">Taxi Fare Calculator</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;