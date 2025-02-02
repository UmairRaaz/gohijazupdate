import React, { useState } from "react";

const PackageCostCalculator = () => {
  const [inputs, setInputs] = useState({
    hotelPriceMakkah: 500,
    hotelPriceMadina: 400,
    extraChargesMakkah: 50,
    extraChargesMadina: 40,
    visaCost: 500,
    exchangeRate: 75,
    profitMargin: 10000,
    airlineTicket: 50000,
    nightsMakkah: 5,
    nightsMadina: 3,
    roomMultiplier: 5,
  });

  const [finalPrice, setFinalPrice] = useState(null);

  const handleChange = (e) => {
    setFinalPrice(null)
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const calculatePrice = () => {
    const {
      hotelPriceMakkah,
      hotelPriceMadina,
      extraChargesMakkah,
      extraChargesMadina,
      visaCost,
      exchangeRate,
      profitMargin,
      airlineTicket,
      nightsMakkah,
      nightsMadina,
      roomMultiplier,
    } = inputs;

    const makkahCost =
      hotelPriceMakkah * roomMultiplier * nightsMakkah + extraChargesMakkah;
    const madinaCost =
      hotelPriceMadina * roomMultiplier * nightsMadina + extraChargesMadina;
    const totalCostSAR = makkahCost + madinaCost + visaCost;
    const totalCostPKR = totalCostSAR * exchangeRate;
    const packagePrice = totalCostPKR + profitMargin + airlineTicket;

    setFinalPrice(packagePrice);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Package Price Calculator</h1>
      <div className="w-full max-w-4xl grid grid-cols-3 gap-6 bg-white p-6 shadow rounded">
        {/* Hotel Prices */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Hotel Price Per Night in Makkah (SAR)
          </label>
          <input
            type="number"
            name="hotelPriceMakkah"
            value={inputs.hotelPriceMakkah}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Hotel Price Per Night in Madina (SAR)
          </label>
          <input
            type="number"
            name="hotelPriceMadina"
            value={inputs.hotelPriceMadina}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Extra Charges */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Extra Charges in Makkah (SAR)
          </label>
          <input
            type="number"
            name="extraChargesMakkah"
            value={inputs.extraChargesMakkah}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Extra Charges in Madina (SAR)
          </label>
          <input
            type="number"
            name="extraChargesMadina"
            value={inputs.extraChargesMadina}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Visa and Exchange */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Visa Cost (SAR)
          </label>
          <input
            type="number"
            name="visaCost"
            value={inputs.visaCost}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Exchange Rate (PKR per SAR)
          </label>
          <input
            type="number"
            name="exchangeRate"
            value={inputs.exchangeRate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Profit and Ticket */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Profit Margin (PKR)
          </label>
          <input
            type="number"
            name="profitMargin"
            value={inputs.profitMargin}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Airline Ticket (PKR)
          </label>
          <input
            type="number"
            name="airlineTicket"
            value={inputs.airlineTicket}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Nights and Room Multiplier */}
        <div className="col-span-2 flex space-x-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nights in Makkah
            </label>
            <input
              type="number"
              name="nightsMakkah"
              value={inputs.nightsMakkah}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nights in Madina
            </label>
            <input
              type="number"
              name="nightsMadina"
              value={inputs.nightsMadina}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Room Multiplier
            </label>
            <input
              type="number"
              name="roomMultiplier"
              min={1}
              max={5}
              value={inputs.roomMultiplier}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <button
          onClick={calculatePrice}
          className="bg-blue-500 text-white py-2 px-6 rounded shadow hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Calculate Price
        </button>
        {finalPrice && (
          <div className="mt-4 p-6 bg-green-50 text-green-800 border border-green-400 rounded shadow-lg w-full max-w-md">
            <div className="text-center">
              <p className="text-lg">
                Total Price:{" "}
                <span className="font-semibold">
                  {finalPrice.toLocaleString()} PKR
                </span>
              </p>
              <p className="text-lg">
                Room Type:{" "}
                <span className="font-semibold">
                  {inputs.roomMultiplier === 1
                    ? "Single Bed Sharing"
                    : `${inputs.roomMultiplier} Bed Sharing`}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageCostCalculator;
