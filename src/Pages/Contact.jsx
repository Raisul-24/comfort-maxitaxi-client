import React from "react";
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
  FaDog,
} from "react-icons/fa";
import { MdAirportShuttle, MdPayment, MdCleanHands, MdEvent } from "react-icons/md";

const Contact = () => {
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
    <div className="max-w-6xl mx-auto py-10 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Why Choose <span className="text-red-600">Maxi Taxi Perth</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Maxi Taxi Perth is not just a taxi company – we’re a group of highly experienced, independent drivers
          across Greater Perth, united to deliver premium customer service at standard taxi rates.
          Owned by <strong>Shohag Sikder</strong> & <strong>Shafikul Sikder</strong>, 
          we go above and beyond to ensure every ride feels like a private chauffeur service – without charging extra.
        </p>
      </div>

      {/* Features Grid (Simple, No Card UI) */}
      <div className="flex justify-center">
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

      {/* Closing Statement */}
      <div className="mt-16 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Experience the Difference</h3>
        <p className="text-gray-700">
          Whether it’s a one-off trip, regular journey, or special group booking – we’re confident you’ll be
          satisfied and choose us again. From airport transfers to family rides, 
          <span className="text-red-600 font-semibold"> Maxi Taxi Perth </span>
          is your reliable, premium choice at standard taxi rates.
        </p>
      </div>

    </div>
  );
};

export default Contact;
