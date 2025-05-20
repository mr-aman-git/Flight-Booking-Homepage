import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlaneDeparture } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import flights from "../data/FlightData";

const getUniqueCities = (key) => [
  ...new Set(flights.map((flight) => flight[key])),
];

export default function SearchBox() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [results, setResults] = useState([]);
  const [eventHandle, setEventHandle] = useState(false);

  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const handleSearch = () => {
    const filtered = flights.filter(
      (flight) =>
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase() &&
        flight.date === date
    );
    setResults(filtered);
    if (filtered) {
      setEventHandle(true);
      console.log("eventHandle", eventHandle);
    }
  };

  const handleFromChange = (e) => {
    const value = e.target.value;
    setFrom(value);
    if (value.length >= 3) {
      const suggestions = getUniqueCities("from").filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFromSuggestions(suggestions);
    } else {
      setFromSuggestions([]);
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    setTo(value);
    if (value.length >= 3) {
      const suggestions = getUniqueCities("to").filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setToSuggestions(suggestions);
    } else {
      setToSuggestions([]);
    }
  };

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto -mt-20 z-10 relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={handleFromChange}
            className="input border rounded p-2 w-full"
          />
          {fromSuggestions.length > 0 && (
            <ul className="absolute bg-white shadow border rounded w-full mt-1 z-20 max-h-40 overflow-y-auto">
              {fromSuggestions.map((city, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setFrom(city);
                    setFromSuggestions([]);
                  }}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={handleToChange}
            className="input border rounded p-2 w-full"
          />
          {toSuggestions.length > 0 && (
            <ul className="absolute bg-white shadow border rounded w-full mt-1 z-20 max-h-40 overflow-y-auto">
              {toSuggestions.map((city, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setTo(city);
                    setToSuggestions([]);
                  }}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input border rounded p-2 cursor-pointer"
        />
        <input
          type="number"
          min="1"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          placeholder="Passengers"
          className="input border rounded p-2"
        />
      </div>

      <button
        onClick={handleSearch}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all cursor-pointer"
      >
        Search
      </button>

      {results.length > 0 ? (
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Available Flights
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {results.map((flight, index) => (
              <motion.div
                key={flight.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariant}
                whileHover={{ scale: 1.03 }}
                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 transition-all flex flex-col justify-between"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <FaPlaneDeparture className="text-xl text-blue-600" />
                    <h4 className="text-lg font-bold text-blue-700">
                      {flight.airline}
                    </h4>
                  </div>
                  <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {flight.price}
                  </span>
                </div>

                <div className="text-gray-600 text-sm mb-2">
                  <p>
                    <span className="font-medium">{flight.from}</span> ➡️{" "}
                    <span className="font-medium">{flight.to}</span>
                  </p>
                  <p className="mt-1 flex items-center gap-2">
                    <MdDateRange className="text-blue-500" /> {flight.date}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all cursor-pointer"
                >
                  Book Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-4 text-sm text-gray-500">
          {" "}
          {eventHandle ? "No flights found" : ""}{" "}
        </p>
      )}
    </motion.div>
  );
}
