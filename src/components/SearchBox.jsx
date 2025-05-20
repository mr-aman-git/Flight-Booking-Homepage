import { motion } from "framer-motion";

export default function SearchBox() {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto -mt-20 z-10 relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input type="text" placeholder="From" className="input" />
        <input type="text" placeholder="To" className="input" />
        <input type="date" className="input" />
        <input type="number" min="1" placeholder="Passengers" className="input" />
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all cursor-pointer">
        Search
      </button>
    </motion.div>
  );
}
