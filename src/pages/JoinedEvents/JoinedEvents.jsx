import React from "react";
import { useLoaderData } from "react-router";
import JoinedEventsCard from "../../components/JoinedEventsCard";

export default function JoinedEvents() {
  const joinedEventsData = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-3xl font-bold mb-6 text-center">Joined Events</h2>
      {joinedEventsData.length === 0 ? (
        <p className="text-center text-gray-500">
          You don't join any event yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
          {joinedEventsData.map((event) => (
            <JoinedEventsCard event={event} key={event._id} />
          ))}
        </div>
      )}
    </div>
  );
}
