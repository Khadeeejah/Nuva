import logo from "../assets/amanahwhite.png";
import Phone from "../assets/svgs/Phone";
import Twitter from "../assets/svgs/Twitter";
import Mail from "../assets/svgs/Mail";

const Footer = () => {
  return (
    <div className="px-4 py-6 flex flex-col items-center md:px-10 md:flex-row md:justify-between lg:px-20 lg:py-10 xl:px-[7.5rem]">
      <div className="mb-20 md:mb-0">
        <img src={logo} alt="Amanah Logo" />
        <p className="hidden text-neutral-100 md:pt-4 md:block lg:text-sm">
          Amanah. All Rights Reserved © 2024
        </p>
      </div>
      <div className="grid gap-4 place-content-center">
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
        <ul className="flex gap-4 text-neutral-100">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
        </ul>
      </div>

      <p className="text-xs text-neutral-100 pt-16 md:hidden">
        Amanah. All Rights Reserved © 2024
      </p>
    </div>
  );
};

export default Footer;
