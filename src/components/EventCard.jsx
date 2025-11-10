import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  const {
    title,
    description,
    eventType,
    thumbnail,
    location,
    eventDate,
    createdBy,
    _id
  } = event;


  return (
    <div className="bg-white md:mx-0 mx-2 dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">
          {eventType}
        </span>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
          <FaMapMarkerAlt className="mr-2 text-indigo-500" />
          <span>{location}</span>
        </div>

        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
          <FaCalendarAlt className="mr-2 text-indigo-500" />
          <span>
            {new Date(eventDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
          <FaUser className="mr-2 text-indigo-500" />
          <span>By {createdBy}</span>
        </div>

        <Link
          to={`/event-details/${_id}`}
          className="inline-block mt-5 w-40 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
