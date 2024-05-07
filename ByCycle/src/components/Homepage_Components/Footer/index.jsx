import React from "react";
import { Text, RatingBar, Button, Img, Heading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col items-center pt-14 pb-[22px] gap-14 md:pt-5 sm:gap-7 sm:py-5 bg-white-A700`}
    >
      <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
        <div className="flex w-[30%] flex-col gap-[11px] md:w-full">
          <Img src="images/img_footer_logo.png" alt="footer logo" className="h-[29px] w-[129px] object-contain" />
          <Text as="p" className="leading-[150%]">
            Explore the incredible craftsmanship of Morgans road bikes, thoughtfully designed and equipped for the
            discerning rider looking for the perfect blend of speed, style and innovation
          </Text>
        </div>
        <div className="flex w-[39%] items-start justify-between gap-5 md:w-full sm:flex-col">
          <div className="flex flex-col gap-2">
            <Heading as="h6" className="!font-bold">
              Company
            </Heading>
            <ul className="flex flex-col gap-[9px]">
              <li>
                <a href="Bike" target="_blank" rel="noreferrer">
                  <Text as="p">Bike</Text>
                </a>
              </li>
              <li>
                <a href="Accessories" target="_blank" rel="noreferrer">
                  <Text as="p">Accessories</Text>
                </a>
              </li>
              <li>
                <a href="Community" target="_blank" rel="noreferrer">
                  <Text as="p">Community</Text>
                </a>
              </li>
              <li>
                <a href="Contact" target="_blank" rel="noreferrer">
                  <Text as="p">Contact</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <Heading as="h6" className="!font-bold">
              Services
            </Heading>
            <ul className="flex flex-col gap-[9px]">
              <li>
                <a href="Bussines" target="_blank" rel="noreferrer">
                  <Text as="p">Bussines</Text>
                </a>
              </li>
              <li>
                <a href="Modifications" target="_blank" rel="noreferrer">
                  <Text as="p">Modifications</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Morgans Care</Text>
                </a>
              </li>
              <li>
                <a href="Insurance" target="_blank" rel="noreferrer">
                  <Text as="p">Insurance</Text>
                </a>
              </li>
              <li>
                <a href="Warranty" target="_blank" rel="noreferrer">
                  <Text as="p">Warranty</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <Heading as="h6" className="!font-bold">
              Resource
            </Heading>
            <ul className="flex flex-col gap-[9px]">
              <li>
                <a href="News" target="_blank" rel="noreferrer">
                  <Text as="p">News</Text>
                </a>
              </li>
              <li>
                <a href="Newsletter" target="_blank" rel="noreferrer">
                  <Text as="p">Newsletter</Text>
                </a>
              </li>
              <li>
                <a href="Careers" target="_blank" rel="noreferrer">
                  <Text as="p">Careers</Text>
                </a>
              </li>
              <li>
                <a href="FAQS" target="_blank" rel="noreferrer">
                  <Text as="p">FAQS</Text>
                </a>
              </li>
              <li>
                <a href="Review" target="_blank" rel="noreferrer">
                  <Text as="p">Review</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2">
            <Heading as="h6" className="!font-bold">
              Legal
            </Heading>
            <ul className="flex flex-col items-start gap-[9px]">
              <li>
                <a href="#">
                  <Text as="p">Privacy Policy</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Tems of Used</Text>
                </a>
              </li>
              <li>
                <a href="Cookies" target="_blank" rel="noreferrer">
                  <Text as="p">Cookies</Text>
                </a>
              </li>
              <li>
                <a href="Sitemap" target="_blank" rel="noreferrer">
                  <Text as="p">Sitemap</Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-xs flex flex-col gap-[55px] md:p-5 sm:gap-[27px]">
        <div className="h-px bg-gray-200_01" />
        <div className="flex items-center justify-between gap-5">
          <Text size="md" as="p">
            Social Media
          </Text>
          <div className="flex gap-2.5">
            <Button size="xs" shape="circle" className="w-[32px] !rounded-[16px]">
              <Img src="images/img_facebook.svg" />
            </Button>
            <Button size="xs" shape="circle" className="w-[32px] !rounded-[16px]">
              <Img src="images/img_twitter.svg" />
            </Button>
            <Button size="xs" shape="circle" className="w-[32px] !rounded-[16px]">
              <Img src="images/img_instagram.svg" />
            </Button>
            <Button size="xs" shape="circle" className="w-[32px] !rounded-[16px]">
              <Img src="images/img_link.svg" />
            </Button>
            <Button size="xs" shape="circle" className="w-[32px] !rounded-[16px]">
              <Img src="images/img_warning.svg" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[55px] sm:gap-[27px]">
          <div className="h-px bg-gray-200_01" />
          <div className="flex items-start justify-center md:flex-col">
            <Text size="xs" as="p">
              ©2024 Morgan Bike-Sport Inc. All right reserved.
            </Text>
            <RatingBar
              value={5}
              isEditable={true}
              color="#0c0c0c"
              activeColor="#0c0c0c"
              size={16}
              className="ml-[784px] flex justify-between md:ml-0"
            />
            <Text size="xs" as="p" className="ml-2 !text-gray-500_01 md:ml-0">
              Base on 10.348 review
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
