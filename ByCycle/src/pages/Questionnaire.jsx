import { Link } from "react-router-dom";

const cardsQuiz = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 48 48">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m35.745 12.17l-4.925 1.48l3.28 8.578a8 8 0 1 1-1.868.715l-1.648-4.31l-5.682 11.802A1 1 0 0 1 24 31h-4.062A8.001 8.001 0 0 1 4 30a8 8 0 0 1 15.938-1h2.5l-4.88-13.664A1 1 0 0 1 17.5 15H16a1 1 0 1 1 0-2h4.5a1 1 0 1 1 0 2h-.938l1.842 5.157l8.127-4.277l-.965-2.523a1 1 0 0 1 .647-1.315l5.957-1.787zm-13.662 9.89l1.972 5.52l4.23-8.784zm12.983 8.297l-2.113-5.527a6 6 0 1 0 1.868-.715l2.113 5.528a1 1 0 0 1-1.868.714M17.917 29H12a1 1 0 1 0 0 2h5.917A6.002 6.002 0 0 1 6 30a6 6 0 0 1 11.917-1"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    title: "Bicycle Inventors and History",
    description:
      "Test your knowledge about the inventors and key historical milestones of the bicycle.",
    link: "/quiz1",
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 48 48">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m35.745 12.17l-4.925 1.48l3.28 8.578a8 8 0 1 1-1.868.715l-1.648-4.31l-5.682 11.802A1 1 0 0 1 24 31h-4.062A8.001 8.001 0 0 1 4 30a8 8 0 0 1 15.938-1h2.5l-4.88-13.664A1 1 0 0 1 17.5 15H16a1 1 0 1 1 0-2h4.5a1 1 0 1 1 0 2h-.938l1.842 5.157l8.127-4.277l-.965-2.523a1 1 0 0 1 .647-1.315l5.957-1.787zm-13.662 9.89l1.972 5.52l4.23-8.784zm12.983 8.297l-2.113-5.527a6 6 0 1 0 1.868-.715l2.113 5.528a1 1 0 0 1-1.868.714M17.917 29H12a1 1 0 1 0 0 2h5.917A6.002 6.002 0 0 1 6 30a6 6 0 0 1 11.917-1"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    title: "Bicycle Maintenance Essentials",
    description:
      " Learn how to properly maintain your bicycle with questions on tire pressure, lubrication, and more.",
    link: "/quiz2",
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 48 48">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m35.745 12.17l-4.925 1.48l3.28 8.578a8 8 0 1 1-1.868.715l-1.648-4.31l-5.682 11.802A1 1 0 0 1 24 31h-4.062A8.001 8.001 0 0 1 4 30a8 8 0 0 1 15.938-1h2.5l-4.88-13.664A1 1 0 0 1 17.5 15H16a1 1 0 1 1 0-2h4.5a1 1 0 1 1 0 2h-.938l1.842 5.157l8.127-4.277l-.965-2.523a1 1 0 0 1 .647-1.315l5.957-1.787zm-13.662 9.89l1.972 5.52l4.23-8.784zm12.983 8.297l-2.113-5.527a6 6 0 1 0 1.868-.715l2.113 5.528a1 1 0 0 1-1.868.714M17.917 29H12a1 1 0 1 0 0 2h5.917A6.002 6.002 0 0 1 6 30a6 6 0 0 1 11.917-1"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    title: "Bicycle Riding Tips",
    description:
      "Discover the best practices for efficient and safe cycling, from saddle position to chain care.",
    link: "/quiz1",
  },
];

function Questionnaire() {
  return (
    <>
      <div className="p-6 h-[100vh] flex justify-center items-center gap-6 flex-wrap">
        {cardsQuiz.map((card) => {
          return (
            <div
              key={card.id}
              className="w-[400px] min-h-[500px]  bg-white rounded-lg text-black p-4 flex flex-col items-start justify-between gap-3 hover:bg-black hover:text-white hover:bg-gradient-to-t from-black to-transparent hover:shadow-lg transition-all duration-500 relative border-[2px] black"
            >
              <span className="absolute top-4 left-4 text-3xl">
                {card.icon}
              </span>
              <div className="relative top-[300px]">
                <p className="font-bold">{card.title}</p>
                <p className="">{card.description}</p>
              </div>
              <Link
                to={card.link}
                className="underline font-bold hover:no-underline"
              >
                Test Yourself!
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Questionnaire;
