import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="text-center py-20 bg-blue-100"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
        Book Your Flight Anywhere, Anytime
      </h1>
      <p className="text-lg mt-4 text-gray-700">
        Compare, Choose, and Fly at the Best Price
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700"
      >
        Search Flights
      </motion.button>
    </motion.div>
  );
}
