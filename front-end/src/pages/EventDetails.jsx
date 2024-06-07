import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";

function EventDetails() {
  // Get the "id" parameter from the URL using useParams
  const { id } = useParams();

  // State to hold the article data, loading and error states
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Effect hook to fetch the article data
  useEffect(() => {
    fetchEvent(id);
  }, [id]);

  // Function to fetch the article by ID
  const fetchEvent = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:4000/events/${id}`); // Fetch article from a specific endpoint with a dynamic id parameter
      setEvent(response.data[0]);
    } catch (error) {
      console.error(error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

const formattedStartDate = new Date(event.startDate).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const formattedEndDate = new Date(event.endDate).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

  // Render event details if the event is found
  return (
    <>
      {loading ? (
        <p>Loading event details...</p>
      ) : error ? (
        <p>Error fetching event details: {error.message}</p>
      ) : event && (
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
                  <li className="font-bold">Start Date: {formattedStartDate}</li>
                  <li className="font-bold">End Date: {formattedEndDate}</li>
                  <li className="font-bold">Level: {event.level}</li>
                </ul>
              </div>
            </div>
            <Link to="/events">
              <Button innerText="←  Back to all events " className="mt-6"/>
            </Link>
          </section>
        </>
      )}
    </>
  );
}

export default EventDetails;
