import React from "react";
import { FaCheckCircle, FaClock, FaUserTie, FaTaxi } from "react-icons/fa";
import weddingHero from "/images/b3.jpg";
import { FaPhoneVolume } from "react-icons/fa6";

const WeddingTransport = () => {
    const services = [
        {
            icon: <FaTaxi />,
            title: "Travel Together",
            desc: "Book taxis & maxi taxis for up to 200 people for your wedding day.",
        },
        {
            icon: <FaClock />,
            title: "Punctual Drivers",
            desc: "No waiting. Our drivers ensure guests arrive on time for all events.",
        },
        {
            icon: <FaUserTie />,
            title: "Professional Chauffeurs",
            desc: "Friendly and professional drivers who maintain your wedding schedule.",
        },
        {
            icon: <FaCheckCircle />,
            title: "Sparkling Clean Vehicles",
            desc: "All cars are immaculately maintained and can be decorated for the occasion.",
        },
    ];

    const gallery = [
        { name: "Luxury Taxi Decorated", img: "https://i.ibb.co.com/qYbnKGXj/laxury.jpg" },
        { name: "Maxi Taxi for Guests", img: "/images/b3.jpg" },
        { name: "Wedding Car with Ribbon", img: "https://i.ibb.co.com/ZpTdfsjf/ribbon.jpg" },
        { name: "Guest Transportation", img: "https://i.ibb.co.com/C3ckmmjY/guest.jpg" },
        { name: "Decorated Maxi Taxi", img: "https://i.ibb.co.com/LhS4Z8pM/maxi.webp" },
        { name: "Chauffeur Service", img: "https://i.ibb.co.com/C31jzQf9/chauffer.jpg" },
    ];

    const faqs = [
        { q: "Can I book wedding transport for 200 guests?", a: "Yes, Maxi Taxi Perth can provide taxis and maxi taxis for large weddings up to 200 people." },
        { q: "Can vehicles be decorated for weddings?", a: "Absolutely. We can decorate taxis and maxi taxis with ribbons and other festive touches." },
        { q: "Do you offer fixed pricing?", a: "Yes, we provide a set price for all wedding transportation services." },
        { q: "Are the drivers experienced?", a: "All our chauffeurs are professional, licensed, and punctual." },
        { q: "Do you operate 24/7?", a: "Yes, we are available anytime to ensure your wedding schedule runs smoothly." },
        { q: "What types of vehicles are available?", a: "We have regular taxis, 7, 10, and 13-seater maxi taxis to accommodate your guests." },
    ];

    return (
        <div className="bg-white text-gray-800 font-sans">
            {/* Hero Section */}
            <div
                className="relative py-24 px-4 text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${weddingHero})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#00240D]/90 to-[#00247D]/70"></div>
                <div className="relative z-10 max-w-3xl mx-auto text-white">
                    <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg tracking-wide">
                        Maxi Taxi Perth – Wedding Transport Services
                    </h1>
                    <p className="mt-4 text-xs md:text-lg leading-relaxed">
                        Organise transport for your guests between venues and enjoy the day knowing all transfers are taken care of. Affordable, reliable, and professional wedding transportation in Perth.
                    </p>
                </div>
            </div>

            {/* Wedding Transfers Section */}
            <div className="py-6 ">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-12">
                        Wedding Transport Perth
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
                        {/* Left Side - Text */}
                        <div className="space-y-6 text-gray-700 text-xs md:text-base">
                            <p>
                                Your wedding day deserves nothing less than perfection, and{" "}
                                <span className="font-semibold text-blue-900">
                                    Perth Comfort MaxiTaxi
                                </span>{" "}
                                is here to ensure your transport is seamless, stress-free, and
                                beautifully organised. We provide{" "}
                                <span className="font-semibold text-red-700">
                                    punctual, reliable, and elegant
                                </span>{" "}
                                wedding transfers, so you and your guests arrive in comfort and style.
                            </p>

                            <p>
                                Whether you need a{" "}
                                <span className="font-semibold text-blue-900">7 or 10-seater maxi taxi</span>{" "}
                                for your bridal party, or a private shuttle bus for guests, we have
                                the perfect solution. Our vehicles guarantee{" "}
                                <span className="font-semibold text-red-700">
                                    spacious seating, air-conditioning, and professional service
                                </span>
                                , ensuring everyone enjoys a smooth ride on your special day.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="relative w-full flex justify-center">
                            <img
                                src={weddingHero}
                                alt="Wedding maxi taxi in Perth"
                                className="w-full max-w-lg h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg border-4 border-blue-950"
                            />
                            {/* Secondary Small Image */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
                                <img
                                    src="/images/wedding.jpg"
                                    alt="Comfortable wedding transport Perth"
                                    className="w-full h-full object-cover rounded-xl shadow-md border-4 border-red-600"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Extra Info Section */}
                    <div className="mt-16 bg-blue-50 border-l-4 border-red-600 rounded-lg p-4 md:p-8 shadow-md text-xs md:text-base">
                        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                            Perth Wedding Transfers
                        </h3>
                        <p className="text-gray-700 mb-4">
                            From the ceremony to the reception, and even late-night guest drop-offs,
                            our wedding transport service makes sure every detail is covered.{" "}
                            <span className="font-semibold text-blue-900">Perth Comfort MaxiTaxi</span>{" "}
                            offers flexible packages to suit your timeline, bridal party, and guests.
                        </p>
                        <p className="text-gray-700">
                            With{" "}
                            <span className="font-semibold text-red-700">professional drivers,
                                reliable scheduling, and beautifully presented vehicles</span>,
                            you can focus on making memories while we take care of the journey.
                        </p>
                    </div>
                </div>
            </div>

            {/* Intro Section */}
            <div className="max-w-6xl mx-auto px-4 py-6 md:py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#00247D] mb-6">
                    Why Choose Maxi Taxi Perth for Wedding Transport?       
                </h2>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    We understand that your wedding day is one of the most important days of your life. That's why we offer a dedicated wedding transport service that ensures your guests travel safely, comfortably, and on time. Our professional drivers are trained to provide the highest level of service, making sure your wedding transport is as special as the day itself.</p>
            </div>

            {/* Services Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="p-6 bg-white rounded-3xl shadow-lg border-l-4 border-[#FF0000] hover:shadow-2xl hover:scale-105 transition-transform"
                    >
                        <div className="text-xl md:text-4xl text-[#00247D] md:mb-4">{s.icon}</div>
                        <h3 className="text-lg font-bold mb-2 text-[#00247D]">{s.title}</h3>
                        <p className="text-gray-700 text-sm md:text-base">{s.desc}</p>
                    </div>
                ))}
            </div>

            {/* Wedding Car Gallery */}
            <div className="max-w-7xl mx-auto md:py-16 px-2 md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#00247D] text-center mb-8">
                    Wedding Car & Maxi Taxi Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {gallery.map((vehicle, i) => (
                        <div
                            key={i}
                            className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition transform"
                        >
                            <img
                                src={vehicle.img}
                                alt={vehicle.name}
                                className="w-full h-40 md:h-48 object-cover rounded-xl mb-3"
                            />
                            <h3 className="font-bold text-xs md:text-lg mb-1 text-[#00247D]">
                                {vehicle.name}
                            </h3>
                            <p className="text-gray-700 text-xs md:text-sm">
                                Travel in style with Maxi Taxi Perth – clean, safe, and beautifully decorated vehicles for your wedding day.
                            </p>
                        </div>
                    ))}
                </div>
            </div>


            {/* Book Your Wedding Transport CTA */}

            <div className="hero max-w-7xl mx-auto py-16 px-4">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <img
                        src="/images/wedding.jpg"
                        className="w-full md:w-60 lg:w-96 rounded-lg shadow-2xl"
                    />
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl lg:text-4xl font-bold text-[#00247D] mb-6">
                            Book Your Wedding Transport Today
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base mb-8 leading-relaxed">
                            Organise transport for your wedding guests with Maxi Taxi Perth and enjoy a stress-free day. Our professional drivers will ensure everyone travels safely, on time, and in style.
                        </p>
                        <btn
                            onClick={() => window.location.href = "tel:+61403330114"}
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
                    <div className="grid md:grid-cols-2 gap-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="collapse collapse-arrow border border-base-300 mb-4 rounded-xl bg-white">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title text-sm md:text-base font-semibold text-[#00247D]">
                                    {faq.q}
                                </div>
                                <div className="collapse-content">
                                    <p className="text-gray-700 text-sm md:text-base">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WeddingTransport;
