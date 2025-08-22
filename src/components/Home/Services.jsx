import React from 'react';
import { Link } from 'react-router';

const Services = () => {
    return (
        <div className='px-2 py-6 md:py-16'>
            <h2 className='text-2xl md:text-4xl font-extrabold tracking-wide text-blue-950 text-center mb-8'>
                Our Services
            </h2>
            <p className='text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb
                -8'>
                At Comfort Maxi Taxi, we offer a wide range of services to meet your transportation needs in Perth. Whether you need a ride to the airport, a comfortable vehicle for your family, or specialized transport for events, we have you covered. Our fleet includes maxi taxis, wheelchair accessible vehicles, and baby capsule-equipped cars to ensure a safe and pleasant journey for everyone.
            </p>
            {/* ALL SERVICES */}
            <div>
                {/* Airport Transfers Section */}
                <div className="py-6 ">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
                            {/* Left Side - Text */}
                            <div className="space-y-6 text-gray-700 text-xs lg:text-base">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-950 mb-4">
                                    Perth Airport Transfers
                                </h2>
                                <p>
                                    Travelling to and from the airport can sometimes feel stressful,
                                    especially when flights arrive late at night or early in the
                                    morning. With our reliable Perth airport transfer services, you never have to worry about
                                    delays, safety, or last-minute arrangements. We provide24/7 availability to
                                    make sure you and your family always reach your destination on time.
                                </p>

                                <p>
                                    For passengers heading toBunbury WA, we offer two excellent transfer options: a spacious 7 or 10-seater maxi taxi or a private airport shuttle bus. Both options guarantee comfort, cleanliness, and professional service, so you can relax and enjoy a smooth ride in
                                    our modern, well-maintained vehicles.
                                </p>
                                <Link to="/airport-transfer" className="w-60 btn px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-white hover:text-blue-950 flex items-center gap-2">
                                    Learn More
                                </Link>
                            </div>
                            {/* Right Side - Image */}
                            <div className="relative w-full flex justify-center">
                                <img
                                    src="/images/taxi2.jpg"
                                    alt="Baby capsule taxi in Perth"
                                    className="w-full max-w-lg h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg border-4 border-blue-950"
                                />
                                {/* Secondary Small Image */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
                                    <img
                                        src="/images/taxi1.jpg"
                                        alt="Comfortable baby capsule in taxi"
                                        className="w-full h-full object-cover rounded-xl shadow-md border-4 border-red-600"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Baby Capsule */}
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            {/* Left Side - Image */}
                            <div className="relative w-full flex justify-center order-2 md:order-1">

                                <img
                                    src="/images/babycapsule.jpg"
                                    alt="Baby capsule taxi in Perth"
                                    className="w-full max-w-lg h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg border-4 border-blue-950"
                                />
                                {/* Secondary Small Image */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
                                    <img
                                        src="/images/b2.jpeg"
                                        alt="Comfortable baby capsule in taxi"
                                        className="w-full h-full object-cover rounded-xl shadow-md border-4 border-red-600"
                                    />
                                </div>
                            </div>
                            {/* Right Side - Text */}
                            <div className="space-y-6 text-gray-700 text-xs lg:text-base order-1 md:order-2">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-950 mb-4">
                                    Baby Capsule Taxis in Perth
                                </h2>
                                <p>
                                    Travelling with little ones can be stressful, especially when it comes
                                    to making sure your baby is safe and comfortable in the car. At
                                    Maxi Taxi Perth, we provide dedicated baby capsule taxis designed to make your journey easier and safer.
                                </p>

                                <p>
                                    All our baby capsule taxis are fitted with professionally installed capsules and child seats, so your newborn, toddler, or young child travels securely. Our drivers
                                    are trained to help parents with prams, strollers, and baby gear,
                                    ensuring a smooth and stress-free ride across Perth. Whether it’s a trip to the airport, hospital, or city centre, you can trust us for clean cars, friendly drivers, and the comfort
                                    your family deserves.
                                </p>
                                <Link to="/baby-capsule" className="w-60 btn px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-white hover:text-blue-950 flex items-center gap-2">
                                    Learn More
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
                {/* Wedding Transfers Section */}
                <div className="py-6 ">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
                            {/* Left Side - Text */}
                            <div className="space-y-6 text-gray-700 text-xs lg:text-base">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-950 mb-4">
                                    Wedding Transport in Perth
                                </h2>
                                <p>
                                    Your wedding day deserves nothing less than perfection, and Perth Comfort MaxiTaxi is here to ensure your transport is seamless, stress-free, and
                                    beautifully organised. We provide punctual, reliable, and elegant wedding transfers, so you and your guests arrive in comfort and style.
                                </p>

                                <p>
                                    Whether you need a 7 or 10-seater maxi taxi for your bridal party, or a private shuttle bus for guests, we have
                                    the perfect solution. Our vehicles guarantee spacious seating, air-conditioning, and professional service, ensuring everyone enjoys a smooth ride on your special day.
                                </p>
                                <Link to="/wedding-transport" className="w-60 btn px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-white hover:text-blue-950 flex items-center gap-2">
                                    Learn More
                                </Link>
                           </div>
                            {/* Right Side - Image */}
                            <div className="relative w-full flex justify-center">
                                <img
                                    src="/images/b3.jpg"
                                    alt="Wedding maxi taxi in Perth"
                                    className="w-full max-w-lg h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg border-4 border-blue-950"
                                />
                                {/* Secondary Small Image */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
                                    <img
                                        src="/images/wedding.jpg"
                                        alt="Comfortable wedding transport Perth"
                                        className="w-full h-full object-cover rounded-xl shadow-md border-4 border-red-600"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Wheelchair Accessible Taxi Service */}
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            {/* Left Side - Image */}
                            <div className="relative w-full flex justify-center order-2 md:order-1">
                                <img
                                    src="/images/wheelchair.jpg"
                                    alt="Wheelchair accessible taxi in Perth"
                                    className="w-full max-w-lg h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg border-4 border-blue-950"
                                />
                                {/* Secondary Small Image */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
                                    <img
                                        src="/images/b5.jpg"
                                        alt="Accessible ramp taxi Perth"
                                        className="w-full h-full object-cover rounded-xl shadow-md border-4 border-red-600"
                                    />
                                </div>
                            </div>
                            {/* Right Side - Text */}
                            <div className="space-y-6 text-gray-700 text-xs lg:text-base order-1 md:order-2">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-950 mb-4">
                                    Wheelchair Accessible Taxis in Perth
                                </h2>
                                <p>
                                    Getting around Perth should be easy and accessible for everyone. At
                                    Perth Comfort MaxiTaxi, we proudly provide wheelchair accessible taxis that ensure safe, comfortable, and convenient travel for all passengers.
                                    Our vehicles are equipped with ramps and secure wheelchair restraints to make boarding simple and travel secure. Whether you use a manual or
                                    electric wheelchair, our professional drivers assist you with care and
                                    respect every step of the way.
                                </p>
                                <p>
                                    From hospital visits, airport transfers, events, or daily trips, our wheelchair taxis are designed to give you freedom of travel and
                                    peace of mind across Perth.
                                </p>
                                <Link to="/wheelchair-accessible" className="w-60 btn px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-white hover:text-blue-950 flex items-center gap-2">
                                    Learn More
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;