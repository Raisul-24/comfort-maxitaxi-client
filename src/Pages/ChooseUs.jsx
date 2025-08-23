import React from 'react';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import { useState } from 'react';

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
            {/* Features Section */}
            <WhyChooseUs />
            {/* Additional Section: Our Mission */}
            <div className="mt-16 max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-4xl font-semibold text-center text-blue-950 mb-8">Our Mission</h3>
                <p className="text-gray-700 text-center">
                    Our mission is to provide every passenger with a seamless, safe, and comfortable journey.
                    We are committed to exceeding expectations through reliable service, professional drivers, and well-maintained vehicles.
                    Whether you’re traveling for business or leisure, we strive to make your ride stress-free and enjoyable.
                </p>
            </div>
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