import { useLoaderData } from "react-router";
import EventCard from "../../components/EventCard";

export default function UpComingEvents() {
  const events = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 grid-cols-1 gap-6">
      {events.map((event) => (
          <EventCard event={event} key={event._id} />
      ))}
    </div>
  );
}
