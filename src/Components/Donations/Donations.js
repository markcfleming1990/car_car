import React from "react";

function Donation() {
  const donationOptions = [
    { amount: "$10" },
    { amount: "$20" },
    { amount: "$30" },
    { amount: "Other" },
  ];

  return (
    <div className="px-4 py-8 w-screen h-auto border-green-500 bg-blue text-gold border-blue">
      <h1 className="text-3xl font-bold text-center mb-6">Become a Donor</h1>
      <div className="flex justify-center mb-8">
        <div className="w-2/3 md:w-1/2 lg:w-1/3">
          <p className="text-gray-700 mb-4">
            Select an amount to donate and click the button below:
          </p>
          <div className="grid grid-cols-2 gap-4">
            {donationOptions.map((option, index) => (
              <button
                key={index}
                className="px-4 py-2 text-lg font-semibold  rounded-md border-gray-700 bg-green hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                {option.amount}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
