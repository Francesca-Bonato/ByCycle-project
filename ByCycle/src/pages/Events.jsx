function Events() {
  return (
    <div className="flex flex-col justify-center pt-16 px-5 md:px-10 lg:px-16">
      {/* Main title */}
      <div className=" text-center text-neutral-800 text-[44px] font-medium leading-[55px]">
        Join events with our community
      </div>
      {/* Navigation bar for filtering events */}
      <div className="py-8 flex justify-center items-center gap-2">
        {/* Each button represents a different category of events */}
        <div className="px-8 py-2 rounded-[40px] border border-neutral-400 justify-center items-center gap-2 flex">
          <div className="text-center text-neutral-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
            All
          </div>
        </div>
        <div className="px-8 py-2 rounded-[40px] border border-neutral-400 justify-center items-center gap-2 flex">
          <div className="text-center text-neutral-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
            Upcomming
          </div>
        </div>
        <div className="px-8 py-2 rounded-[40px] border border-neutral-400 justify-center items-center gap-2 flex">
          <div className="text-center text-neutral-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
            Meet and Greet
          </div>
        </div>
        <div className="px-8 py-2 rounded-[40px] border border-neutral-400 justify-center items-center gap-2 flex">
          <div className="text-center text-neutral-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
            Event
          </div>
        </div>
        <div className="px-8 py-2 rounded-[40px] border border-neutral-400 justify-center items-center gap-2 flex">
          <div className="text-center text-neutral-950 text-sm font-semibold font-['Manrope'] leading-[21px]">
            Trip
          </div>
        </div>
      </div>

      {/* Event highlight section with image and description */}
      <div className=" h-[600px] px-14 justify-center items-center gap-[76px] inline-flex">
        <img
          className="w-[650px] h-[600px] rounded-2xl"
          src="https://via.placeholder.com/650x600"
        />
        <div className="w-[602px] self-stretch flex-col justify-start items-start gap-16 inline-flex">
          <div className="self-stretch h-[317px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch text-neutral-800 text-[44px] font-medium font-['Inter Tight'] leading-[55px]">
              Join events with our community
            </div>
            <div className="w-[570px] text-zinc-500 text-base font-semibold font-['Manrope'] leading-normal">
              Our mission is to break down barriers and make cycling accessible
              to everyone, regardless of age, background or experience level.
              Through initiatives that prioritize affordability and
              availability, Bycycle aims to empower individuals to embrace the
              multiple benefits of cycling
            </div>
          </div>
          <div className="px-8 py-3 bg-neutral-950 rounded-[40px] justify-center items-center gap-2 inline-flex">
            <div className="text-white text-base font-semibold font-['Manrope'] leading-normal">
              Join other bikers
            </div>
          </div>
        </div>
      </div>
      {/* Section for listing multiple events */}
      <div className="h-[852px] pl-14 pr-[55px] flex-col justify-center items-center gap-[72px] inline-flex">
        <div className="self-stretch flex-col justify-center items-center gap-8 inline-flex"></div>
        <div className="self-stretch flex-col justify-start items-center gap-16 inline-flex">
          <div className="justify-center items-center gap-6 inline-flex">
            {/* Individual event cards */}
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-[427px] h-[410px] rounded-xl justify-center items-center inline-flex">
                <img
                  className="w-[427px] h-[410px] rounded-lg"
                  src="https://via.placeholder.com/427x410"
                />
              </div>
              <div className="h-[110px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-neutral-950 text-2xl font-medium font-['Inter'] leading-[31.20px]">
                  Morgan Bikes Demo Day: Test Drive the Newest Models!
                </div>
                <div className="self-stretch text-neutral-950 text-base font-medium font-['Manrope'] underline leading-normal">
                  Read More
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-[427px] h-[410px] rounded-xl justify-center items-center inline-flex">
                <img
                  className="w-[427px] h-[410px] rounded-lg"
                  src="https://via.placeholder.com/427x410"
                />
              </div>
              <div className="h-[110px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-neutral-950 text-2xl font-medium font-['Inter'] leading-[31.20px]">
                  RideFest 2024, Morgan Bikes' Celebration of Cycling Excellence
                </div>
                <div className="self-stretch text-neutral-950 text-base font-medium font-['Manrope'] underline leading-normal">
                  Read More
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-[427px] h-[410px] rounded-xl justify-center items-center inline-flex">
                <img
                  className="w-[427px] h-[410px] rounded-lg"
                  src="https://via.placeholder.com/427x410"
                />
              </div>
              <div className="h-[110px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-neutral-950 text-2xl font-medium font-['Inter'] leading-[31.20px]">
                  Bike Bash: Morgan Bikes' Ultimate Cycling Carnival 2024
                </div>
                <div className="self-stretch text-neutral-950 text-base font-medium font-['Manrope'] underline leading-normal">
                  Read More
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 py-3 bg-neutral-950 rounded-[40px] justify-center items-center gap-2 inline-flex">
            <div className="text-white text-base font-semibold font-['Manrope'] leading-normal">
              See All Event
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
