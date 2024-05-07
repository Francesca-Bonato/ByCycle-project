import React from "react";
import { Button, Text, Img } from "./..";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex self-stretch justify-center items-center py-4 border-gray-200_26 border-b border-solid`}
    >
      <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
        <div className="mb-[7px] flex w-[49%] items-center justify-between gap-5 self-end md:w-full sm:flex-col">
          <Img src="images/img_header_logo.png" alt="header logo" className="h-[29px] w-[129px] object-contain" />
          <ul className="flex flex-wrap items-center gap-6">
            <li>
              <a href="#">
                <Text as="p" className="!text-white-A700">
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="!text-white-A700">
                  Bikes
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="!text-white-A700">
                  Accesories
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="!text-white-A700">
                  Community
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="!text-white-A700">
                  Blog
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="!text-white-A700">
                  Contact
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <Button color="white_A700" variant="outline" shape="round" className="min-w-[188px] font-semibold sm:px-5">
          Book a Test Ride
        </Button>
      </div>
    </header>
  );
}
