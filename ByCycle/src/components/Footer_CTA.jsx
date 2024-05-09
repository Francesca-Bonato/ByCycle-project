import React from "react";
import { Heading } from "./Heading";
import { useNavigate } from "react-router-dom";

export function Footer_CTA({
  getunlimited = "Are you undecided about the right bicycle for your journey? ",
  bikedescription = "Fill out our quiz to discover which of our choices is best suited for you!",
  ...props
}) {
  const navigate = useNavigate();

  function handleQuizClick() {
    navigate("/questionnaire");
  }

  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center text-center h-[400px] w-full md:h-auto pt-[195px] pb-[194px] md:py-5 bg-[url(/public/assets/images/img_cta.png)] bg-cover bg-no-repeat text-slate-50`}
    >
      <div className="pr-[120px] max-w-[1328px] mx-auto flex w-full justify-end pl-14 md:p-5 md:px-5 ">
        <div className="w-[43%] flex flex-col gap-8 md:w-full">
          <div className="flex flex-col gap-6">
            <p as="p" className="leading-[125%] ">
              {getunlimited}
            </p>
            <Heading as="h6" className="leading-[150%] text-slate-50">
              {bikedescription}
            </Heading>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-[30px] text-slate-50">
            {/* <input className="rounded-full" placeholder="Email address"></input> */}
            <button
              className="bg-[#383838] rounded-full w-[50%] h-[45px] hover:bg-[#181818]"
              onClick={handleQuizClick}
            >
              Start our Quiz!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
