import { useParams } from "react-router-dom";
import { eventsData } from "../data";

function EventDetails() {
  // Get the "id" parameter from the URL using useParams
  const { id } = useParams();
  // Find the event in the event data that matches the provided id
  const event = eventsData.find((event) => event.id === parseInt(id));

  // If the event is not found, display an error message
  if (!event) {
    return <p>Event not found</p>;
  }

  // Render event details if the event is found
  return (
    <div className="flex flex-col justify-center max-w-[1260px] mx-auto pt-16 px-5 md:px-10 lg:px-16">
      {/* Event title */}
      <h1 className="text-center text-neutral-800 font-medium leading-[55px]">
        {event.title}
      </h1>
      {/* Event image */}
      <img src={event.img} alt={event.title} className="h-[300px] rounded-[16px] object-cover w-full lg:h-[560px]" />
      {/* Event description and other information */}
      <div className="text-zinc-500 text-justify md:font-semibold pt-8">
        <p>{event.description}</p>
        <p><strong>Location:</strong> {event.eventLocation}</p>
        <p><strong>Start Date:</strong> {event.startDate}</p>
        <p><strong>End Date:</strong> {event.endDate}</p>
        <p><strong>Level:</strong> {event.level}</p>
        <p><strong>Trip:</strong> {event.trip ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default EventDetails;
