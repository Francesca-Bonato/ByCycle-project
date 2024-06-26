import animation_logo from "../assets/images/ByCycle logo ridotto.png";

function BikeTrails() {
  return (
    <>
      <h1 className="text-center  text-neutral-800 my-7 font-medium leading-[55px]">
        Green, nature, freedom: the most beautiful <br /> cycle routes in Italy
      </h1>
      <div className="flex items-center justify-center gap-5 mb-[30px] flex-wrap lg:flex-nowrap lg:justify-between  mx-12">
          {/* Text content section */}
          <div className="flex flex-col items-center justify-center gap-5 break-words w-full lg:w-[42%]">
            <h3 className="w-full text-center text-[30px] font-bold leading-[125%] break-words lg:text-left xl:text-[45px]">
            Pedal to adventure: discover by bike!
            </h3>
            <div className="flex lg:w-full ">
              <img
                src={animation_logo}
                alt="ByCycle logo"
                className="animate-spin"
                width={"80px"}
              />
            </div>
            <p className="leading-[150%] text-gray-600 break-words text-justify">
            Are you a cycle touring enthusiast? Do you love immersing yourself in nature and discovering new landscapes on two wheels? Then you're in the right place! ByCycle is a paradise for cycling lovers, with a network of cycle routes that wind through picturesque villages, nature reserves and breathtaking views.
            </p>
          </div>

          {/* Image section */}
          <div className="w-full lg:w-auto">
            <img
              src="https://images.unsplash.com/photo-1599978558611-35e62245080c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGJpY2l8ZW58MHx8MHx8fDA%3D"
              alt="image"
              className="h-[300px] rounded-[16px] object-cover w-full lg:h-[560px]"
            />
          </div>
        </div>
      {/* <!-- component --> */}
      <section className="text-gray-600 body-font relative mb-5">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6429019.961973948!2d7.877651878918112!3d38.1129815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spercorsi%20ciclabili!5e0!3m2!1sit!2sit!4v1716817299018!5m2!1sit!2sit"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Leave your feedback on the paths you have taken
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Send
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Select the path best suited to you, compare yourself with more
              than 1000 users who have chosen ByCycle
            </p>
          </div>
        </div>
      </section>

    </>
  );
}

export default BikeTrails;
