import logo from "../assets/amanahwhite.png";
import Menu from "../assets/svgs/Menu";

const Navigation = () => {
  return (
    <div className="px-4 py-6 sticky top-0 left-0 w-full bg-black-50 flex justify-between items-start shadow-sm md:px-10 lg:px-20 lg:items-center xl:px-[7.5rem]">
      <div className="w-fit">
        <img src={logo} alt="Amanah Logo" className="w-3/5 lg:w-4/5" />
      </div>
      <button className="cursor-pointer lg:hidden">
        <Menu />
      </button>
      <ul className="hidden lg:flex lg:gap-4 lg:font-normal xl:gap-6">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#how-it-works">How it Works</a>
        </li>
      </ul>
      <button className="hidden lg:block px-6 py-2.5 text-black-50 font-medium bg-primary-100 cursor-pointer rounded-lg transition duration-300 xl:hover:bg-primary-200">
        Get Started
      </button>
    </div>
  );
};

export default Navigation;
