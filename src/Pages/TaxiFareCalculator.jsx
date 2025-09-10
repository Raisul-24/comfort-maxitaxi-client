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
    let rate = vehicle === "car" ? 2.5 : 3.5;
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

      {/* Info Section */}
      <div className="px-4 md:px-8 py-12 max-w-7xl mx-auto leading-relaxed text-gray-800 space-y-8">
        <h2 className="text-2xl font-bold text-blue-950 mb-3">Why Use Our Fare Estimator?</h2>
        <p>
          We get many questions about our taxi prices and how much a taxi to Perth Airport costs.
          That’s why we’ve set up this page with information about our taxi fares.
          Use the calculator below to quickly get a taxi price quote — a good estimate of how much it will cost.
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full">
          <div className="w-full md:w-2/3 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Our Fleet</h3>
              <p>
                Despite our name, we have a large and diverse taxi fleet, not just maxi taxis:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Regular taxis (sedans & station wagons)</li>
                <li>7-seater taxis</li>
                <li>Maxi taxis (1–12 passengers)</li>
                <li>Airport taxis, wheelchair taxis & taxis with baby seats</li>
              </ul>
              <p className="mt-2">
                Maxi taxis fit more people and can be more cost-effective for groups compared
                to hiring two normal taxis. Select your preferred option in the calculator below.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex items-center justify-center border-2 border-blue-950 rounded-xl overflow-hidden shadow-xl h-56">
            <img src="/images/taxi.jpg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* left side */}
          <div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Save More with Maxi Taxi Perth</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>No Call-Out Fee:</strong> Unlike other taxi companies that charge $1.50, we do NOT charge this fee.</li>
                <li><strong>No Airport Surcharge:</strong> Save even more when traveling to/from Perth Airport.</li>
                <li><strong>Flexible Pickup:</strong> You can be up to 10 minutes late, and we won’t start the meter.</li>
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Choose Your Fare Style</h3>
              <p>You have the flexibility to choose how your taxi fare is calculated:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><strong>Meter Price:</strong> Standard taxi meter rates apply.</li>
                <li><strong>Set Price:</strong> Agree on a fixed price before your ride. No surprises even if there’s traffic, road closures, or delays.</li>
              </ul>
            </div>

          </div>
          {/* right side */}
          <div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Easy Payment Options</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>We accept <strong>pre-payments over the phone</strong> for extra convenience.</li>
                <li>Choose a <strong>set price</strong> and pay in advance — no hidden costs later.</li>
                <li>Cash payments are also accepted if preferred.</li>
              </ul>
            </div>


            {/* how to use */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">How to Use the Fare Calculator</h3>
              <p>
                Our fares are calculated using a simple formula with standard Perth taxi rates:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  For a <strong>1–4 Seater Car</strong>, multiply the distance by
                  <strong> $2.50 per km</strong>.
                </li>
                <li>
                  For a <strong>5–12 Seater Maxi Taxi</strong>, multiply the distance by
                  <strong> $3.50 per km</strong>.
                </li>
                <li>
                  Add the <strong>flag fall charge of $6.10</strong> if applicable.
                </li>
              </ul>
              <p className="mt-2">
                Or simply use our calculator below to get an instant fare estimate!
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Interactive Calculator */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-red-50 ">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="overflow-x-auto mb-12">
            <h2 className="text-2xl font-semibold mb-6">Standard Perth Taxi Tariffs</h2>
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
            <h3 className="text-xl font-bold mb-4">Calculate Your Fare</h3>
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
          </div>
        </div>
      </div>
      {/* Highlighted Features Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid md:grid-cols-3 gap-6">
        {/* No Call-Out Fee */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-600 hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold text-blue-950 mb-2">🚖 No Call-Out Fee</h3>
          <p className="text-gray-700 text-xs md:text-base">
            Unlike other taxi companies in Perth, we don’t charge any call-out fee.
            Other companies may add <strong>$1.50</strong> just to pick you up.
            With Comfort Maxi Taxi, you save money every ride!
          </p>
        </div>

        {/* Set Price Option */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-700 hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold text-blue-950 mb-2">💰 Set Price Option</h3>
          <p className="text-gray-700 text-xs md:text-base">
            Choose a <strong>fixed set price</strong> before your ride.
            No matter the traffic or delays, you’ll only pay the agreed amount.
            Stress-free travel every time.
          </p>
        </div>

        {/* No Airport Surcharge */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-red-600 hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold text-blue-950 mb-2">✈️ No Airport Surcharge</h3>
          <p className="text-gray-700 text-xs md:text-base">
            Heading to Perth Airport? Unlike others, we don’t charge an <strong>airport surcharge</strong>.
            Pay standard taxi rates — whether it’s pick-up or drop-off.
          </p>
        </div>

      </div>
      {/* CTA */}
      <div className="max-w-6xl mx-auto bg-white py-5">
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
