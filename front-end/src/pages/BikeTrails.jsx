import animation_logo from "../assets/images/ByCycle logo ridotto.png";
import TrailsMap from "../components/TrailsMap";

function BikeTrails() {
  return (
    <>
      <div className="flex flex-col justify-center max-w-[1400px] mx-auto pt-16 px-5 md:px-10 lg:px-16">
        <h1 className="text-center  text-neutral-800 my-7 font-medium leading-[55px]">
          Green, nature, freedom: the most beautiful <br /> cycle routes in
          Italy
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
              Are you a cycle touring enthusiast? Do you love immersing yourself
              in nature and discovering new landscapes on two wheels? Then
              you're in the right place! ByCycle is a paradise for cycling
              lovers, with a network of cycle routes that wind through
              picturesque villages, nature reserves and breathtaking views.
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
      </div>
      <TrailsMap />
    </>
  );
}

export default BikeTrails;
