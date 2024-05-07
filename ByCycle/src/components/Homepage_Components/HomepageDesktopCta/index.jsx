import React from "react";
import { Img, Heading, Text } from "./..";

export default function HomepageDesktopCta({
  drivingexperiencetext = "Get unlimited driving experience with the latest innovations",
  freedomtext = "Experience true freedom with the latest design and technology in every detail of our Morgans road bikes",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center h-[670px] md:h-auto mt-40 pt-[195px] pb-[194px] md:py-5 bg-[url(/public/images/img_cta.png)] bg-cover bg-no-repeat`}
    >
      <div className="container-xs flex justify-end pl-14 pr-[122px] md:p-5 md:px-5">
        <div className="flex w-[43%] flex-col gap-8 md:w-full">
          <div className="flex flex-col gap-6">
            <Text size="2xl" as="p" className="leading-[125%] tracking-[-1.32px] !text-white-A700">
              {drivingexperiencetext}
            </Text>
            <Heading as="h6" className="leading-[150%] !text-white-A700">
              {freedomtext}
            </Heading>
          </div>
          <Img src="images/img_union.svg" alt="featureimage" className="h-[11px] w-[82%]" />
        </div>
      </div>
    </div>
  );
}
