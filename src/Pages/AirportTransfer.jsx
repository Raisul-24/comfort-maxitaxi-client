import React from "react";
import { FaPlaneDeparture, FaTaxi, FaClock, FaUserTie, FaCheckCircle } from "react-icons/fa";
import b1 from "/images/b1.jpg";

const AirportTransfer = () => {
  const terminals = [
    { t: "T1", d: "International Arrivals & Departures" },
    { t: "T2", d: "Domestic Flights" },
    { t: "T3", d: "International & Regional Flights" },
    { t: "T4", d: "Domestic Arrivals" },
  ];

  const services = [
    { icon: <FaTaxi />, title: "Door-to-Door Service", desc: "Skip the hassle! We pick you up from the terminal and drop you exactly where you need to be." },
    { icon: <FaClock />, title: "Always On Time", desc: "No delays! Our drivers monitor your flight and ensure you never miss a connection." },
    { icon: <FaUserTie />, title: "Luxury Chauffeurs", desc: "Ride in comfort with our professional and friendly chauffeurs trained for airport transfers." },
  ];

  const attractions = [
    { name: "King's Park & Botanic Garden", img: "https://i.ibb.co/9kBQRRsM/unnamed.webp" },
    { name: "Fremantle Prison", img: "https://i.ibb.co/Q73PGKPx/unnamed.jpg" },
    { name: "Perth Zoo", img: "https://i.ibb.co/dsKzqczb/download-1.jpg" },
    { name: "Perth Mint", img: "https://i.ibb.co/m5pn6qwm/download.jpg" },
    { name: "St. Mary’s Cathedral", img: "https://i.ibb.co/zpK1Y8z/download-2.jpg" },
    { name: "Art Gallery of WA", img: "https://i.ibb.co/yF7z66m0/download-3.jpg" },
  ];

  const faqs = [
    { q: "How much does a Perth airport transfer cost?", a: "We offer fixed and transparent pricing. No hidden charges!" },
    { q: "Do you operate late at night?", a: "Yes, Comfort MaxiTaxi Perth is available 24/7 including weekends & holidays." },
    { q: "Can I book for large groups?", a: "Absolutely! We offer 7, 10, and 14-seater maxi taxis and vans." },
    { q: "Do you provide child seats?", a: "Yes, upon request we provide child seats to ensure family-friendly rides." },
    { q: "How early should I book?", a: "We recommend booking at least 12 hours before your trip for guaranteed availability." },
  ];

  const airportFeatures = [
    { icon: <FaTaxi />, title: "Door-to-Door Service", desc: "We pick you up from your location and drop you at the terminal safely and on time." },
    { icon: <FaClock />, title: "Flight Monitoring", desc: "Our team tracks your flight to ensure timely pickups and drop-offs even if your schedule changes." },
    { icon: <FaUserTie />, title: "Professional Chauffeurs", desc: "All our drivers are trained, friendly, and experienced in airport transfers." },
    { icon: <FaCheckCircle />, title: "Sanitised Vehicles", desc: "Vehicles are cleaned and sanitised before every trip for your safety and comfort." },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <div
        className="relative py-24 sm:py-28 px-4 sm:px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${b1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#00247D]/90 to-[#00247D]/70"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg tracking-wide">
            Comfort MaxiTaxi – Perth Airport Transfers
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-lg leading-relaxed">
            Reliable, affordable, and stress-free airport pickups and drop-offs with{" "}
            <span className="text-[#FF0000] font-semibold">Comfort MaxiTaxi Perth</span>. Choose between maxi taxis, private shuttles, or luxury chauffeur-driven cars.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df" alt="Airport Taxi Perth" className="rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-[360px] object-cover" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00247D] mb-4 sm:mb-6">Why Choose Comfort MaxiTaxi Perth Airport Transfers?</h2>
          <p className="mb-4 sm:mb-6 leading-relaxed text-gray-700">
            Whether you’re flying into Perth at sunrise or leaving late at night, our team ensures a safe, punctual, and comfortable ride. Forget long queues — pre-book with us and travel stress-free.
          </p>
          <ul className="space-y-3 sm:space-y-4">
            {["24/7 Pickup & Drop Service", "Clean & Sanitised Vehicles", "Professional Chauffeurs", "Affordable Fixed Pricing"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 sm:gap-3">
                <FaCheckCircle className="text-[#FF0000] text-lg sm:text-xl" /> 
                <span className="text-gray-800 font-medium text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6 grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {services.map((s, i) => (
          <div key={i} className="p-6 sm:p-8 bg-white rounded-3xl shadow-lg border-l-4 sm:border-l-8 border-[#FF0000] hover:shadow-2xl hover:scale-105 transition-transform">
            <div className="text-4xl sm:text-5xl text-[#00247D] mb-4 sm:mb-5">{s.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#00247D]">{s.title}</h3>
            <p className="text-gray-700 text-sm sm:text-base">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ + Airport Transfer Features Section */}
      <div className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#00247D]/10 via-white to-[#FF0000]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 sm:mb-12 text-center text-[#00247D]">
            Frequently Asked Questions & Airport Transfer Features
          </h2>

          <div className="flex flex-col md:flex-row md:space-x-8 gap-6">

            {/* Left Accordion (FAQs) */}
            <div className="md:flex-1">
              {faqs.map((faq, i) => (
                <div key={i} className="collapse collapse-arrow border border-base-300 mb-4 rounded-xl bg-white">
                  <input type="radio" name="faq-accordion" defaultChecked={i === 0} />
                  <div className="collapse-title text-sm sm:text-base md:text-lg font-semibold text-[#00247D]">{faq.q}</div>
                  <div className="collapse-content">
                    <p className="text-gray-700 text-sm sm:text-base">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Accordion (Airport Transfer Features) */}
            <div className="md:flex-1">
              {airportFeatures.map((item, i) => (
                <div key={i} className="collapse collapse-arrow border border-base-300 mb-4 rounded-xl bg-white">
                  <input type="radio" name="airport-features-accordion" />
                  <div className="collapse-title text-sm sm:text-base md:text-lg font-semibold text-[#00247D] flex items-center gap-2 sm:gap-3">
                    <div className="text-lg sm:text-2xl">{item.icon}</div>
                    {item.title}
                  </div>
                  <div className="collapse-content">
                    <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Perth Attractions */}
      <div className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#00247D] text-center mb-8 sm:mb-12">
          Explore Perth With Comfort MaxiTaxi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {attractions.map((place, i) => (
            <div key={i} className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition transform">
              <img src={place.img} alt={place.name} className="w-full h-40 sm:h-48 md:h-48 object-cover rounded-xl mb-3 sm:mb-4" />
              <h3 className="font-bold text-base sm:text-lg md:text-lg mb-1 sm:mb-2 text-[#00247D]">{place.name}</h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-sm">Seamless transfer options to explore {place.name} with Comfort MaxiTaxi Perth.</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AirportTransfer;
