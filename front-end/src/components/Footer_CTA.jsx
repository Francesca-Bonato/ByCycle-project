/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Heading } from "./Heading";

export function Footer_CTA({ ...props }) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

/*   useEffect(() => {
    const storedEmail = localStorage.getItem(email);
    setIsSubscribed(!!storedEmail);
  }, [email]);

  function handleNewsletterSubmit(e) {
    e.preventDefault();
    setError("");
    const storedEmail = localStorage.getItem(email);
    try {
      if (storedEmail) {
        setIsSubscribed(true);
      } else {
        localStorage.setItem(email, "subscribed");
        setSubscribed(true);
        setIsSubscribed(false);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  } */

  async function handleNewsletterSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/newsletters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribed(true);
        setIsSubscribed(false);
      } else {
        const data = await response.json();
        if (data.message === "Email already subscribed") {
          setIsSubscribed(true);
        } else {
          setError("An error occurred. Please try again later.");
        }
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  }

  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center text-center h-[400px] w-full md:h-[400px] pt-[195px] pb-[194px] md:py-5 bg-[url(/assets/images/img_cta.png)] bg-cover bg-no-repeat text-slate-50`}
    >
      <div className="max-w-[1328px] mx-auto flex w-full justify-end px-5 md:p-5 xl:text-2xl">
        <div className="w-[100%] justify-center flex flex-col gap-8 md:w-full">
          <div className="flex flex-col gap-6">
            <p className="leading-[125%] ">
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
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="footer-form rounded-full w-[100%] h-[55px] text-black p-5 sm:w-[70%] focus:outline-none"
                  placeholder="Insert your email here"
                ></input>
                <button
                  type="submit"
                  className="text-white bg-[#232323] pt-3 pb-3 px-8 rounded-[40px] font-bold border transition hover:border-solid hover:border-white hover:bg-white hover:text-black"
                >
                  Submit
                </button>
              </form>
            )}
            {subscribed && (
              <p className="font-medium">
                Thank you for subscribing to our newsletter!
              </p>
            )}
            {isSubscribed && (
              <div className="flex justify-center translate-y-5">
                <p className="text-orange-600 absolute p-1 drop-shadow-[0_1px_10px_rgba(255,255,255,1)]">
                  This email is already subscribed. Please insert a different
                  email !
                </p>
              </div>
            )}
            {error && (
              <div className="flex justify-center translate-y-5">
                <p className="text-red-600 absolute p-1 drop-shadow-[0_1px_10px_rgba(255,255,255,1)]">
                  {error}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
