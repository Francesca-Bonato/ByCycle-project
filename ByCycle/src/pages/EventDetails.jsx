import { Link, useParams } from "react-router-dom";
import { eventsData } from "../data";
import Button from "../components/Button";

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
    <>
      {/* Main container with responsive padding */}
      <section className="container-xs flex items-center justify-center flex-col max-w-[1260px] mx-auto py-16 px-5 md:px-10 lg:px-16 2xl:text-lg">
        {/* Event title */}
        <h3 className="text-center text-neutral-800 font-medium leading-[55px] mb-3">
          {event.title}
        </h3>
        {/* Flexible container for image and text*/}
        <div className="flex flex-col-reverse items-center justify-center gap-10 flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between">
          {/* Event image */}
          <div className="w-full lg:w-auto">
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-[300px] object-top rounded-[16px] object-cover sm:object-center lg:h-100 lg:h-[560px]"
            />
          </div>
          <div className="flex flex-col items-center my-[10px] justify-center gap-5 break-words w-full lg:w-[42%]">
            {/* Event description and other information */}
            <ul className="text-zinc-500 text-justify md:font-semibold py-8">
              <li className="pb-8">{event.description}</li>
              <li className="font-bold">Location: {event.eventLocation}</li>
              <li className="font-bold">Start Date: {event.startDate}</li>
              <li className="font-bold">End Date: {event.endDate}</li>
              <li className="font-bold">Level: {event.level}</li>
            </ul>
          </div>
        </div>
        <Link to="/events">
          <Button innerText="←  Back to all events "/>
        </Link>
      </section>
    </>
  );
}

export default EventDetails;
