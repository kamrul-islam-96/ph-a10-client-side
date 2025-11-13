import { useLoaderData } from "react-router";
import EventCard from "../../components/EventCard";
import { useEffect, useState } from "react";

export default function UpComingEvents() {
  const events = useLoaderData();

  const [filteredEvents, setFilteredEvents] = useState(events || []);
  const [selectedEventType, setSelectedEventType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [eventTypes, setEventTypes] = useState(["All"]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (events && events.length > 0) {
      const types = ["All", ...new Set(events.map((event) => event.eventType))];
      setEventTypes(types);
    }
  }, [events]);

  const fetchFilteredEvents = async () => {
    setLoading(true);
    setErrorMsg("");
    try {
      const params = new URLSearchParams();
      if (selectedEventType !== "All") {
        params.append("eventType", selectedEventType);
      }
      if (searchTerm.trim() !== "") {
        params.append("search", searchTerm);
      }

      const res = await fetch(
        `https://ph-a10-eventhub.vercel.app/events?${params.toString()}`
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to fetch events");
      }

      const data = await res.json();
      const today = new Date();
      today.setHours(0, 0, 0, 0); // start of today
      const upcomingEvents = data.filter((event) => {
        const eventDate = new Date(event.eventDate);
        return eventDate >= today;
      });

      setFilteredEvents(upcomingEvents);
    } catch (error) {
      setErrorMsg(error.message);
      setFilteredEvents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredEvents();
  }, [selectedEventType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchFilteredEvents();
  };

  const clearFilters = () => {
    setSelectedEventType("All");
    setSearchTerm("");
    fetchFilteredEvents();
  };

  if (!events) {
    return (
      <div>
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center md:w-4xl mx-auto"
      >
        <select
          value={selectedEventType}
          onChange={(e) => setSelectedEventType(e.target.value)}
          className="select select-bordered w-full max-w-xs font-medium"
        >
          {eventTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <div className="relative w-full md:max-w-md">
          <input
            type="text"
            placeholder="Search by event name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full pl-10"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <button type="submit" className="btn btn-primary w-full md:w-auto">
          Search
        </button>

        <button
          type="button"
          onClick={clearFilters}
          className="btn btn-outline w-full md:w-auto"
        >
          Clear
        </button>
      </form>

      {loading && (
        <div className="text-center">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      )}

      {!loading && errorMsg && (
        <p className="text-center text-red-500 text-lg font-medium py-6">
          {errorMsg}
        </p>
      )}

      {!loading && !errorMsg && filteredEvents.length === 0 && (
        <p className="text-center text-gray-500 text-lg py-8">
          No events found.
        </p>
      )}

      {!loading && filteredEvents.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
