import { motion } from "framer-motion";
import { FaTag, FaHeadset, FaMoneyBillWave, FaPlaneDeparture } from "react-icons/fa";

const features = [
  { icon: <FaTag />, title: "Best Price Guarantee", desc: "Always find the cheapest flights." },
  { icon: <FaHeadset />, title: "24/7 Support", desc: "We’re here to help, anytime." },
  { icon: <FaMoneyBillWave />, title: "No Hidden Fees", desc: "Transparent pricing guaranteed." },
  { icon: <FaPlaneDeparture />, title: "Easy Booking", desc: "Quick and simple process." },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
