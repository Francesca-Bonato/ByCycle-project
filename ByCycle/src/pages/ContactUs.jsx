import { useState } from "react";
import Button from "../components/Button";

function ContactUs() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    contactNmb: "",
    message: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`i tuoi dati: `, user);
  }

  return (
    <div className="w-full bg-white-A700_01">
      {/* contact info section */}
      <div className="mt-[95px] flex flex-col items-center gap-40">
        <div className="container-xs flex flex-col items-center justify-between gap-10 md:flex-row md:p-5">
          <div className="flex w-full flex-col gap-[47px] p-5">
            <p className="display mb-2 md:px-5 md:w-full md: px-5">
              Have a question about Morgans or need assistance with your bike?
              Get in contact with us.
            </p>
            {/* <div className="h-px bg-gray-500_7f" />
            <div className="flex flex-col items-start gap-[22px]">
            </div> */}
          </div>
          <div className="flex flex-col items-end gap-8 w-full p-5">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[31px] self-stretch w-full"
            >
              <div className="flex flex-col items-start gap-3.5">
                <label htmlFor="full-name" className="font-semibold">
                  Full Name
                </label>
                <input
                  className="w-full p-[10px] border border-gray-300 rounded-3xl"
                  type="text"
                  name="full-name"
                  value={user.fullName}
                  onChange={(e) =>
                    setUser({ ...user, fullName: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col items-start gap-3.5">
                <label htmlFor="email-address" className="font-semibold">
                  Email Address
                </label>
                <input
                  className="w-full p-[10px] border border-gray-300 rounded-3xl"
                  type="text"
                  name="email-address"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="flex flex-col items-start gap-3.5">
                <label htmlFor="contact-number" className="font-semibold">
                  Phone Number
                </label>
                <input
                  className="w-full p-[10px] border border-gray-300 rounded-3xl"
                  type="text"
                  name="contact-number"
                  value={user.contactNmb}
                  onChange={(e) =>
                    setUser({ ...user, contactNmb: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col items-start gap-3">
                <label
                  htmlFor="message"
                  className="font-semibold text-black-900"
                >
                  Description
                </label>
                <textarea
                  className="w-full p-[10px] border border-gray-300 rounded-3xl"
                  name="message"
                  id="contact-us"
                  cols="30"
                  rows="10"
                  value={user.message}
                  onChange={(e) =>
                    setUser({ ...user, message: e.target.value })
                  }
                ></textarea>
              </div>
              <Button label="Submit" customclass="self-end" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
