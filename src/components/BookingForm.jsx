// src/components/BookingForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

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

  return (
    <div id="booking-form" className="relative flex justify-center items-center py-12 bg-gradient-to-r from-blue-900 to-red-800 scroll-mt-24">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Form Container */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 bg-white rounded-2xl shadow-2xl w-[90%] md:w-[70%] lg:w-[60%] p-8"
      >
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          BOOK YOUR <span className="text-red-600">MAXI TAXI</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          For your business or personal needs
        </p>

        {/* Grid Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="abc@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Date of Event
            </label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Pick up Time
            </label>
            <input
              type="time"
              {...register("time", { required: "Time is required" })}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            {errors.time && (
              <p className="text-red-500 text-sm">{errors.time.message}</p>
            )}
          </div>

          {/* Passengers */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Number of Passengers
            </label>
            <input
              type="number"
              {...register("passengers", {
                required: "Passengers required",
                min: 1,
              })}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Number of passengers"
            />
            {errors.passengers && (
              <p className="text-red-500 text-sm">
                {errors.passengers.message}
              </p>
            )}
          </div>

          {/* Pickup */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Pick up Place
            </label>
            <input
              type="text"
              {...register("pickup", { required: "Pick up place required" })}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Pick up place"
            />
            {errors.pickup && (
              <p className="text-red-500 text-sm">{errors.pickup.message}</p>
            )}
          </div>

          {/* Drop-off */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Drop off Destination
            </label>
            <input
              type="text"
              {...register("dropoff", {
                required: "Drop off destination required",
              })}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Drop off destination"
            />
            {errors.dropoff && (
              <p className="text-red-500 text-sm">{errors.dropoff.message}</p>
            )}
          </div>

          {/* Flight Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Flight Number (optional)
            </label>
            <input
              type="text"
              {...register("flight")}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Flight number"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700">
            Message
          </label>
          <textarea
            {...register("message")}
            className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            rows="3"
            placeholder="Your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-red-700 transition"
        >
          {isSubmitting ? "Sending..." : "SEND BOOKING"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default BookingForm;
