const About = () => {
  return (
    <div id="about" className="px-4 py-20 md:px-32 md:py-28 xl:px-44 xl:py-48">
      <div className="flex flex-col gap-14 lg:flex-row xl:gap-24">
        <div className="lg:w-3/5">
          <h2 className="text-[1.688rem] text-center font-semibold leading-8 md:text-3xl lg:text-4xl lg:text-left lg:leading-10 xl:text-5xl xl:leading-tight">
            The Future of Insurance Is Here
          </h2>
        </div>
        <div className="grid gap-6 text-center text-neutral-100 lg:text-left lg:w-3/4 xl:text-lg">
          <p>
            Nuva combines cutting-edge{" "}
            <span className="text-primary-100 font-semibold"> AI</span> and{" "}
            <span className="text-primary-100 font-semibold">Blockchain </span>{" "}
            technology that provides a comprehensive and customisable technology
            platform to create an inclusive, efficient, and transparent
            insurance ecosystem while allowing full control over data and
            compliance.
          </p>
          <p>
            We are Qatar&apos;s first insurance technology platform designed
            with Sharia compliance. We offer insurance companies full
            customisation and control over their data while equipping them with
            cutting-edge, regulatory-compliant tools.
          </p>
          <p>
            We&apos;re on a mission to transform insurance with blockchain and
            AI to create a transparent, ethical platform that empowers Insurance
            companies and SMEs to share risk and promotes financial inclusion
            for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
