import { Footer_CTA } from "./Footer_CTA";
import { Heading } from "./Heading";
import { Img } from "./Img/Img";
import { Footer_SocialBTN } from "./Footer_SocialBTN";
import { Link } from "react-router-dom";

let year = new Date().getFullYear();

export function Footer({ ...props }) {
  //return to top page
  function handleClick() {
    window.scrollTo({ top: 0 });
  }

  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col items-center w-full box-border`}
    >
      <Footer_CTA />

      <div className=" break-word px-5 md:px-10 lg:px-16 py-10 flex flex-col items-start justify-between gap-16 lg:flex-row lg:gap-[20%]">
        <div className="w-[100%] flex flex-col items-start text-justify gap-[10px] md:self-stretch md:w-[100%]">
          <Img
            src="assets/images/img_footer_logo.png"
            alt="footer logo"
            className="h-[45px] w-[169px] object-contain"
          />
          <p className="w-full leading-[150%] md:w-full">
            We value greatly that our community can have a place to share their
            common passion and provide more information on cycling routes that
            bring more excitement and safety during the journey. Our team
            regularly commits to sharing updates regarding the world of bike
            lovers. Our common goal is to ensure that our community finds a
            place to share passions, information, experiences and, why not, even
            enjoy a bike ride together.
          </p>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-5 sm: w-[100%] flex-col lg:flex-row">
          <div className="flex flex-col gap-2">
            <Heading as="h6" className="!font-bold">
              Company
            </Heading>
            <ul className="flex flex-col gap-[9px]">
              <li className="hover:underline">
                <a href="Bike" target="_blank" rel="noreferrer">
                  <p>Bike</p>
                </a>
              </li>
              <li className="hover:underline">
                <a href="Accessories" target="_blank" rel="noreferrer">
                  <p>Accessories</p>
                </a>
              </li>
              <li className="hover:underline">
                <Link to="/community" className="w-full">
                  <p>Community</p>
                </Link>
              </li>
              <li className="hover:underline">
                <Link to="/contacts" onClick={handleClick}>
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <Heading as="h6" className="!font-bold">
              Resource
            </Heading>
            <ul className="flex flex-col gap-[9px]">
              <li className="hover:underline">
                <Link to="/news" className="w-full">
                  <p>News</p>
                </Link>
              </li>
              {/* <li className="hover:underline">
                  <a href="Newsletter" target="_blank" rel="noreferrer">
                    <p as="p">Newsletter</p>
                  </a>
                </li> */}
              <li className="hover:underline">
                <a href="Careers" target="_blank" rel="noreferrer">
                  <p>Careers</p>
                </a>
              </li>
              <li className="hover:underline">
                <a href="FAQS" target="_blank" rel="noreferrer">
                  <p>FAQS</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2">
            <Heading as="h6" className="!font-bold">
              Legal
            </Heading>
            <ul className="flex flex-col items-start gap-[9px]">
              <li className="hover:underline">
                <Link to="/privacy" onClick={handleClick}>
                  <p>Privacy Policy</p>
                </Link>
              </li>
              <li className="hover:underline">
                <Link to="/terms" onClick={handleClick}>
                  <p>Terms of Use</p>
                </Link>
              </li>
              <li className="hover:underline">
                <Link to="/cookies" onClick={handleClick}>
                  <p>Cookies</p>
                </Link>
              </li>
              {/* <li className="hover:underline">
                  <a href="Sitemap" target="_blank" rel="noreferrer">
                    <p as="p">Sitemap</p>
                  </a>
                </li> */}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2">
            <Heading as="h6" className="!font-bold">
              Contacts
            </Heading>
            <ul className="flex flex-col items-start gap-[9px]">
              <li>
                <p>Via Thailandia 6, Milano 20121 MI </p>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="mailto:bycyclewebapp@email.it"
                >
                  bycyclewebapp@email.it
                </a>
              </li>
              <li>
                <p>+39 333 4445555</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-full h-px bg-gray-200 border-0" />
      <div className="container-xs flex items-center justify-between gap-5 p-5">
        <p size="md">Social Media</p>
        <div className="flex gap-2.5">
          <Footer_SocialBTN
            shape="circle"
            className="w-[32px] !rounded-[16px] bg-zinc-700 hover:bg-blue-700"
          >
            <Img src="assets/images/img_facebook.svg" />
          </Footer_SocialBTN>
          <Footer_SocialBTN
            shape="circle"
            className="w-[32px] !rounded-[16px] bg-zinc-700 hover:bg-black"
          >
            <Img src="assets/images/img_x.svg" />
          </Footer_SocialBTN>
          <Footer_SocialBTN
            shape="circle"
            className="w-[32px] !rounded-[16px] bg-zinc-700 hover:bg-fuchsia-600"
          >
            <Img src="assets/images/img_instagram.svg" />
          </Footer_SocialBTN>
          <Footer_SocialBTN
            shape="circle"
            className="w-[32px] !rounded-[16px] bg-zinc-700 hover:bg-blue-600"
          >
            <Img src="assets/images/img_linkedin.svg" />
          </Footer_SocialBTN>
          <Footer_SocialBTN
            shape="circle"
            className="w-[32px] !rounded-[16px] bg-zinc-700 hover:bg-red-700 "
          >
            <Img src="assets/images/img_yt.svg" />
          </Footer_SocialBTN>
        </div>
      </div>
      <hr className="w-full h-px bg-gray-200 border-0" />
      <div className="container-xs md:px-10 lg:px-16 flex items-center w-full sm:gap-[27px]">
        <div className="flex items-start p-5 md:flex-col">
          <p size="xs">{`© ${year} ByCycle All right reserved.`}</p>
        </div>
      </div>
    </footer>
  );
}
