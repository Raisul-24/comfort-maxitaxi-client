import React, { useState, useEffect, useRef } from "react";
import { FaSliders, FaPhoneVolume, FaCar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef();

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const servicesMenu = [
    { name: "Airport Transfers", path: "/airport-transfer" },
    { name: "Baby Capsule", path: "/baby-capsule" },
    { name: "Wedding Transport", path: "/wedding-transport" },
    { name: "Wheelchair Accessible", path: "/wheelchair-accessible" },
  ];

  const aboutMenu = [
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Why Choose Us", path: "/why-choose-us" },
  ];
    const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking-form");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={navbarRef}
      className="fixed top-0 left-0 w-full shadow-xl bg-white text-blue-950 z-50"
    >
      {/* Small device buttons */}
      <div className="flex md:hidden gap-x-2 md:gap-x-4 p-2 justify-center items-center">
        <btn 
          onClick={() => window.location.href = "tel:+61478674464"}
          className="w-36 md:w-44 btn md:px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-white hover:text-blue-950 flex items-center md:gap-2 text-xs md:text-base"
        >
          <FaPhoneVolume />
          <p>+61 403 330 114</p>
        </btn>
        <btn
        onClick={scrollToBooking}
          className="w-36 md:w-44 btn md:px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-white hover:text-blue-950 flex items-center md:gap-2 text-xs md:text-base"
        >
          <FaCar />
          <p>Book Now</p>
        </btn>
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
            alt="Comfort MaxiTaxi"
          />
          <Link to="/" className="font-bold md:text-lg">
            Comfort MaxiTaxi
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-bold text-lg">
          {/* OUR SERVICES */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className={`pb-1 border-b-4 transition-all flex items-center gap-1 hover:border-blue-950 focus:border-blue-950 ${
                activeDropdown === "services" ? "border-blue-950" : "border-transparent"
              }`}
            >
              OUR SERVICES <span>{activeDropdown === "services" ? "▲" : "▼"}</span>
            </button>
            {activeDropdown === "services" && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg p-4 rounded-md w-60 font-semibold z-50">
                <ul className="space-y-0">
                  {servicesMenu.map((item, idx) => (
                    <li
                      key={idx}
                      className="border-b border-blue-950 p-1 hover:rounded-xl hover:text-white hover:bg-blue-950 hover:border-white"
                    >
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ABOUT US */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("about")}
              className={`pb-1 border-b-4 transition-all flex items-center gap-1 hover:border-blue-950 focus:border-blue-950 ${
                activeDropdown === "about" ? "border-blue-950" : "border-transparent"
              }`}
            >
              ABOUT US <span>{activeDropdown === "about" ? "▲" : "▼"}</span>
            </button>
            {activeDropdown === "about" && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg p-4 rounded-md w-56 font-semibold z-50">
                <ul className="space-y-0">
                  {aboutMenu.map((item, idx) => (
                    <li
                      key={idx}
                      className="border-b border-blue-950 p-1 hover:rounded-xl hover:text-white hover:bg-blue-950 hover:border-white"
                    >
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Taxi Fare Calculator */}
          <Link
            to="/taxiFareCalculator"
            className="pb-1 border-b-4 border-transparent hover:border-blue-950 focus:border-blue-950 transition-all"
          >
            Taxi Fare Calculator
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <btn
            onClick={() => window.location.href = "tel:+61478674464"}
            className="w-44 btn px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-white hover:text-blue-950 flex items-center gap-2"
          >
            <FaPhoneVolume />
            <p>+61 403 330 114</p>
          </btn>
          <btn 
            onClick={scrollToBooking}
            className="w-44 btn px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-white hover:text-blue-950 flex items-center gap-2"
          >
            <FaCar />
            <p>Book Now</p>
          </btn >
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
                onClick={() => toggleDropdown("services")}
                className="w-full text-left font-semibold flex items-center gap-1 hover:text-blue-950"
              >
                OUR SERVICES <span>{activeDropdown === "services" ? "▲" : "▼"}</span>
              </button>
              {activeDropdown === "services" && (
                <ul className="ml-4 mt-2 space-y-0">
                  {servicesMenu.map((item, idx) => (
                    <li
                      key={idx}
                      className="border-b border-blue-950 py-1 hover:text-white hover:bg-blue-950"
                    >
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("about")}
                className="w-full text-left font-semibold flex items-center gap-1 hover:text-blue-950"
              >
                ABOUT US <span>{activeDropdown === "about" ? "▲" : "▼"}</span>
              </button>
              {activeDropdown === "about" && (
                <ul className="ml-4 mt-2 space-y-0">
                  {aboutMenu.map((item, idx) => (
                    <li
                      key={idx}
                      className="border-b border-blue-950 py-1 hover:text-white hover:bg-blue-950"
                    >
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="hover:text-blue-950">
              <Link to="/taxiFareCalculator">Taxi Fare Calculator</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
