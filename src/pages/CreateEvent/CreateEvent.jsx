import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState(null);
  const [createdBy, setCreatedBy] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !eventType || !thumbnail || !location || !eventDate || !createdBy) {
      toast.error("Please fill all fields!");
      return;
    }

    if (eventDate <= new Date()) {
      toast.error("Event date must be in the future!");
      return;
    }

    const newEvent = {
      title,
      description,
      eventType,
      thumbnail,
      location,
      eventDate,
      createdBy,
    };

    try {
      const res = await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Event created successfully! 🎉");
        setTitle("");
        setDescription("");
        setEventType("");
        setThumbnail("");
        setLocation("");
        setEventDate(null);
        setCreatedBy("");
      } else {
        toast.error(data.error || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to connect to server!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Create Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        ></textarea>

        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select Event Type</option>
          <option value="Cleanup">Cleanup</option>
          <option value="Plantation">Plantation</option>
          <option value="Donation">Donation</option>
        </select>

        <input
          type="text"
          placeholder="Thumbnail Image URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />


        <DatePicker
          selected={eventDate}
          onChange={(date) => setEventDate(date)}
          minDate={new Date()} 
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Select Event Date"
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="email"
          placeholder="Created By (Email)"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}
