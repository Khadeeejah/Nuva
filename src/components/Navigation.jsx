import { useState } from "react";
import logo from "../assets/logo.svg";
import Menu from "../assets/svgs/Menu";
import Close from "../assets/svgs/Close";

const navLinks = [
  {
    route: "#",
    name: "Home",
  },
  {
    route: "#about",
    name: "About",
  },
  {
    route: "#features",
    name: "Features",
  },
  {
    route: "#how-it-works",
    name: "How it Works",
  },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 pb-4 sticky top-0 left-0 w-full bg-[#1a1a1acc] flex justify-between items-end backdrop-blur-md shadow-sm md:px-10 md:items-center md:pb-5 md:pt-5 lg:pt-6 lg:px-20 lg:items-center xl:px-[7.5rem]">
      <a href="/" className="block w-fit md:-mt-4 lg:-mt-5">
        <img
          src={logo}
          alt="Nuva Logo"
          className="w-4/5 md:w-[88%] lg:w-full"
        />
      </a>
      <div className="md:hidden">
        <button className="cursor-pointer" onClick={() => setOpen(true)}>
          <Menu />
        </button>
        <div
          className={`pl-12 pr-4 py-4 bg-black-50 h-screen shadow-xl w-full absolute top-0 left-0 z-20 transition-transform duration-700 ${
            open ? "-translate-x-0" : "-translate-x-[1000px]"
          }`}
        >
          <button onClick={() => setOpen(false)} className="flex ml-auto">
            <Close className="w-8 h-8" />
          </button>
          <div className="pt-6 pr-6 flex flex-col justify-between">
            <ul className="pt-10 grid gap-8">
              {navLinks?.map(({ route, name }) => (
                <li key={name} onClick={() => setOpen(false)}>
                  <a href={route} className="text-2xl font-normal">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="w-full px-6 py-3 text-black-50 font-medium bg-primary-100 cursor-pointer rounded-lg mt-24 text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <ul className="hidden md:flex md:gap-4 lg:font-normal xl:gap-6">
        {navLinks?.map(({ route, name }) => (
          <li key={name}>
            <a href={route}>{name}</a>
          </li>
        ))}
      </ul>
      <button className="hidden py-2 text-black-50 bg-primary-100 cursor-pointer rounded-lg transition duration-300 md:px-4 md:block md:font-medium lg:px-6 xl:hover:bg-primary-50">
        Get Started
      </button>
    </div>
  );
};

export default Navigation;
