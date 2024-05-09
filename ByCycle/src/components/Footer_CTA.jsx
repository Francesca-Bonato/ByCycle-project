import React from "react";
import { Heading } from "./Heading";

export function Footer_CTA({
  getunlimited = "Get unlimited driving experience with the latest innovations",
  bikedescription = "Experience true freedom with the latest design and technology in every detail of our Morgans road bikes",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center h-[400px] w-full md:h-auto pt-[195px] pb-[194px] md:py-5 bg-[url(/public/assets/images/img_cta.png)] bg-cover bg-no-repeat text-slate-50`}
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
          <div className="flex flex-wrap justify-normal items-center gap-[30px] text-slate-50">
            <input className="" placeholder="Email address"></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
