import React, { useState } from "react";
import b2 from "/images/taxi1.jpg";

const TaxiFareCalculator = () => {
  const [distance, setDistance] = useState("");
  const [vehicle, setVehicle] = useState("car");
  const [fare, setFare] = useState(null);

  const calculateFare = () => {
    if (!distance || isNaN(distance)) {
      setFare("Please enter a valid distance in km.");
      return;
    }
    let rate = vehicle === "car" ? 2.5 : 3.19;
    let total = parseFloat(distance) * rate + 6.1; // including flag fall
    setFare(`Estimated Fare: $${total.toFixed(2)}`);
  };

  return (
    <div className="bg-white text-blue-950">
      {/* Hero Section */}
      <div
        className="relative py-24 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${b2})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#00240D]/90 to-[#00247D]/70"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Taxi Fare Calculator – Perth Comfort Maxi Taxi
          </h1>
          <p className="text-xs md:text-lg leading-relaxed">
            Don’t like surprises? Want to know in advance how much your taxi ride
            will cost? Use our simple <span className="font-semibold">fare calculator</span>
            to estimate your trip cost. Perth Comfort Maxi Taxi offers both{" "}
            <span className="text-red-500 font-semibold">set price</span> and{" "}
            <span className="text-red-500 font-semibold">meter price</span> options,
            ensuring flexibility and peace of mind for your journey.
          </p>
        </div>
      </div>
      <div className="px-4 md:px-8 py-12">
      </div>
      {/* Interactive Calculator */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-red-50 ">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
          {/* Tariffs */}
          <div className="overflow-x-auto mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Standard Perth Taxi Tariffs
            </h2>
            <table className="table-auto w-full border border-blue-950 rounded-xl shadow-xl text-xs md:text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Tariff</th>
                  <th className="px-4 py-2 text-left">Seats</th>
                  <th className="px-4 py-2 text-left">Flag–Fall</th>
                  <th className="px-4 py-2 text-left">Rate/km</th>
                  <th className="px-4 py-2 text-left">Waiting/hr</th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-700">
                <tr className="border-t">
                  <td className="px-4 py-2">Tariff–1</td>
                  <td className="px-4 py-2">1–4 seats</td>
                  <td className="px-4 py-2">$6.10</td>
                  <td className="px-4 py-2">$2.50 / km</td>
                  <td className="px-4 py-2">$75 / hr</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Tariff–2</td>
                  <td className="px-4 py-2">5–12 seats</td>
                  <td className="px-4 py-2">$6.10</td>
                  <td className="px-4 py-2">$3.19 / km</td>
                  <td className="px-4 py-2">$75 / hr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              Calculate Your Fare
            </h3>
            <div className="grid md:grid-cols-3 gap-4 items-center">
              <input
                type="number"
                placeholder="Enter distance (km)"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full py-2 px-4 border rounded-xl"
              >
                <option value="car">1–4 Seater</option>
                <option value="van">5–12 Seater</option>
              </select>
              <button
                onClick={calculateFare}
                className="w-full btn px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-white hover:text-blue-950 flex items-center gap-2"
              >
                Estimate Fare
              </button>
            </div>
            {fare && (
              <p className="mt-4 text-lg font-semibold text-green-700">{fare}</p>
            )}

            {/* Note below calculator */}
            <p className="mt-10 text-xs md:text-sm text-gray-600 leading-relaxed">
              Please note: This fare is an <span className="font-semibold">approximate estimate</span>
              based on distance within Perth. Actual fares may vary slightly.
              For a fixed set price or special bookings (weddings, events, airport transfers),
              please <a href="tel:+61403330114" className="text-red-600 font-semibold underline">contact us directly</a>.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-white py-5">
        {/* CTA */}
        <div className="bg-blue-50 rounded-2xl my-8 md:my-10 shadow-lg p-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Need a Custom Quote for Weddings or Events?
          </h3>
          <p className="mb-6 text-sm md:text-base">
            For special bookings like <strong>weddings</strong>,{" "}
            <strong>events</strong>, or <strong>long trips</strong>, call us
            directly and we’ll tailor a price for you.
          </p>
          <a
            href="tel:+61403330114"
            className="w-44 px-4 py-2 border-2 border-blue-950 hover:border-red-500 hover:bg-blue-950 hover:text-white rounded-md bg-white text-blue-950 gap-2"
          >
            📞 Call for a Quote
          </a>
        </div>
      </div>

    </div>
  );
};

export default TaxiFareCalculator;
