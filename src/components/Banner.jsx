import React, { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/b1.jpg",
    title: "Airport Pickup",
    desc: "Fast and reliable transfers to and from the airport."
  },
  {
    src: "/images/b2.jpeg",
    title: "Baby Capsule",
    desc: "Safe and comfortable rides for you and your little one."
  },
  {
    src: "/images/b3.jpg",
    title: "Wedding Transport",
    desc: "Elegant and timely transport for your special day."
  },
  {
    src: "/images/b4.jpg",
    title: "Comfort & Style",
    desc: "Travel in comfort with our modern, well-maintained vehicles."
  },
  {
    src: "/images/b5.jpg",
    title: "Wheelchair Accessible",
    desc: "Convenient rides fully equipped for wheelchair access."
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background image */}
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div
              className={`absolute inset-0 transition-colors duration-1000 ease-in-out`}
              style={{
                backgroundColor:
                  index === current ? "rgba(23, 37, 84, 0.5)" : "rgba(23, 37, 84, 0)",
              }}
            ></div>

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 z-20">
              <h2 className="text-2xl sm:text-3xl md:text-7xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-xl max-w-2xl drop-shadow-md">
                {slide.desc}
              </p>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {slides.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrent(dotIndex)}
                  className={`w-6 h-2 rounded-xl transition-colors duration-300 ${
                    current === dotIndex ? "bg-blue-950" : "bg-white"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
