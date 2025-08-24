import React from "react";


const Contact = () => {


  return (
    <div className="max-w-6xl mx-auto py-10 px-6 md:px-20">
      {/* Header */}
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

      

      {/* Closing Statement */}
      <div className="mt-16 text-center max-w-4xl mx-auto">
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
