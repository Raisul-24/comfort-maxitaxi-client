import React from 'react';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import { useState } from 'react';
import {
    FaCar,
    FaClock,
    FaCheckCircle,
    FaPhoneAlt,
    FaChild,
    FaWheelchair,
    FaUsers,
    FaGlobe,
    FaBriefcase,
} from "react-icons/fa";
import { MdAirportShuttle, MdPayment, MdCleanHands, MdEvent } from "react-icons/md";

const ChooseUs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);
    const faqs = [
        {
            question: "How do I book a MaxiTaxi?",
            answer: "You can book online through our website or call our customer service for instant bookings."
        },
        {
            question: "Are your vehicles wheelchair accessible?",
            answer: "Yes, we offer wheelchair accessible vehicles. Please mention your requirements while booking."
        },
        {
            question: "Do you provide baby seats?",
            answer: "Absolutely! Baby and booster seats are available upon request at no extra charge."
        },
    ];
    const features = [
        { icon: <FaCheckCircle />, title: "No call-out fee", desc: "Save $1.50 – we don’t charge call-out fees." },
        { icon: <MdPayment />, title: "Metre or fixed fare", desc: "Choose standard metre fare or set price." },
        { icon: <FaCar />, title: "Standard taxi rates", desc: "Premium service at normal taxi fares." },
        { icon: <FaPhoneAlt />, title: "Direct communication", desc: "Speak directly to your driver, not an operator." },
        { icon: <MdAirportShuttle />, title: "Airport transfers", desc: "Pre-book airport pickup with free meet & greet." },
        { icon: <FaClock />, title: "Available 24/7", desc: "Book any time, anywhere in Greater Perth." },
        { icon: <MdPayment />, title: "Eftpos & phone payment", desc: "Pay onboard or pre-pay easily." },
        { icon: <FaClock />, title: "Arrival alerts", desc: "Get a text when we’re 10 minutes away (free)." },
        { icon: <MdCleanHands />, title: "Clean taxis", desc: "All taxis are cleaned regularly for your comfort." },
        { icon: <FaClock />, title: "10-min free waiting", desc: "No extra charges for first 10 minutes." },
        { icon: <FaUsers />, title: "Large taxi fleet", desc: "Normal cars, 7-seaters & 13-seater maxi taxis." },
        { icon: <FaUsers />, title: "Group transfers", desc: "Efficient & reliable group transportation." },
        { icon: <FaWheelchair />, title: "Wheelchair taxis", desc: "Fully accessible taxis (TUSS vouchers accepted)." },
        { icon: <FaChild />, title: "Baby seats", desc: "Free baby seats available upon request." },
        { icon: <FaCheckCircle />, title: "Reliable chauffeurs", desc: "All drivers are police-cleared & experienced." },
        { icon: <FaCheckCircle />, title: "Fully insured", desc: "We meet all regulations & are fully insured." },
        { icon: <FaCheckCircle />, title: "Flexible service", desc: "Special requests? We’ll do our best to help." },
        { icon: <FaGlobe />, title: "Easy online booking", desc: "Book instantly via our website or app." },
        { icon: <FaBriefcase />, title: "Corporate accounts", desc: "Flexible invoicing for businesses & clients." },
        { icon: <MdEvent />, title: "Event transfers", desc: "Weddings, parties, and large group bookings." },
    ];
    return (
        <div className="py-16">
            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                    Why Choose <span className="text-red-600">Perth Comfort MaxiTaxi</span>?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover why we are Perth’s trusted choice for airport transfers, city rides, and long-distance trips.
                    With comfort, safety, and professionalism at our core, we guarantee a reliable travel experience every time.
                </p>
            </div>
            {/* Features Grid (Simple, No Card UI) */}
            <div className="mb-10 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <div className="text-red-600 text-xl md:text-3xl">{item.icon}</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
                                <p className="text-xs md:text-base text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Section: Our Mission */}
            <div className="mb-10 max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-4xl font-semibold text-center text-blue-950 mb-8">Our Mission</h3>
                <p className="text-gray-700 text-center">
                    Our mission is to provide every passenger with a seamless, safe, and comfortable journey.
                    We are committed to exceeding expectations through reliable service, professional drivers, and well-maintained vehicles.
                    Whether you’re traveling for business or leisure, we strive to make your ride stress-free and enjoyable.
                </p>
            </div>

            {/* Features Section */}
            <WhyChooseUs />
            {/* Accordion Section */}
            <div className="mt-16 max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-4xl font-semibold text-center text-blue-950 mb-8">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-4 text-center max-w-3xl mx-auto">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="border rounded-lg">
                        <button
                            className="w-full flex justify-between items-center px-6 py-4 text-left text-blue-900 font-medium focus:outline-none"
                            onClick={() => toggle(idx)}
                        >
                            <span>{faq.question}</span>
                            <span>{openIndex === idx ? '-' : '+'}</span>
                        </button>
                        {openIndex === idx && (
                            <div className="px-6 pb-4 text-gray-700">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ChooseUs;