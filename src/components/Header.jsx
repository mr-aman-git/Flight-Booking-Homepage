import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md text-black"
          : "fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md px-6 py-4 flex justify-between items-center"
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <div className="text-xl font-bold">✈️ FlyNow</div>

      {/* Nav Links */}
      <nav className="hidden md:flex gap-6 font-semibold">
        <a href="#" className="hover:text-blue-500 transition">
          Home
        </a>
        <a href="#" className="hover:text-blue-500 transition">
          Destinations
        </a>
        <a href="#" className="hover:text-blue-500 transition">
          Deals
        </a>
        <a href="#" className="hover:text-blue-500 transition">
          Contact
        </a>
      </nav>

      <button className="ml-4 relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg hover:from-orange-700 hover:to-orange-600 transition-all duration-1000 ease-in-out group cursor-pointer">
        <span className="relative z-10">Sign In</span>

        <span className="absolute left-0 top-0 h-full w-full transform scale-0 bg-white/20 group-hover:scale-150 transition-transform duration-500 ease-out rounded-full"></span>
      </button>
    </motion.header>
  );
}
