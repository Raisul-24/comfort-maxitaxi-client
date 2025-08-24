import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";


const Contact = () => {

    const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking-form");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="max-w-7xl mx-auto py-10 px-6 md:px-20">
      {/* Why Choose Us */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Why Choose <span className="text-red-600">Maxi Taxi Perth</span>
        </h2>
        <p className="text-gray-600 text-center">
          Maxi Taxi Perth is not just a taxi company – we’re a group of highly experienced, independent drivers
          across Greater Perth, united to deliver premium customer service at standard taxi rates.
          Owned by <strong>Shohag Sikder</strong> & <strong>Shafikul Sikder</strong>, 
          we go above and beyond to ensure every ride feels like a private chauffeur service – without charging extra.
        </p>
      </div>


      {/* Let's Keep in Touch Section */}
      <div className="mt-10 bg-blue-50 rounded-2xl shadow-lg p-8 md:p-12">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Let’s Keep in Touch
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Need a cab in Perth? Maxi Taxi Perth is available 24/7. Book a taxi online or call us now. 
            We service all of Greater Perth and specialise in group transport with maxi taxis.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side: Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">No booking or call-out fees</h4>
              <p className="text-gray-600">
                While many other taxi companies charge a $1.50 call-out fee, at Maxi Taxi Perth you pay <strong>nothing</strong>. 
                We’ll even send you a free text message when we’re nearly there!
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Transparent Pricing</h4>
              <p className="text-gray-600">
                Choose standard meter fare or lock in a fixed price to avoid traffic surprises. We accept Eftpos and valid TUSS vouchers.
              </p>
            </div>
          </div>

          {/* Right side: Contact Box */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-red-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Call us (24/7)</p>
                <p className="text-lg font-bold text-blue-900">+61 478 674 464</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-red-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-bold text-blue-900">bookings@maxitaxiperth.com.au</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaGlobe className="text-red-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Online Booking</p>
                <btn
                  onClick={scrollToBooking}
                  className="text-lg font-bold text-red-600 hover:underline"
                >
                  BOOK NOW
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* Closing Statement */}
      <div className="mt-10 text-center">
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
