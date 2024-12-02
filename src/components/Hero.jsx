import heroImage from "../assets/images/hero-img.png";

const Hero = () => {
  return (
    <div className="px-4 pt-16 pb-20 md:px-10 lg:px-20 lg:pt-20 lg:py-40 xl:pb-44 xl:px-[7.5rem]">
      <div className="grid gap-20">
        <div>
          <h1 className="text-3xl font-semibold text-center pb-4 leading-10 md:text-5xl md:leading-tight lg:text-[3.25rem] lg:w-3/4 lg:mx-auto xl:text-6xl xl:w-4/5 xl:leading-tight">
            The World&apos;s Leading Ethical Insurance Technology Platform
          </h1>
          <p className="text-neutral-300 text-center text-sm md:text-base md:w-3/4 md:mx-auto lg:text-lg xl:w-3/5">
           Redefining insurance with ethical, Sharia-compliant AI and blockchain technology.
          
          </p>
          <button className="px-8 py-2 mx-auto flex mt-8 text-black-50 font-medium bg-primary-100 cursor-pointer rounded-lg transition duration-300 lg:px-12 lg:py-2.5 xl:hover:bg-primary-200">
            Get Started
          </button>
        </div>
        <div className="lg:mt-16 xl:mt-20">
          <img src={heroImage} alt="amanah-dashboard" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
