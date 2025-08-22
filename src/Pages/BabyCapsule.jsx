import React from "react";
import { FaTaxi, FaCheckCircle, FaUserTie, FaClock } from "react-icons/fa";
import b2 from "/images/b2.jpeg";
import { FaPhoneVolume } from "react-icons/fa6";

const BabyCapsuleTaxi = () => {
    const services = [
        {
            icon: <FaTaxi />,
            title: "Baby & Toddler Friendly",
            desc: "All our taxis are fitted with government-approved baby capsules, toddler and booster seats free of charge.",
        },
        {
            icon: <FaClock />,
            title: "Available 24/7",
            desc: "Book anytime, day or night. We provide pickups at home or airport arrivals.",
        },
        {
            icon: <FaUserTie />,
            title: "Professional Drivers",
            desc: "All drivers are police-checked, courteous, and trained in child safety.",
        },
    ];

    const babySeats = [
        {
            title: "Capsule Seats",
            desc: "For newborns up to 6 months old.",
            img: "/images/babycapsule.jpg"
        },
        {
            title: "Toddler Seats",
            desc: "For children 1 to 4 years old.",
            img: "/images/toddler.jpg"
        },
        {
            title: "Rear-Facing Seats",
            desc: "For infants up to 2 years old.",
            img: "/images/rear.jpg"
        },
        {
            title: "Booster Seats",
            desc: "For kids 4 to 7 years old.",
            img: "/images/booser.jpg"
        },
    ];
    const faqs = [
        { q: "Can you get a taxi with a baby seat in Perth?", a: "Yes, Maxi Taxi Perth provides baby capsules, toddler and booster seats free of charge." },
        { q: "Does a 3-year-old need a car seat in a taxi?", a: "Yes, children aged 1-4 years must use a toddler seat." },
        { q: "Can a child ride in a taxi without a car seat in Australia?", a: "No, Australian law requires all children to be appropriately restrained." },
        { q: "Who can use a baby capsule?", a: "Newborns up to 6 months should use a capsule; older children use toddler or booster seats based on age." },
        { q: "Are baby seats free of charge?", a: "Yes, all baby capsules, toddler and booster seats are provided free of charge in every taxi." },
        { q: "Do I need to bring my own baby seat?", a: "No, we provide suitable seats for all ages, but you can use your own if you prefer." },
        { q: "Can I book a taxi with a baby seat for airport transfers?", a: "Absolutely! We provide baby-friendly taxis to and from Perth Airport." },
        { q: "Are Maxi Taxi drivers trained to handle baby seats?", a: "Yes, all drivers are trained to safely install and secure baby capsules, toddler, and booster seats." },
        { q: "What types of baby seats are available?", a: "We offer capsule seats for newborns, toddler seats, rear-facing seats, and booster seats for children up to 7 years old." },
        { q: "Can I book a large taxi with multiple baby seats?", a: "Yes, we have 7, 10, and 13-seater maxi taxis that can accommodate multiple children with proper restraints." },
    ];


    return (
        <div className="bg-white text-gray-800 font-sans">
            {/* Hero Section */}
            <div className="relative py-24 px-4 bg-cover bg-center" style={{ backgroundImage: `url(${b2})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-[#00240D]/90 to-[#00247D]/70"></div>

                <div className="relative z-10 max-w-3xl mx-auto text-white">
                    <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg tracking-wide mb-4">
                        Maxi Taxi Perth – Baby Capsule & Child Seat Taxis
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed">
                        Travelling with a baby or toddler? We provide taxis fitted with government-approved baby capsules, toddler and booster seats for your child’s safety and comfort — all free of charge.
                    </p>

                </div>
            </div>
            {/* About Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                    <h2 className="text-2xl font-bold text-[#00247D] mb-4">
                        Travel Safely With Your Baby or Toddler
                    </h2>
                    <p className="mb-4 leading-relaxed text-gray-700">
                        Maxi Taxi Perth ensures your child’s safety is our top priority. Whether travelling to the airport or across Perth, we provide taxis with capsules, toddler or booster seats free of charge. Our experienced drivers secure the seat properly for peace of mind.
                    </p>
                    <ul className="space-y-3">
                        {["24/7 Pickup & Drop Service", "Clean & Sanitised Vehicles", "Professional Drivers", "Baby Seats Free of Charge"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <FaCheckCircle className="text-[#FF0000] text-lg" />
                                <span className="text-gray-800 font-medium text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img
                        src={`${b2}`}
                        alt="Taxi with Child Seat"
                        className="rounded-3xl shadow-2xl w-full h-64 md:h-[360px] object-cover"
                    />
                </div>
            </div>
            {/* Services Section */}
            <div className="py-16 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-6 md:gap-10">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="p-6 bg-white rounded-3xl shadow-lg border-l-4 border-[#FF0000] hover:shadow-2xl hover:scale-105 transition-transform"
                    >
                        <div className="text-xl md:text-4xl text-[#00247D] md:mb-4">{s.icon}</div>
                        <h3 className="text-lg font-bold mb-2 text-[#00247D]">{s.title}</h3>
                        <p className="text-gray-700 text-xs md:text-sm">{s.desc}</p>
                    </div>
                ))}
            </div>
            {/* Baby Seats Section */}
            <div className="py-16 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#00247D] mb-8 text-center">
                        Types of Baby Seats We Offer
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {babySeats.map((seat, i) => (
                            <div key={i} className="p-4 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform">
                                <img
                                    src={seat.img}
                                    alt={seat.title}
                                    className="w-full h-36 md:h-56 object-cover rounded-xl mb-4"
                                />
                                <h3 className="lg:text-lg font-bold text-[#00247D] mb-2">{seat.title}</h3>
                                <p className="text-gray-700 text-sm">{seat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Booking Info Section */}
            <div className="hero max-w-7xl mx-auto py-16 px-4">
                            <div className="hero-content flex-col md:flex-row-reverse">
                                <img
                                    src="/images/b2.jpeg"
                                    className="w-full md:w-60 lg:w-96 rounded-lg shadow-2xl"
                                />
                                <div className="flex flex-col items-center">
                                    <h2 className="text-2xl lg:text-4xl font-bold text-[#00247D] mb-6">
                                        Book Your Baby-Friendly Taxi Today
                                    </h2>
                                    <p className="text-gray-700 text-sm md:text-base mb-8 leading-relaxed">
                                        Simply let us know your pick-up location, time, number of passengers, and the age of your child. Maxi Taxi Perth will provide a suitable taxi with the right baby capsule, toddler seat or booster, ensuring your little one travels safely and comfortably.
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
            
            {/* FAQ Section */}
            <div className="py-16 px-4 bg-gradient-to-r from-[#00247D]/10 via-white to-[#FF0000]/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#00247D]">
                        Frequently Asked Questions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="collapse collapse-arrow border border-base-300 mb-4 rounded-xl bg-white"
                            >
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title text-sm md:text-lg font-semibold text-[#00247D]">
                                    {faq.q}
                                </div>
                                <div className="collapse-content">
                                    <p className="text-gray-700 text-sm">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BabyCapsuleTaxi;
