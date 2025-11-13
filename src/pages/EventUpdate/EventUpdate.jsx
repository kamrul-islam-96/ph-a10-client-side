import React, { useState, useEffect, use } from "react";
import { useParams, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const EventUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const { user } = use(AuthContext);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (!user) {
          console.log("User not logged in");
          return;
        }

        const token = await user.getIdToken();

        const res = await fetch(
          `https://ph-a10-eventhub.vercel.app/events/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch event");

        const data = await res.json();
        setFormData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvent();
  }, [id, user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await user.getIdToken();
    const res = await fetch(`https://ph-a10-eventhub.vercel.app/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.modifiedCount > 0) {
      toast.success("Event updated successfully!");
      navigate("/manage-event");
    } else {
      toast.error("Update failed!");
    }
  };

  if (!formData)
    return (
      <div>
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );

  return (
    <div className="w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Event</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          placeholder="Event Type"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          placeholder="Thumbnail URL"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate?.split("T")[0] || ""}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EventUpdate;
