import React from "react";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Img } from "./Img/Img";

let year = new Date().getFullYear();

export function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col items-center w-full pt-14 pb-[22px] gap-[55px] md:pt-5 sm:gap-[27px] sm:py-5 bg-white-A700`}
    >
      <div className="container-xs flex flex-col gap-14 md:p-5 sm:gap-7 p-10 ">
        <div className="flex items-start md:flex-col ">
          <div className="flex flex-1 flex-col items-start gap-[11px] md:self-stretch">
            <Img
              src="images/img_footer_logo.png"
              alt="footer logo"
              className="h-[29px] w-[129px] object-contain"
            />
            <p as="p" className="w-[69%] leading-[150%] md:w-full">
              "We value greatly that our community can have a place to share
              their common passion and provide more information on cycling
              routes that bring more excitement and safety during the journey.
              Our team regularly commits to sharing updates regarding the world
              of bike lovers. Our common goal is to ensure that our community
              finds a place to share passions, information, experiences, and,
              why not, even enjoy a bike ride together."
            </p>
          </div>
          <div className="flex w-[49%] items-start justify-between gap-5 md:w-full sm:flex-col p-5">
            <div className="flex flex-col gap-2">
              <Heading as="h6" className="!font-bold">
                Company
              </Heading>
              <ul className="flex flex-col gap-[9px]">
                <li className="hover:text-emerald-500">
                  <a href="Bike" target="_blank" rel="noreferrer">
                    <p as="p">Bike</p>
                  </a>
                </li>
                <li className="hover:text-emerald-500">
                  <a href="Accessories" target="_blank" rel="noreferrer">
                    <p as="p">Accessories</p>
                  </a>
                </li>
                <li className="hover:text-emerald-500">
                  <a href="Community" target="_blank" rel="noreferrer">
                    <p as="p">Community</p>
                  </a>
                </li>
                <li className="hover:text-emerald-500">
                  <a href="Contact" target="_blank" rel="noreferrer">
                    <p as="p">Contact</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <Heading as="h6" className="!font-bold">
                Resource
              </Heading>
              <ul className="flex flex-col gap-[9px]">
                <li className="hover:text-emerald-500">
                  <a href="News" target="_blank" rel="noreferrer">
                    <p as="p">News</p>
                  </a>
                </li>
                <li className="hover:text-emerald-500">
                  <a href="Newsletter" target="_blank" rel="noreferrer">
                    <p as="p">Newsletter</p>
                  </a>
                </li>
                <li className="hover:text-emerald-500">
                  <a href="Careers" target="_blank" rel="noreferrer">
                    <p as="p">Careers</p>
                  </a>
                </li>
                <li className="hover:text-emerald-500">
                  <a href="FAQS" target="_blank" rel="noreferrer">
                    <p as="p">FAQS</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-2">
              <Heading as="h6" className="!font-bold">
                Legal
              </Heading>
              <ul className="flex flex-col items-start gap-[9px]">
                <li className="hover:text-emerald-500">
                  <a href="#">
                    <p as="p">Privacy Policy</p>
                  </a>
                </li>
                <li className="hover:text-emerald-500">
                  <a href="#">
                    <p as="p">Terms of Use</p>
                  </a>
                </li>
                <li className="hover:text-emerald-500">
                  <a href="Cookies" target="_blank" rel="noreferrer">
                    <p as="p">Cookies</p>
                  </a>
                </li>
                <li className="hover:text-emerald-500">
                  <a href="Sitemap" target="_blank" rel="noreferrer">
                    <p as="p">Sitemap</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-2">
              <Heading as="h6" className="!font-bold">
                Contact Us
              </Heading>
              <ul className="flex flex-col items-start gap-[9px]">
                <li>
                  <p as="p">Via Thailandia 6, Roma 00100 RM </p>
                </li>
                <li>
                  <p as="p">bycyclewebapp@email.it</p>
                </li>
                <li>
                  <p as="p">+39 333 4445555</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-200" />
      </div>

      <div className="container-xs flex items-center justify-between gap-5 md:p-5">
        <p size="md" as="p">
          Social Media
        </p>
        <div className="flex gap-2.5">
          <Button
            shape="circle"
            className="w-[32px] !rounded-[16px] hover:bg-blue-700"
          >
            <Img src="images/img_facebook.svg" />
          </Button>
          <Button
            shape="circle"
            className="w-[32px] !rounded-[16px] hover:bg-cyan-400"
          >
            <Img src="images/img_twitter.svg" />
          </Button>
          <Button
            shape="circle"
            className="w-[32px] !rounded-[16px] hover:bg-fuchsia-600"
          >
            <Img src="images/img_instagram.svg" />
          </Button>
          <Button
            shape="circle"
            className="w-[32px] !rounded-[16px] hover:bg-blue-600"
          >
            <Img src="images/img_link.svg" />
          </Button>
          <Button
            shape="circle"
            className="w-[32px] !rounded-[16px] hover:bg-red-700 "
          >
            <Img src="images/img_warning.svg" />
          </Button>
        </div>
      </div>

      <div className="container-xs flex flex-col w-full gap-[55px] md:p-5 sm:gap-[27px]">
        <div className="h-px bg-gray-200 " />
        <div className="flex items-start md:flex-col pl-5">
          <p size="xs" as="p">
            {`© ${year} ByCycle All right reserved.`}
          </p>
          {/*  <Img
            src="images/img_television.svg"
            alt="television image"
            className="ml-[784px] h-[16px] w-[16%] md:ml-0 md:w-full"
          />
          <p size="xs" as="p" className="ml-2 !text-gray-500_02 md:ml-0">
            Base on 10.348 review
          </p> */}
        </div>
      </div>
    </footer>
  );
}
