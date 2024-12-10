import logo from "../assets/logo.svg";
import Phone from "../assets/svgs/Phone";
import Twitter from "../assets/svgs/Twitter";
import Mail from "../assets/svgs/Mail";

const Footer = () => {
  return (
    <div className="px-4 py-6 flex flex-col border-black-200 border-t shadow-md items-center md:px-10 md:flex-row md:justify-between lg:px-20 lg:py-10 xl:px-[7.5rem]">
      <div className="mb-20 md:mb-0">
        <img src={logo} alt="Nuva Logo" />
        <p className="hidden font-extralight text-neutral-200 md:pt-4 md:block lg:text-sm">
          Nuva. All Rights Reserved © 2024
        </p>
      </div>
      <div className="grid gap-6 place-content-center md:gap-4">
        <div className="flex gap-7">
          <button className="w-10 h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-400 cursor-pointer transition duration-200 xl:hover:bg-black-200">
            <Phone />
          </button>
          <button className="w-10 h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-400 cursor-pointer transition duration-200 xl:hover:bg-black-200">
            <Twitter />
          </button>
          <button className="w-10 h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-400 cursor-pointer transition duration-200 xl:hover:bg-black-200">
            <Mail />
          </button>
        </div>
        <ul className="flex gap-4 ml-0.5 text-neutral-100 md:ml-0">
          <li>
            <a href="#" className="font-normal">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-normal">
              About
            </a>
          </li>
          <li>
            <a href="#features" className="font-normal">
              Features
            </a>
          </li>
        </ul>
      </div>
      <p className="text-xs font-extralight text-neutral-200 pt-16 md:hidden">
        Nuva. All Rights Reserved © 2024
      </p>
    </div>
  );
};

export default Footer;
