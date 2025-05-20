import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Flight.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      
      <div className="absolute inset-0 bg-black/30 z-10" />


      
      <motion.div
        className="relative z-20 text-center text-white px-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Book Your Flight Anywhere, Anytime
        </h1>
        <p className="text-lg mt-4">
          Compare, Choose, and Fly at the Best Price
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => document.getElementById('search-box').scrollIntoView({ behavior: 'smooth' })}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 cursor-pointer"
        >
          Search Flights
        </motion.button>
      </motion.div>
    </div>
  );
}
