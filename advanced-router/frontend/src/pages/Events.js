import React from "react";
import { Link } from "react-router-dom";

const dummyEventList = Array.from({ length: 6 }, (_, index) => ({
  id: Math.floor(Math.random() * 1000), // Random ID (0-999)
  name: `Event ${index + 1}`,
}));
function Events() {
  return (
    <div>
      <ul>
        {dummyEventList.map((event) => (
          <li key={event.id}>
            <Link to={`${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
