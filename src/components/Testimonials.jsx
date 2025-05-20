import { motion } from "framer-motion";

const testimonials = [
  { name: "Amit", text: "Amazing deals! I saved so much on my trip to Dubai." },
  { name: "Priya", text: "The booking experience was smooth and fast." },
  { name: "John", text: "Support team helped me reschedule with ease. Great service!" },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-blue-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">What Our Users Say</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 italic">“{t.text}”</p>
              <p className="mt-4 font-semibold text-blue-700">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
