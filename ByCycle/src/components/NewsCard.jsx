import { Link } from "react-router-dom";

function NewsCard({ title, img, id }) {
  return (
    <div className="flex w-full flex-col gap-6 items-center justify-center">
      <div className="w-full rounded-[12px] overflow-hidden">
        <Link to={`/events/${id}`} className="w-full">
          <img
            src={img}
            alt="card image"
            className="w-full object-top rounded-[12px] object-cover h-auto cursor-pointer transition duration-300 ease-in-out hover:scale-110 sm:h-[350px] md:h-[220.06px] lg:h-auto"
          />
        </Link>
      </div>
      <div className="flex w-full flex-col justify-between items-start gap-[25px] md:h-[205px]">
        <p
          size="xl"
          className="text-3xl font-bold w-full leading-[130%] tracking-[-0.48px]"
        >
          {title}
        </p>
        <Link to={`/events/${id}`} className="w-full">
          <p className="!font-medium transition-all hover:text-[#26425a] underline">
            Read More
          </p>
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
