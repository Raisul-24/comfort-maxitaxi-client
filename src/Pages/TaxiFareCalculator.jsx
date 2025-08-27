import React, { useState, useEffect, useRef } from "react";
import { FaCarSide, FaShuttleVan, FaMapMarkerAlt } from "react-icons/fa";

const TaxiFareCalculator = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [selectedTab, setSelectedTab] = useState("sedan");
  const [fare, setFare] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const pickupRef = useRef(null);
  const dropoffRef = useRef(null);
  const mapRef = useRef(null);

  const [map, setMap] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);

  const rates = {
    sedan: 2.19, // 1-4 seater
    van: 3.19,   // 5-12 seater
  };

  const waitingChargePerHour = 75;

  // Dynamically load Google Maps API with your API key
  useEffect(() => {
    const existingScript = document.getElementById("googleMapsScript");

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "googleMapsScript";
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyD2EEY5bs5IGxLQFs4T0VvMcEPuKrTviuU&libraries=places";
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  const initMap = () => {
    if (!window.google) return;

    const pickupAutocomplete = new window.google.maps.places.Autocomplete(
      pickupRef.current,
      { componentRestrictions: { country: "au" } }
    );

    const dropoffAutocomplete = new window.google.maps.places.Autocomplete(
      dropoffRef.current,
      { componentRestrictions: { country: "au" } }
    );

    pickupAutocomplete.addListener("place_changed", () => {
      const place = pickupAutocomplete.getPlace();
      setPickup(place.formatted_address || place.name);
    });

    dropoffAutocomplete.addListener("place_changed", () => {
      const place = dropoffAutocomplete.getPlace();
      setDropoff(place.formatted_address || place.name);
    });

    const initialMap = new window.google.maps.Map(mapRef.current, {
      center: { lat: -31.9505, lng: 115.8605 }, // Perth, WA
      zoom: 10,
    });

    const renderer = new window.google.maps.DirectionsRenderer();
    renderer.setMap(initialMap);

    setMap(initialMap);
    setDirectionsRenderer(renderer);
  };

  const calculateFare = () => {
    if (!pickup || !dropoff) {
      alert("Please enter both pickup and dropoff locations.");
      return;
    }

    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [pickup],
        destinations: [dropoff],
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.METRIC,
      },
      (response, status) => {
        if (status !== "OK") {
          alert("Error fetching distance data. Try again.");
        } else {
          const distanceInKm =
            response.rows[0].elements[0].distance.value / 1000;
          const durationInMin =
            response.rows[0].elements[0].duration.value / 60;

          setDistance(response.rows[0].elements[0].distance.text);
          setDuration(response.rows[0].elements[0].duration.text);

          const baseRate = rates[selectedTab];
          const fareEstimate =
            distanceInKm * baseRate +
            (durationInMin / 60) * waitingChargePerHour;

          setFare(fareEstimate.toFixed(2));

          const directionsService = new window.google.maps.DirectionsService();
          directionsService.route(
            {
              origin: pickup,
              destination: dropoff,
              travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
              if (status === "OK" && directionsRenderer) {
                directionsRenderer.setDirections(result);
              }
            }
          );
        }
      }
    );
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6 md:px-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
          🚕 Taxi Fare Calculator –{" "}
          <span className="text-red-600">Perth Comfort Maxi Taxi</span>
        </h2>
        <p className="text-gray-600">
          Estimate your trip fare instantly across Perth, WA. Enter pickup and
          dropoff locations, select vehicle type, and get your fare.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-6">
        <button
          onClick={() => setSelectedTab("sedan")}
          className={`flex items-center px-6 py-3 rounded-xl shadow-md ${
            selectedTab === "sedan"
              ? "bg-red-600 text-white"
              : "bg-white text-blue-950 border"
          }`}
        >
          <FaCarSide className="mr-2" /> 1-4 Seater ($2.19/km)
        </button>
        <button
          onClick={() => setSelectedTab("van")}
          className={`flex items-center px-6 py-3 rounded-xl shadow-md ${
            selectedTab === "van"
              ? "bg-red-600 text-white"
              : "bg-white text-blue-950 border"
          }`}
        >
          <FaShuttleVan className="mr-2" /> 5-12 Seater ($3.19/km)
        </button>
      </div>

      {/* Input fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex items-center border rounded-xl p-3 bg-white shadow-sm">
          <FaMapMarkerAlt className="text-red-600 mr-3 text-lg" />
          <input
            ref={pickupRef}
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter Pickup Location"
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border rounded-xl p-3 bg-white shadow-sm">
          <FaMapMarkerAlt className="text-blue-950 mr-3 text-lg" />
          <input
            ref={dropoffRef}
            type="text"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            placeholder="Enter Dropoff Location"
            className="w-full outline-none"
          />
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={calculateFare}
          className="bg-red-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-red-700"
        >
          Calculate Fare
        </button>
      </div>

      {fare && (
        <div className="mt-10 bg-blue-50 rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-950 mb-4">
            Estimated Fare
          </h3>
          <p className="text-gray-700 mb-2">Distance: {distance}</p>
          <p className="text-gray-700 mb-2">Duration: {duration}</p>
          <p className="text-3xl font-bold text-red-600 mb-4">${fare}</p>
          <p className="text-sm text-gray-600">
            💡 Note: This is an estimate. Actual fare may vary with traffic &
            waiting.
          </p>
        </div>
      )}

      {/* Google Map */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-blue-950 mb-4">🗺️ Trip Route</h3>
        <div
          ref={mapRef}
          className="w-full h-96 rounded-2xl shadow-lg border"
        ></div>
      </div>
    </div>
  );
};

export default TaxiFareCalculator;
