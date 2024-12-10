import phoneMockup from "../assets/images/phone-mockup.png";

const About = () => {
  return (
    <div
      id="about"
      className="px-4 py-20 md:px-16 md:py-28 lg:py-32 lg:px-32 xl:px-44 xl:py-48"
    >
      <div className="flex flex-col justify-center items-center gap-14 md:gap-12 md:flex-row xl:gap-20">
        <div className="w-1/2 md:w-2/5 order-2">
          <img src={phoneMockup} alt="Nuva AI" />
        </div>
        <div className="flex flex-col justify-center gap-3 md:order-2 md:w-3/4 lg:w-[90%] lg:gap-6">
          <h2 className="text-2xl text-center font-semibold leading-8 md:text-3xl lg:text-4xl md:text-left lg:leading-10 xl:text-5xl xl:leading-tight">
            The Future of Insurance Is Here
          </h2>
          <div className="grid gap-6 text-center text-neutral-100 md:text-left lg:w-[90%] xl:text-lg">
            <p>
              Nuva combines cutting-edge{" "}
              <span className="text-primary-100 font-semibold"> AI</span> and{" "}
              <span className="text-primary-100 font-semibold">
                Blockchain{" "}
              </span>{" "}
              technology that provides a comprehensive and customisable
              technology platform to create an inclusive, efficient, and
              transparent insurance ecosystem while allowing full control over
              data and compliance.
            </p>
            <p>
              We are Qatar&apos;s first insurance technology platform designed
              with Sharia compliance. We offer insurance companies full
              customisation and control over their data while equipping them
              with cutting-edge, regulatory-compliant tools.
            </p>
            <p>
              We&apos;re on a mission to transform insurance with blockchain and
              AI to create a transparent, ethical platform that empowers
              insurance companies and SMEs to share risk and promotes financial
              inclusion for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
