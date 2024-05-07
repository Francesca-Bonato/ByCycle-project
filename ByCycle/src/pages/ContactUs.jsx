import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { TextArea } from "../components/TextArea";

function ContactUs() {
  return (
    <div className="w-full bg-white-A700_01">
      {/* contact info section */}
      <div className="mt-[95px] flex flex-col items-center gap-40 md:gap-[120px] sm:gap-20">
        <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
          <div className="flex w-[37%] flex-col gap-[47px] md:w-full">
            <p className="display text-gray-900">
              Have a question about Morgans or need assistance with your bike?
              Get in contact with us.
            </p>
            <div className="h-px bg-gray-500_7f" />
            <div className="flex flex-col items-start gap-[22px]">
              <h5>Trusted by over 100 companies</h5>
              <img
                src="images/img_logo.svg"
                alt="company logo"
                className="h-[88px] w-full md:h-auto"
              />
            </div>
          </div>
          <div className="flex w-[48%] flex-col items-end gap-8 md:w-full">
            <div className="flex flex-col gap-[31px] self-stretch">
              <div className="flex flex-col items-start gap-3.5">
                <label className="font-semibold text-black-900">
                  Full Name
                </label>
                <input
                  shape="round"
                  name="Name Input"
                  placeholder={`Ex. John Pablo`}
                />
              </div>
              <div className="flex flex-col items-start gap-3.5">
                <label className="font-semibold text-black-900">
                  Email Address
                </label>
                <Input
                  shape="round"
                  name="Email Input"
                  placeholder={`Ex. Johnpablo@example.com`}
                />
              </div>
              <div className="flex flex-col items-start gap-3.5">
                <label className="font-semibold text-black-900">
                  Phone Number
                </label>
                <Input
                  shape="round"
                  name="Phone Input"
                  placeholder={`Ex. (808) 555-0111`}
                />
              </div>
              <div className="flex flex-col items-start gap-3">
                <label className="font-semibold text-black-900">
                  Description
                </label>
                <TextArea
                  shape="round"
                  name="Description Input"
                  placeholder={`Ex. Hello there is something I want to ask..`}
                  className="self-stretch !border-gray-500_01 text-gray-500 sm:pb-5 sm:pr-5"
                />
              </div>
            </div>
            <Button
              color="black_900"
              size="sm"
              shape="round"
              className="min-w-[119px] font-semibold sm:px-5"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
