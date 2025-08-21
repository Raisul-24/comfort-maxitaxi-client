import React from "react";
import {
  FaPlaneDeparture,
  FaTaxi,
  FaClock,
  FaUserTie,
  FaCheckCircle,
  FaHeadset,
  FaWifi,
} from "react-icons/fa";
import b1 from "/images/b1.jpg";
import taxiImg from "/images/taxi2.jpg";
import airportImg from "/images/taxi1.jpg";

const AirportTransfer = () => {
  const terminals = [
    { t: "T1", d: "International Arrivals & Departures" },
    { t: "T2", d: "Domestic Flights" },
    { t: "T3", d: "International & Regional Flights" },
    { t: "T4", d: "Domestic Arrivals" },
  ];

  const services = [
    {
      icon: <FaTaxi />,
      title: "Door-to-Door Service",
      desc: "Skip the hassle! We pick you up from the terminal and drop you exactly where you need to be.",
    },
    {
      icon: <FaClock />,
      title: "Always On Time",
      desc: "No delays! Our drivers monitor your flight and ensure you never miss a connection.",
    },
    {
      icon: <FaUserTie />,
      title: "Luxury Chauffeurs",
      desc: "Ride in comfort with our professional and friendly chauffeurs trained for airport transfers.",
    },
  ];

  const attractions = [
    {
      name: "King's Park & Botanic Garden",
      img: "https://i.ibb.co/9kBQRRsM/unnamed.webp",
    },
    { name: "Fremantle Prison", img: "https://i.ibb.co/Q73PGKPx/unnamed.jpg" },
    { name: "Perth Zoo", img: "https://i.ibb.co/dsKzqczb/download-1.jpg" },
    { name: "Perth Mint", img: "https://i.ibb.co/m5pn6qwm/download.jpg" },
    {
      name: "St. Mary’s Cathedral",
      img: "https://i.ibb.co/zpK1Y8z/download-2.jpg",
    },
    {
      name: "Art Gallery of WA",
      img: "https://i.ibb.co/yF7z66m0/download-3.jpg",
    },
  ];

  const faqs = [
    {
      q: "How much does a Perth airport transfer cost?",
      a: "We offer fixed and transparent pricing. No hidden charges!",
    },
    {
      q: "Do you operate late at night?",
      a: "Yes, Comfort MaxiTaxi Perth is available 24/7 including weekends & holidays.",
    },
    {
      q: "Can I book for large groups?",
      a: "Absolutely! We offer 7, 10, and 14-seater maxi taxis and vans.",
    },
    {
      q: "Do you provide child seats?",
      a: "Yes, upon request we provide child seats to ensure family-friendly rides.",
    },
    {
      q: "How early should I book?",
      a: "We recommend booking at least 12 hours before your trip for guaranteed availability.",
    },
  ];

  const airportFeatures = [
    {
      icon: <FaTaxi />,
      title: "Door-to-Door Service",
      desc: "We pick you up from your location and drop you at the terminal safely and on time.",
    },
    {
      icon: <FaClock />,
      title: "Flight Monitoring",
      desc: "Our team tracks your flight to ensure timely pickups and drop-offs even if your schedule changes.",
    },
    {
      icon: <FaUserTie />,
      title: "Professional Chauffeurs",
      desc: "All our drivers are trained, friendly, and experienced in airport transfers.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Sanitised Vehicles",
      desc: "Vehicles are cleaned and sanitised before every trip for your safety and comfort.",
    },
    {
      icon: <FaWifi />,
      title: "Free In-Car Wi-Fi",
      desc: "Stay connected on the go with complimentary Wi-Fi available in all our airport transfer vehicles.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div
        className="relative py-24 px-4 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${b1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#00240D]/90 to-[#00247D]/70"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg tracking-wide">
            Comfort MaxiTaxi – Perth Airport Transfers
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            Reliable, affordable, and stress-free airport pickups and drop-offs
            with{" "}
            <span className="text-[#FF0000] font-semibold">
              Comfort MaxiTaxi Perth
            </span>
            . Choose between maxi taxis, private shuttles, or luxury
            chauffeur-driven cars.
          </p>
        </div>
      </div>

      <div className="py-6 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-12">
            Perth Airport Transfers
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-6 text-gray-700 text-sm md:text-base">
              <p>
                Travelling to and from the airport can sometimes feel stressful,
                especially when flights arrive late at night or early in the
                morning. Reliable taxi and transfer services in Perth are changing
                this by offering convenient pick-up and drop-off options across
                the city and suburbs. No matter the time of day, these services
                provide safe, comfortable, and hassle-free transportation to and
                from Perth Airport.
              </p>

              <p>
                For passengers heading to{" "}
                <span className="font-semibold text-blue-900">Bunbury WA</span>, we
                offer two great transfer options: a spacious 7 or 10-seater maxi
                taxi or a private airport shuttle bus. Both options provide the
                same level of comfort and convenience, ensuring you’re collected
                in a clean, well-maintained minivan for a smooth journey.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <img
                src={taxiImg}
                alt="Taxi transfer in Perth"
                className="rounded-2xl shadow-lg border-4 border-blue-900 "
              />
              <div className="absolute -bottom-6 -left-3 md:-left-6 w-32 h-32">
                <img
                  src={airportImg}
                  alt="Perth Airport"
                  className="rounded-xl shadow-md border-4 border-red-600"
                />
              </div>
            </div>
          </div>

          {/* Extra Info Section */}
          <div className="mt-16 bg-blue-50 border-l-4 border-red-600 rounded-lg p-4 md:p-8 shadow-md text-xs md:text-base">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Perth Airport
            </h3>
            <p className="text-gray-700 mb-4">
              Perth Airport is one of Western Australia’s busiest transport hubs,
              welcoming both domestic and international travellers every day. The
              airport is fully equipped with modern facilities, offering
              everything a traveller needs to make their journey comfortable.
            </p>
            <p className="text-gray-700">
              Whether you’re flying out or arriving to explore the scenic beauty
              of Perth and beyond, our transfer services are here to make the next
              step of your trip simple and stress-free.
            </p>
          </div>
        </div>
      </div>
      {/* Terminals Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-[#00247D]/10 via-white to-[#FF0000]/10">
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-12">
          Perth Airport Terminals
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {terminals.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-lg border-t-4 border-[#FF0000] hover:scale-105 transition-transform"
            >
              <FaPlaneDeparture className="mx-auto text-xl md:text-4xl text-[#00247D] mb-3" />
              <h3 className="font-bold text-lg">{item.t}</h3>
              <p className="text-gray-600 mt-1 text-xs md:text-base">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
      {/* About Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
          alt="Airport Taxi Perth"
          className="rounded-3xl shadow-2xl w-full h-64 md:h-[360px] object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-[#00247D] mb-4 ">
            Why Choose Comfort MaxiTaxi Perth Airport Transfers?
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Whether you’re flying into Perth at sunrise or leaving late at
            night, our team ensures a safe, punctual, and comfortable ride.
            Forget long queues — pre-book with us and travel stress-free.
          </p>
          <ul className="space-y-3">
            {[
              "24/7 Pickup & Drop Service",
              "Clean & Sanitised Vehicles",
              "Professional Chauffeurs",
              "Affordable Fixed Pricing",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaCheckCircle className="text-[#FF0000] text-lg" />
                <span className="text-gray-800 font-medium text-sm ">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto py-10 px-4 grid md:grid-cols-3 gap-6 md:gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-3xl shadow-lg border-l-4 border-[#FF0000] hover:shadow-2xl hover:scale-105 transition-transform"
          >
            <div className="text-xl md:text-4xl text-[#00247D] md:mb-4">{s.icon}</div>
            <h3 className="text-lg font-bold mb-2 text-[#00247D]">{s.title}</h3>
            <p className="text-gray-700 text-xs md:text-sm ">{s.desc}</p>
          </div>
        ))}
      </div>



      {/* ✨ New Section: Perth Airport Transfers */}
      <div className="max-w-7xl mx-auto pb-10 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00247D] mb-6">
          Perth Airport Transfers
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 w-full" >
          <div className="text-xs lg:text-base w-full md:w-2/3 space-y-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              Airport transfers can be daunting, so much so that people often look
              for support from their families when arriving or departing from any
              airport terminal. But reliable taxi services are changing this
              scenario with their easy pick-up and drop services in the Perth
              suburban area. Whether someone is arriving early morning or later in
              the night, these fast taxi services can be trusted with hassle-free
              transportation to and from Perth city.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We have two options for you for your transport from Perth airport to
              Bunbury WA. Which is you can choose a 7 or 10 seater maxi taxi or
              private airport transfer shuttle bus service. Some people use taxi
              service and some private airport transfer bunbury option. Both
              services are exactly same. You will get picked up in a nice and clean
              airport minivan.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center items-center">
            <img
              src="/images/taxi.jpg"
              className="w-48 h-48 md:w-64 md:h-64 shadow-xl rounded-full border-4 border-blue-900 object-cover"
              alt="Taxi"
            />
          </div>

        </div>
      </div>


      {/* Perth Attractions */}
      <div className="max-w-7xl mx-auto md:py-16 px-2 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00247D] text-center mb-8">
          Explore Perth With Comfort MaxiTaxi
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {attractions.map((place, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition transform"
            >
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-30 md:h-48 object-cover rounded-xl mb-3"
              />
              <h3 className="font-bold text-xs md:text-lg mb-1 text-[#00247D]">
                {place.name}
              </h3>
              <p className="text-gray-700 text-xs md:text-sm">
                Seamless transfer options to explore {place.name} with Comfort
                MaxiTaxi Perth.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ + Airport Transfer Features Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-[#00247D]/10 via-white to-[#FF0000]/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#00247D]">
            Frequently Asked Questions & Airport Transfer Features
          </h2>

          <div className="flex flex-col md:flex-row md:space-x-8 gap-6">
            {/* Left Accordion (FAQs) */}
            <div className="md:flex-1">
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

            {/* Right Accordion (Airport Transfer Features) */}
            <div className="md:flex-1">
              {airportFeatures.map((item, i) => (
                <div
                  key={i}
                  className="collapse collapse-arrow border border-base-300 mb-4 rounded-xl bg-white"
                >
                  <input type="radio" name="airport-features-accordion" />
                  <div className="collapse-title text-sm md:text-lg font-semibold text-[#00247D] flex items-center gap-2">
                    <div className="text-lg">{item.icon}</div>
                    {item.title}
                  </div>
                  <div className="collapse-content">
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportTransfer;
