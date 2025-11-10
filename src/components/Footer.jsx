import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-300 mt-10 border-t border-blue-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* 1️⃣ Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
            Social<span className="text-gray-900 dark:text-white">Serve</span>
          </h2>
          <p className="text-sm leading-relaxed">
            A community-driven platform for creating, joining, and managing
            local social service events — empowering people to make a difference
            together.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/upcoming-events" className="hover:text-blue-500 transition">
                Upcoming Events
              </a>
            </li>
            <li>
              <a href="/create-event" className="hover:text-blue-500 transition">
                Create Event
              </a>
            </li>
            <li>
              <a href="/joined-events" className="hover:text-blue-500 transition">
                Joined Events
              </a>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" /> support@socialserve.org
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-500" /> +880 1700-000000
            </li>
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-blue-500" /> Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        {/* 4️⃣ Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-linear-to-tr from-pink-500 to-orange-400 text-white hover:opacity-90 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* 5️⃣ Bottom Line */}
      <div className="text-center text-sm py-4 border-t border-blue-200 dark:border-gray-700">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            SocialServe
          </span>{" "}
          — Empowering Communities, One Event at a Time 🌱
        </p>
      </div>
    </footer>
  );
};

export default Footer;
