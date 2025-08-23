import React from "react";
import { FaStar, FaEnvelope, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Liam Smith",
    rating: 5,
    text: "Comfort MaxiTaxi made our airport transfer seamless. Professional and friendly drivers!",
    source: "whatsapp",
  },
  {
    name: "Charlotte Brown",
    rating: 5,
    text: "Great service for both domestic and international trips. Vehicles are clean and comfortable.",
    source: "gmail",
  },
  {
    name: "Jack Wilson",
    rating: 4,
    text: "Reliable and punctual taxi service across Perth. Highly recommended for family travel.",
    source: "messenger",
  },
  {
    name: "Olivia Johnson",
    rating: 5,
    text: "We used Comfort MaxiTaxi for our wedding guests. The service was excellent and stress-free.",
    source: "whatsapp",
  },
  {
    name: "Ethan Taylor",
    rating: 5,
    text: "Perfect for international travelers arriving at Perth Airport. Friendly drivers and easy booking.",
    source: "gmail",
  },
  {
    name: "Sophia Martin",
    rating: 4,
    text: "Safe and comfortable ride for my children in a baby capsule taxi. Thank you!",
    source: "messenger",
  },
  {
    name: "Noah White",
    rating: 5,
    text: "Affordable, professional, and reliable. Will definitely use again for domestic trips.",
    source: "whatsapp",
  },
  {
    name: "Mia Harris",
    rating: 5,
    text: "Clean vehicles, punctual drivers, and very accommodating with luggage. Loved the service!",
    source: "gmail",
  },
  {
    name: "Lucas Moore",
    rating: 4,
    text: "Excellent MaxiTaxi service for airport transfers. Smooth and comfortable ride.",
    source: "messenger",
  },
];

const getSourceIcon = (source) => {
  switch (source) {
    case "whatsapp":
      return <FaWhatsapp className="text-green-500" />;
    case "gmail":
      return <FaEnvelope className="text-red-500" />;
    case "messenger":
      return <FaFacebookMessenger className="text-blue-500" />;
    default:
      return null;
  }
};

const Testimonial = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-10">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // custom container
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-xl p-6 h-full flex flex-col justify-between mb-10">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-blue-950">{review.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      {getSourceIcon(review.source)}
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm">{review.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination below the cards */}
        <div className="custom-pagination flex justify-center"></div>
      </div>
    </section>
  );
};

export default Testimonial;
