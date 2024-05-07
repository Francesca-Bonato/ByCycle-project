import React from "react";
import { Text, Img } from "./..";

export default function HomepageDesktopCard({
  performancetext = "Unmatched Performance",
  ridingexperiencetext = "Built for beginners to professionals, every Morgans bike delivers uncompromising performance with a top-notch groupset, providing a superior riding experience",
  readmoretext = "Read More",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col rounded-lg`}>
      <div className="flex flex-col gap-[178px] self-stretch rounded-lg border border-solid border-blue_gray-100 p-6 md:gap-[133px] sm:gap-[89px] sm:p-5">
        <Img src="images/img_mobile.svg" alt="mobileimage" className="h-[56px] w-[56px]" />
        <div className="flex flex-col items-start gap-[25px]">
          <div className="flex flex-col items-start gap-3.5 self-stretch">
            <Text size="lg" as="p" className="tracking-[-0.60px]">
              {performancetext}
            </Text>
            <Text as="p" className="w-full leading-[150%] !text-gray-600">
              {ridingexperiencetext}
            </Text>
          </div>
          <a href="#">
            <Text as="p" className="!font-medium underline">
              {readmoretext}
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
}
