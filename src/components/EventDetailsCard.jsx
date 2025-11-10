import React, { use } from "react";
import toast from "react-hot-toast";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

export default function EventDetailsCard({ eventDetail }) {
  const { user } = use(AuthContext);
  const {
    title,
    description,
    eventType,
    thumbnail,
    location,
    eventDate,
    createdBy,
  } = eventDetail;

  const handleJoinEvent = async () => {
    
    if (!user) {
      toast.error("TO join this event you have to log in first");
      return;
    }

    const response = await fetch("http://localhost:3000/joined-events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        eventType,
        thumbnail,
        location,
        eventDate,
        joinedBy: user.email,
      }),
    });

    const data = await response.json();

    if (data) {
      toast.success("Event Joined Successfully");
    } else
      (err) => {
        toast.error("There is some issue occured");
      };
  };

  return (
    <div className="flex flex-col md:max-h-[512px] md:mx-0 mx-2 md:flex-row bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full">
      {/* Left: Image */}
      <div className="md:w-1/2 relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-72 md:h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
          {eventType}
        </span>
      </div>

      {/* Right: Details */}
      <div className="md:w-1/2 md:p-8 p-4 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
          {description}
        </p>

        <div className="space-y-2 text-gray-500 dark:text-gray-400 text-sm">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-indigo-500" />
            <span>{location}</span>
          </div>

          <div className="flex items-center">
            <FaCalendarAlt className="mr-2 text-indigo-500" />
            <span>
              {new Date(eventDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="flex items-center">
            <FaUser className="mr-2 text-indigo-500" />
            <span>By {createdBy}</span>
          </div>
        </div>

        <button
          onClick={handleJoinEvent}
          className="inline-block mt-6 w-40 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
        >
          Join Event
        </button>
      </div>
    </div>
  );
}
