import React, { useState, useEffect } from "react";
import { Heading } from "./Heading";

export function Footer_CTA({ ...props }) {
  const [email, setEmail] = useState("");
  const [isAlreadySubscribed, setIsAlreadySubscribed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem(email);
    setIsAlreadySubscribed(!!storedEmail);
  }, [email]);

  function handleNewsletterSubmit(e) {
    e.preventDefault();
    const storedEmail = localStorage.getItem(email);

    if (storedEmail) {
      setIsAlreadySubscribed(true);
    } else {
      localStorage.setItem(email, "subscribed");
      setSubscribed(true);
      setIsAlreadySubscribed(false);
    }
  }

  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center text-center h-[400px] w-full md:h-[400px] pt-[195px] pb-[194px] md:py-5 bg-[url(/public/assets/images/img_cta.png)] bg-cover bg-no-repeat text-slate-50`}
    >
      <div className="max-w-[1328px] mx-auto flex w-full justify-end px-5 md:p-5 xl:text-2xl">
        <div className="w-[100%] justify-center flex flex-col gap-8 md:w-full">
          <div className="flex flex-col gap-6">
            <p as="p" className="leading-[125%] ">
              Do you want to stay updated on the latest community news?
            </p>
            <Heading as="h6" className="leading-[150%] text-slate-50">
              Subscribe to our newsletter and enjoy the ride!
            </Heading>
          </div>
          <div className="">
            {!subscribed && (
              <form
                className="flex flex-wrap justify-center items-center gap-[10px] text-slate-50"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="footer-form rounded-full w-[100%] h-[55px] text-black p-3 sm:w-[70%] focus:outline-none"
                  placeholder="Insert your email here"
                ></input>
                <button
                  type="submit"
                  className="text-black bg-white pt-3 pb-3 px-8 rounded-[40px] font-bold border transition hover:border-solid hover:border-white hover:bg-[#232323] hover:text-white"
                >
                  Submit
                </button>
              </form>
            )}
            {subscribed && <p className="font-medium">Thank you for subscribing to our newsletter!</p>}
            {isAlreadySubscribed && (
              <div className="flex justify-center translate-y-5">
                <p className="text-orange-600 absolute">
                  This email is already subscribed. Please insert a different email !
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
