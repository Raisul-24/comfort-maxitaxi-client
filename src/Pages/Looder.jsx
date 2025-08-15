import React from "react";
import { motion } from "framer-motion";

const Loader = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-blue-100 via-white to-red-100 flex flex-col items-center justify-center z-50 overflow-hidden">
      
      {/* Shimmer background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white opacity-30"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />

      {/* Car container moving along curved path */}
      <motion.div
        className="w-24 h-24 relative z-10"
        animate={{
          translateX: ["-20%", "20%", "60%", "100%"],
          translateY: ["0%", "-5%", "5%", "0%"],
          rotate: [-5, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        {/* Car image */}
        <img
          src="/maxitaxi.png"
          alt="Comfort MaxiTaxi"
          className="w-full h-full object-contain"
        />

        {/* Wheels bounce */}
        <motion.div
          className="absolute bottom-0 left-4 w-4 h-4 bg-black rounded-full"
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        />
        <motion.div
          className="absolute bottom-0 right-4 w-4 h-4 bg-black rounded-full"
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 0.5, delay: 0.2 }}
        />

        {/* Shadow */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-2 bg-black rounded-full opacity-20"
          animate={{ scaleX: [0.9, 1, 0.9], opacity: [0.15, 0.3, 0.15] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Loading text */}
      <motion.p
        className="mt-6 text-blue-950 font-semibold text-lg z-10"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Loading Comfort MaxiTaxi Perth...
      </motion.p>
    </div>
  );
};

export default Loader;
