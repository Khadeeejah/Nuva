import { useState } from "react";
import logo from "../assets/logo.png";
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
    <div className="px-4 py-6 sticky top-0 left-0 w-full bg-[#1a1a1acc] flex justify-between items-start backdrop-blur-md shadow-sm md:px-10 lg:px-20 lg:items-center xl:px-[7.5rem]">
      <div className="w-fit">
        <img src={logo} alt="Amanah Logo" className="w-3/5 lg:w-4/5" />
      </div>
      <div>
        <button
          className="cursor-pointer lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
        <div
          className={`pl-12 pr-6 py-6 bg-black-50 h-screen shadow-xl w-full absolute top-0 left-0 z-20 transition-transform duration-700 md:w-1/2 lg:hidden ${
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
                  <a href={route} className="text-2xl">
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
      <ul className="hidden lg:flex lg:gap-4 lg:font-normal xl:gap-6">
        {navLinks?.map(({ route, name }) => (
          <li key={name}>
            <a href={route}>{name}</a>
          </li>
        ))}
      </ul>
      <button className="hidden lg:block px-6 py-2 text-black-50 font-medium bg-primary-100 cursor-pointer rounded-lg transition duration-300 xl:hover:bg-primary-200">
        Get Started
      </button>
    </div>
  );
};

export default Navigation;
