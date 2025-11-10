import React, { useEffect, useState, use } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";
import { FaCalendar, FaLocationArrow } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageEvent = () => {
  const { user } = use(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-events/${user.email}`)
        .then((res) => res.json())
        .then((data) => setEvents(data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await fetch(
          `http://localhost:3000/events/${id}?email=${user.email}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await res.json();

        if (data.deletedCount > 0) {
          // Remove deleted event from state
          setEvents((prevEvents) =>
            prevEvents.filter((event) => event._id !== id)
          );

          Swal.fire({
            title: "Deleted!",
            text: "Your event has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire("Error!", "Failed to delete the event.", "error");
        }
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Manage Your Events
      </h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-500">
          You have not created any events yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden md:mx-0 mx-2"
            >
              <div className="relative">
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {event.eventType}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 dark:text-blue-950">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <p className="text-sm text-gray-500 mb-1 flex items-center gap-2">
                  <span>
                    <FaLocationArrow />
                  </span>
                  {event.location}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <span>
                    <FaCalendar />
                  </span>
                  {event.eventDate}
                </p>

                <div className="flex justify-between mt-4">
                  <Link
                    to={`/event-update/${event._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-xl cursor-pointer"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-xl cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageEvent;
