import { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoBlack from "../assets/images/ByCycle_logo_definitivo.png";
// import logoWhite from "../assets/images/ByCycle_logo_definitivo_white.png";
import imageProfileCustom from "../assets/images/profile-user-icon-2048x2048-m41rxkoe.png";
/* import { users } from "/src/users"; */

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Quiz", href: "/quiz", current: false },
  { name: "Community", href: "/community", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "News & Events ", href: "/events", current: false },
  { name: "Trails ", href: "/trails", current: false },
];

const unLogged = [
  { name: "Sign In", href: "/register" },
  { name: "Log In", href: "/login" },
];

const logged = [
  { name: "Your Profile", href: "/profile" },
  { name: "Settings", href: "/profile-settings" },
  { name: "Log Out", href: "/" },
];

// Utility function to manage component classes
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//Function to return to top page
function handleClick() {
  window.scrollTo({ top: 0 });
}

// Main component
export function NavBar({ username }) {
  // Get the current route information
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const usermail = localStorage.getItem("usermail");
    const password = localStorage.getItem("password");

    const authenticated = users.some(
      (user) => user.usermail === usermail && user.password === password
    );
    setIsAuthenticated(authenticated);
  }, []);

  // Render the component
  return (
    <>
      {/* All Container */}
      <div className=" w-full sticky top-0 z-[999] bg-white shadow-lg">
        {/* Disclosure component to handle menu visibility */}
        <Disclosure as="nav">
          {({ open }) => (
            <>
              {/* Header */}
              <div
                className={`mx-auto px-4 sm:px-6 lg:px-8 ${
                  location.pathname === "/" && "bg-transparent text-white"
                }`}
              >
                <div className="flex h-16 items-center justify-between">
                  {/* Logo */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to="#">
                        <img
                          className="w-[150px] mt-[2px]"
                          src={logoBlack}
                          alt="Company"
                        />
                      </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                      <div className="ml-10 text-center flex justify-center items-baseline space-x-4 ">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={handleClick}
                            className={classNames(
                              location.pathname === item.href
                                ? "bg-gray-900 text-white"
                                : "text-black transition-all hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Desktop Profile Menu Icon */}
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={imageProfileCustom}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        {/* Profile Dropdown Menu */}
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100 transform"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="transition ease-in duration-75 transform"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {(isAuthenticated ? logged : unLogged).map(
                              (item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <Link
                                      to={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              )
                            )}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  {/* Mobile Menu Icon */}
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md  p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6 text-black"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6 text-black "
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Panel with Transition */}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-150 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={
                          " block rounded-md px-3 py-2 text-base font-medium"
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 pb-3 pt-4 ">
                    <div className="flex items-center px-5 cursor-pointer ">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={imageProfileCustom}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none ">
                          {username ? username : ""}
                        </div>
                        <div className="text-sm font-medium leading-none ">
                          {username ? username : ""}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                      {(isAuthenticated ? logged : unLogged).map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as={Link}
                          to={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}

export default NavBar;
