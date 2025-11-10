import React from "react";
import { useLoaderData } from "react-router";
import EventDetailsCard from "../../components/EventDetailsCard";

export default function EventDetails() {
  const eventDetail = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto flex justify-center items-center min-h-[80vh]">
      <EventDetailsCard eventDetail={eventDetail} key={eventDetail._id} />
    </div>
  );
}
