import { motion } from "framer-motion";
import NewYork from "../assets/New-York.png";
import Paris from "../assets/paris.png";
import Tokyo from "../assets/tokyo.png";
import Sydney from "../assets/Sydney.png";
import Dubai from "../assets/Dubai.png";
import { Link } from "react-scroll";

const destinations = [
  { city: "New York", image: `${NewYork}` },
  { city: "Paris", image: `${Paris}` },
  { city: "Tokyo", image: `${Tokyo}` },
  { city: "Sydney", image: `${Sydney}` },
  { city: "Dubai", image: `${Dubai}` },
];

export default function Destinations() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          <Link to="destinations" smooth={true} duration={500}>
            Top Destinations
          </Link>
        </h2>
        <div className="flex space-x-6 overflow-x-auto pb-4 pt-2 scrollbar-hide">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              className="min-w-[250px] bg-white rounded-xl hover:rounded-xl shadow hover:shadow-lg transition transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={dest.image}
                alt={dest.city}
                className="rounded-t-xl h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-800">
                  {dest.city}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
