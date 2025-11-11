import React from "react";
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";

const Home = () => {
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
        <h2 className="text-4xl font-bold mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaCalendarAlt className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Event Management</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Easily create and manage your events with all the necessary details.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaUsers className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Join Events</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Discover and join events created by your community and like-minded users.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaMapMarkerAlt className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Location Based</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Find events happening near you or in your preferred locations.
            </p>
          </div>
        </div>
      </section>

      {/* =====Gallery Section ==== */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Event Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img src="" alt="Event" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
          <img src="" alt="Event" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
          <img src="" alt="Event" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
          <img src="" alt="Event" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
          <img src="" alt="Event" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
          <img src="" alt="Event" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
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
