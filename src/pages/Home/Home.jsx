import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Home = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100">
      {/* ==== Banner Section ==== */}
      <section className="bg-indigo-600 dark:bg-gray-900 text-white py-32 px-6 text-center relative overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Join & Manage Community Events
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Create, join, and explore events near you effortlessly
        </p>
        <a
          href="/upcoming-events"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore Events
        </a>

        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-white opacity-10 rounded-full animate-pulse"></div>
      </section>

      {/* ==== Features Section === */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold mb-12"
        >
          Features
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={cardVariants}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <FaCalendarAlt className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Event Management</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Easily create and manage your events with all the necessary
              details.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <FaUsers className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Join Events</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Discover and join events created by your community and like-minded
              users.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <FaMapMarkerAlt className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Location Based</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Find events happening near you or in your preferred locations.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* =====Gallery Section ==== */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Event Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img
            src="https://gumlet.assettype.com/down-to-earth%2Fimport%2Flibrary%2Flarge%2F2022-09-15%2F0.08976900_1663241450_istock-1248915720-(1).jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100"
            alt="Event"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://media.istockphoto.com/id/98178453/photo/sweeper.jpg?s=612x612&w=0&k=20&c=0qLxQ-zO2EWREqV-wxj-AN0MSw4QGQDrqv4QaDAQdPU="
            alt="Event"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://images.maher.ac.in/wp-content/uploads/2023/11/Tree-Plantation-at-MAHER2-1024x682.jpeg?strip=all&lossy=1&ssl=1"
            alt="Event"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://www.investopedia.com/thmb/hvCs7nGRZ539vKETw1KIHvk2HzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1173117669-baa23a3889054f828aebc58f9de136b6.jpg"
            alt="Event"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://media.istockphoto.com/id/612854592/photo/autumn-in-london.jpg?s=612x612&w=0&k=20&c=nbkAGOGTLo36fyOEoqMKigx5tBnLJHiajshaRqlftTo="
            alt="Event"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://images.gofundme.com/LUXQoDcCQ0cIaRJIUgWfwmBiTck=/1200x800/https://d2g8igdw686xgo.cloudfront.net/26477338_1514189635.84.jpg"
            alt="Event"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* ==== Newsletter Section ==== */}
      <section className="py-20 px-6 bg-indigo-600 dark:bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8 text-lg max-w-xl mx-auto">
          Get the latest updates on new events directly in your inbox.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 rounded-xl border-2 border-white outline-none text-white"
          />
          <button
            type="submit"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-shadow duration-300"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
