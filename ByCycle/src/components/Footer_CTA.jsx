import React, { useState } from "react";
import { Heading } from "./Heading";

export function Footer_CTA({
  getunlimited = "Do you want to stay updated on the latest community news?",
  bikedescription = "Subscribe to our newsletter and enjoy the ride!",
  ...props
}) {
  const [email, setEmail] = useState("");

  async function handleNewsletterSubmit(e) {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  }

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

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
          <form
            className="flex flex-wrap justify-center items-center gap-[10px] text-slate-50"
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={handleChange}
              required
              className="footer-form rounded-full w-[70%] text-black"
              placeholder="Email address"
            ></input>
            <button type='submit' className="bg-[#383838] rounded-full w-[25%] h-[45px] hover:bg-[#181818]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
