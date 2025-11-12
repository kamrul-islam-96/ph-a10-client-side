import React, { useState, useEffect, use } from "react";
import JoinedEventsCard from "../../components/JoinedEventsCard";
import { AuthContext } from "../../context/AuthContext";

export default function JoinedEvents() {
  const { user } = use(AuthContext);
  const [joinedEventsData, setJoinedEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJoinedEvents = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const token = await user.getIdToken();

        const response = await fetch(
          `http://localhost:3000/joined-events?userEmail=${user.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch joined events");
        }

        const data = await response.json();
        setJoinedEventsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJoinedEvents();
  }, [user]);

  if (loading)
    return (
      <div>
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto">
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
