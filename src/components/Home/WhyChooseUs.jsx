import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaDollarSign,
  FaLaptop,
  FaClock,
  FaCalculator,
  FaUsers,
} from "react-icons/fa";

const benefits = [
  {
    title: "No Call-Out Fee",
    desc: "Save $1.50 — we don’t charge a call-out fee for Perth taxi bookings.",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Meter or Fixed Fare",
    desc: "Choose between a standard meter fare or a set price for full transparency.",
    icon: <FaDollarSign />,
  },
  {
    title: "Book Online",
    desc: "Easy online booking with instant confirmation for peace of mind.",
    icon: <FaLaptop />,
  },
  {
    title: "Standard Taxi Rates",
    desc: "Premium service without premium pricing — standard taxi rates apply.",
    icon: <FaClock />,
  },
  {
    title: "Fare Calculator",
    desc: "Plan ahead with our online taxi fare calculator before booking.",
    icon: <FaCalculator />,
  },
  {
    title: "Group Transfers",
    desc: "Comfortable and affordable maxi taxis for families or group trips.",
    icon: <FaUsers />,
  },
];

// Fade-up animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-red-50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-red-200 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-center text-blue-950 mb-2 md:mb-4"
        >
          Why Choose <span className="text-red-600">Comfort MaxiTaxi</span>?
        </motion.h2>

        {/* Animated Wave Divider */}
        <div className="flex justify-center mb-8 md:mb-12">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 w-24 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-full origin-left"
          />
        </div>


        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-base md:text-lg text-blue-950 mb-10 md:mb-16"
        >
          We combine comfort, safety, and affordability to deliver Perth’s most
          reliable airport transfers and group taxi services.
        </motion.p>

{/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
  {benefits.map((benefit, index) => (
    <motion.div
      key={index}
      className="relative rounded-2xl p-6 flex flex-col items-center text-center gap-4 cursor-pointer
                 border border-gray-100 bg-white shadow-md
                 hover:bg-blue-50 hover:shadow-lg transition-colors duration-300 group"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 15, scale: 1.15 }}
        className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center 
                   rounded-full bg-gradient-to-tr from-blue-950 to-red-600 text-white text-2xl shadow-lg"
      >
        {benefit.icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-blue-950">{benefit.title}</h3>

      {/* Description - only visible on hover */}
      <p className="text-gray-700 text-sm sm:text-base mt-1 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {benefit.desc}
      </p>
    </motion.div>
  ))}
</div>


      </div>
    </div>
  );
};

export default WhyChooseUs;
