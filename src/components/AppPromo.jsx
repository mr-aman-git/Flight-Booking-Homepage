import { motion } from "framer-motion";

export default function AppPromo() {
  return (
    <section className="py-16 bg-white">
      <motion.div
        className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-3xl font-bold text-blue-900">Download Our App</h2>
          <p className="text-gray-600 mt-4 max-w-md">
            Book your next flight on the go. Fast, simple, and secure.
          </p>
          <div className="mt-6 flex gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-12" />
          </div>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
          alt="Mobile App"
          className="w-60 h-auto"
        />
      </motion.div>
    </section>
  );
}
