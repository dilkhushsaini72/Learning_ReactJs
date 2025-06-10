import React, { useState } from "react";

const Project2 = () => {
  const [inputText, setInputText] = useState("");
  const [apiData, setApiData] = useState(" ");
  const API_KEY = "ae38873910c94a71b5ade8e9efbf92e0";

  const apiHandle = async () => {
    try {
      const apiResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${API_KEY}&units=metric`
      );
      const result = await apiResponse.json();
      setApiData(result);
    } catch (error) {
      console.error(error);
    }
  };

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) {
      alert("Please enter a city!");
      return;
    }
    apiHandle();
    setInputText("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-200 to-indigo-300 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-center text-3xl font-bold text-blue-700 mb-6">
          Weather App
        </h2>

        <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-6">
          <input
            className="flex-grow border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter city name"
            value={inputText}
            onChange={onInputChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            🔍
          </button>
        </form>

        {apiData && apiData.main ? (
          <div className="bg-blue-50 rounded-xl p-6 space-y-4 text-center">
            <h3 className="text-2xl font-semibold text-blue-800">
              {apiData.name}
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex flex-col items-center">
                <span className="font-medium">Humidity</span>
                <span>{apiData.main.humidity}%</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">Wind Speed</span>
                <span>{apiData.wind.speed} km/h</span>
              </div>
              <div className="flex flex-col items-center col-span-2">
                <span className="font-medium text-lg">Temperature</span>
                <span className="text-xl font-bold text-blue-600">
                  {apiData.main.temp}°C
                </span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No city found...</p>
        )}
      </div>
    </div>
  );
};

export default Project2;
