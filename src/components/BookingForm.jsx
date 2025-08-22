// src/components/BookingForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
    "mt-1 w-full px-4 py-2 border rounded-lg transition outline-none text-gray-900" +
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
        className="bg-gradient-to-r from-blue-100 to-red-100 rounded-xl shadow-xl max-w-6xl mx-auto p-6"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-950">
          BOOK YOUR <span className="text-red-600">MAXI TAXI</span>
        </h2>
                {/* React Type Animation */}
        <div className="flex justify-center mb-2">
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
            speed={60}
            repeat={Infinity}
            cursor={true}
          className=" text-lg md:text-2xl font-semibold text-blue-950"
        />
        </div>
        <p className="text-gray-700 text-center text-sm md:text-base mb-8 leading-relaxed mt-4">
          Maxi Taxi Perth provides reliable transport for weddings, events, airport transfers, and everyday travel across all major Perth areas.
        </p>

        {/* Grid Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-950">
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
            <label className="text-sm font-medium">Phone Number</label>
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
            <label className="text-sm font-medium">Date of Event</label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className={`${inputClasses} cursor-pointer`}
            />
            
            {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Pick Up Time</label>
            <input
              type="time"
              {...register("time", { required: "Time is required" })}
              className={`${inputClasses} cursor-pointer`}
            />
            {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Number of Passengers</label>
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
            <label className="text-sm font-medium">Pickup Place</label>
            <input
              type="text"
              {...register("pickup", { required: "Pickup is required" })}
              className={inputClasses}
              placeholder="Pickup location"
            />
            {errors.pickup && <p className="text-red-500 text-sm">{errors.pickup.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Dropoff Place</label>
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
              Flight Number <span className="text-xs">(Optional)</span>
            </label>
            <input
              type="text"
              {...register("flight")}
              className={inputClasses}
              placeholder="Flight number"
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
