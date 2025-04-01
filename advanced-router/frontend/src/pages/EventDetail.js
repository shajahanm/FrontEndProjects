import React from "react";
import { useParams } from "react-router-dom";

function EventDetail() {
  const { eventId } = useParams();
  return <div>{eventId}</div>;
}

export default EventDetail;
