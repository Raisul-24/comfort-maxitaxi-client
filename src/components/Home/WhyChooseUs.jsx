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
  { title: "No Call-Out Fee", desc: "Save $1.50 — we don’t charge a call-out fee.", icon: <FaPhoneAlt /> },
  { title: "Meter or Fixed Fare", desc: "Choose meter fare or a set price to avoid surprises.", icon: <FaDollarSign /> },
  { title: "Book Online", desc: "Easy online booking with instant confirmation.", icon: <FaLaptop /> },
  { title: "Standard Taxi Rates", desc: "Premium services at standard taxi rates.", icon: <FaClock /> },
  { title: "Online Taxi Fare Calculator", desc: "Estimate your fare before booking.", icon: <FaCalculator /> },
  { title: "Group Transfers", desc: "Efficient transfers for large groups.", icon: <FaUsers /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-6 md:mb-12"
      >
        Why Choose Us?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-base md:text-lg text-gray-700 mb-10 md:mb-16"
      >
        Comfort MaxiTaxi Perth provides reliable taxi services with features that make us your preferred choice.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="relative rounded-xl p-4 sm:p-5 md:p-6 flex flex-col items-center text-center gap-3 cursor-pointer 
                       border border-transparent bg-gradient-to-br from-white to-blue-50 shadow-md
                       hover:border-blue-950 hover:shadow-lg transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-blue-950 text-white text-xl sm:text-2xl md:text-2xl"
            >
              {benefit.icon}
            </motion.div>
            <h3 className="text-base sm:text-lg md:text-lg font-semibold text-blue-950">{benefit.title}</h3>

            <motion.p
              className={`text-gray-700 text-sm sm:text-base md:text-sm mt-1
                         ${activeIndex === index ? "block" : "hidden"} md:block`}
            >
              {benefit.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
