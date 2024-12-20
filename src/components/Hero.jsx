import heroImage from "../assets/images/hero-img.png";
import heroImageMobile from "../assets/images/hero-img-mobile.png";

import { useEffect, useState } from "react";

const Hero = () => {
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="px-4 pt-24 pb-20 md:px-10 md:pt-24 lg:px-20 lg:py-40 xl:pb-44 xl:px-[7.5rem]">
      <div className="grid gap-14 md:gap-20">
        <div>
          <h1 className="text-3xl font-semibold text-center pb-4 leading-10 md:text-5xl md:leading-tight lg:text-[3.25rem] lg:w-3/4 lg:mx-auto xl:text-6xl xl:w-4/5 xl:leading-tight">
            The World&apos;s Leading Ethical Insurance Technology Platform
          </h1>
          <p className="text-neutral-300 text-center text-sm md:text-base md:w-3/4 md:mx-auto lg:text-lg xl:w-3/5">
            Redefining insurance with ethical, Sharia-compliant AI and
            blockchain technology.
          </p>
          <button className="px-8 py-2.5 mx-auto text-sm flex mt-8 text-black-50 font-medium bg-primary-100 cursor-pointer rounded-lg transition duration-300 md:text-base lg:px-12 xl:py-3 xl:hover:bg-primary-50">
            Get Started
          </button>
        </div>
        <div className="mt-10 lg:mt-16 xl:mt-20">
          <img
            src={width > 767 ? heroImage : heroImageMobile}
            alt="Nuva-dashboard"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
