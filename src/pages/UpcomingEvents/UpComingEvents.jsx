import { useLoaderData } from "react-router";
import EventCard from "../../components/EventCard";

export default function UpComingEvents() {
  const events = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Up Coming Events
      </h2>
      {events.length === 0 ? (
        <p className="text-center text-gray-500">
          There is no events available yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
          {events.map((event) => (
            <EventCard event={event} key={event._id} />
          ))}
        </div>
      )}
    </div>
  );
}
