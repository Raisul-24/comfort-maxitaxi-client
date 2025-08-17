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

  const inputClasses =
    "mt-1 w-full px-4 py-2 border rounded-lg transition outline-none text-gray-900 placeholder-gray-500 " +
    "focus:border-transparent focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:animate-pulse focus:bg-gradient-to-r focus:from-red-50 focus:to-blue-50";

  return (
    <div
      id="booking-form"
      className="relative flex justify-center items-center py-12 bg-[url('/images/taxi1.jpg')] bg-cover bg-center scroll-mt-24"
    >
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gradient-to-r from-blue-100 to-red-100 rounded-xl shadow-xl w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] p-6 sm:p-8"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-950 mb-2">
          BOOK YOUR <span className="text-red-600">MAXI TAXI</span>
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          For your business or personal needs
        </p>

        {/* Grid Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-blue-950">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={inputClasses}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Phone</label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className={inputClasses}
              placeholder="Phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              className={inputClasses}
              placeholder="abc@gmail.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Date</label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className={`${inputClasses} cursor-pointer`}
            />
            
            {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Time</label>
            <input
              type="time"
              {...register("time", { required: "Time is required" })}
              className={`${inputClasses} cursor-pointer`}
            />
            {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Passengers</label>
            <input
              type="number"
              {...register("passengers", { required: "Required", min: 1 })}
              className={inputClasses}
              placeholder="Number of passengers"
            />
            {errors.passengers && (
              <p className="text-red-500 text-sm">{errors.passengers.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Pickup</label>
            <input
              type="text"
              {...register("pickup", { required: "Pickup is required" })}
              className={inputClasses}
              placeholder="Pickup location"
            />
            {errors.pickup && <p className="text-red-500 text-sm">{errors.pickup.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Dropoff</label>
            <input
              type="text"
              {...register("dropoff", { required: "Dropoff is required" })}
              className={inputClasses}
              placeholder="Dropoff destination"
            />
            {errors.dropoff && <p className="text-red-500 text-sm">{errors.dropoff.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">
              Flight No. <span className="text-xs">(Optional)</span>
            </label>
            <input
              type="text"
              {...register("flight")}
              className={inputClasses}
              placeholder="Optional"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-4 text-blue-950">
          <label className="text-sm font-medium">Message</label>
          <textarea
            {...register("message")}
            className={`${inputClasses} resize-none`}
            rows="3"
            placeholder="Your message....."
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isSubmitting}
          className="btn mt-6 w-full py-3 bg-blue-950 text-white rounded-md hover:bg-white hover:text-blue-950 font-semibold transition"
        >
          {isSubmitting ? "Sending..." : "SEND BOOKING"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default BookingForm;
