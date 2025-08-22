import React, { useState } from 'react';

const Reliable = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="p-4 md:p-8 text-blue-950 container">
      {/* Heading */}
       <div className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide">
            Reliable & Flexible Maxi Taxi Services in Perth
          </h1>
          <h5 className="md:text-2xl font-semibold mt-2 text-red-600">
            Comfort MaxiTaxi Perth
          </h5>
        </div>

      {/* Two interactive cards */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        {/* Left Card */}
        <div className="flex-1 bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 p-6 cursor-pointer">
          <p className="text-base md:text-lg mb-2">
            At Comfort MaxiTaxi Perth, we are a dedicated team of professional, independent taxi drivers proudly serving the Greater Perth region. Our goal is simple — comfortable, safe, and punctual transport, every time.
          </p>
          <p className={`text-base md:text-lg mb-2 ${showMore ? 'block' : 'hidden'}`}>
            Whether you’re heading across town, travelling to the airport, or organising a group transfer, we tailor each trip to your needs. Short-distance bookings may include a small premium for guaranteed pick-up. If your driver is running late, a quick call will give you a live update.
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-950 font-semibold hover:underline focus:outline-none"
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>

        {/* Right Card */}
        <div className="flex-1 bg-red-50 hover:bg-red-100 transition-all duration-300 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 p-6 cursor-pointer">
          <p className="text-base md:text-lg mb-2">
            Our fleet is modern, clean, and versatile — from sedans and station wagons to 1–12 seater maxi vans and wheelchair-accessible taxis. We handle airport transfers, wedding transport, corporate events, and group trips efficiently. All vehicles are fully insured, compliant with regulations, and driven by courteous, police-cleared professionals. Book online 24/7 with instant confirmation and a clear price quote.
          </p>
          <p className="text-base md:text-lg font-semibold">
            Comfort MaxiTaxi Perth — your trusted partner for reliable, flexible, and friendly transport.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reliable;
