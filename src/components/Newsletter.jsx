import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="bg-white py-16">
      <motion.div
        className="max-w-3xl mx-auto text-center px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Stay Updated!</h2>
        <p className="text-gray-600 mb-6">Get the best flight deals and travel tips right in your inbox.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </motion.div>
    </section>
  );
}
