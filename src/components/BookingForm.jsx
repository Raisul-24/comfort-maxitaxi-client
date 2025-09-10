// src/components/BookingForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);
    alert("Your booking has been submitted successfully!");
    reset();
  };

  const inputClasses =
    "mt-1 w-full px-3 py-2 border rounded-lg text-sm transition outline-none text-gray-900 " +
    "focus:border-transparent focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:bg-gradient-to-r focus:from-red-50 focus:to-blue-50";

  return (
    <div
      id="booking-form"
      className="relative flex justify-center items-center py-8 bg-[url('/images/taxi1.jpg')] min-h-screen bg-cover bg-center scroll-mt-24 px-2"
    >
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-7xl mx-auto bg-gradient-to-r from-blue-100 to-red-100 rounded-xl shadow-xl  p-4 md:p-6"
      >
        <h2 className="text-xl md:text-2xl font-bold text-center text-blue-950 mb-2">
          BOOK YOUR <span className="text-red-600">MAXI TAXI</span>
        </h2>

        {/* React Type Animation */}
        <div className="flex justify-center mb-1">
          <TypeAnimation
            sequence={[
              "in Perth City 🚖", 2000,
              "in Perth Airport ✈️", 2000,
              "in Fremantle ⚓", 2000,
              "in Cottesloe Beach 🏖️", 2000,
              "in Joondalup 🏙️", 2000,
              "in Rockingham 🌊", 2000,
              "in Scarborough Beach 🌅", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            className="text-sm md:text-base font-semibold text-blue-950"
          />
        </div>

        <p className="text-gray-700 text-xs md:text-sm text-center mb-4 leading-relaxed">
          Maxi Taxi Perth provides reliable transport for weddings, events, airport transfers, and everyday travel across all major Perth areas.
        </p>

        {/* Grid Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-blue-950">
          {/* Name */}
          <div>
            <label className="text-xs font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={inputClasses}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs font-medium">Phone Number</label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className={inputClasses}
              placeholder="Phone number"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-medium">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              className={inputClasses}
              placeholder="abc@gmail.com"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          {/* Date */}
          <div>
            <label className="text-xs font-medium">Date of Event</label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className={`${inputClasses} cursor-pointer`}
            />
            {errors.date && <p className="text-red-500 text-xs">{errors.date.message}</p>}
          </div>

          {/* Time */}
          <div>
            <label className="text-xs font-medium">Pick Up Time</label>
            <input
              type="time"
              {...register("time", { required: "Time is required" })}
              className={`${inputClasses} cursor-pointer`}
            />
            {errors.time && <p className="text-red-500 text-xs">{errors.time.message}</p>}
          </div>

          {/* Passengers */}
          <div>
            <label className="text-xs font-medium">Number of Passengers</label>
            <input
              type="number"
              {...register("passengers", { required: "Required", min: 1 })}
              className={inputClasses}
              placeholder="Number of passengers"
            />
            {errors.passengers && (
              <p className="text-red-500 text-xs">{errors.passengers.message}</p>
            )}
          </div>

          {/* Pickup */}
          <div>
            <label className="text-xs font-medium">Pickup Place</label>
            <input
              type="text"
              {...register("pickup", { required: "Pickup is required" })}
              className={inputClasses}
              placeholder="Pickup location"
            />
            {errors.pickup && <p className="text-red-500 text-xs">{errors.pickup.message}</p>}
          </div>

          {/* Dropoff */}
          <div>
            <label className="text-xs font-medium">Dropoff Place</label>
            <input
              type="text"
              {...register("dropoff", { required: "Dropoff is required" })}
              className={inputClasses}
              placeholder="Dropoff destination"
            />
            {errors.dropoff && <p className="text-red-500 text-xs">{errors.dropoff.message}</p>}
          </div>

          {/* Flight */}
          <div>
            <label className="text-xs font-medium">Flight Number <span className="text-[10px]">(Optional)</span></label>
            <input
              type="text"
              {...register("flight")}
              className={inputClasses}
              placeholder="Flight number"
            />
          </div>

          {/* Message */}
          <div className="col-span-1 md:col-span-2 mt-2 text-blue-950">
            <label className="text-xs font-medium">Message</label>
            <textarea
              {...register("message")}
              className={`${inputClasses} resize-none text-sm`}
              rows="2"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 flex justify-end items-end">
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="btn my-2 w-full py-2 bg-blue-950 text-white rounded-md hover:bg-white hover:text-blue-950 font-semibold text-sm transition "
            >
              {isSubmitting ? "Sending..." : "SEND BOOKING"}
            </motion.button>
          </div>
        </div>
        {/* Contact Info */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6 text-blue-950 text-sm">
          <div className="flex items-center gap-2">
            <FaPhone className="text-lg text-blue-900" />
            <span>+61 403 330 114</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-lg text-blue-900" />
            <span>info@maxitaxiperth.com.au</span>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-lg text-green-600" />
            <span>+61 403 330 114</span>
          </div>
        </div>
      </motion.form>
    </div>
  );
};

export default BookingForm;
