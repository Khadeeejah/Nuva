const About = () => {
  return (
    <div id="about" className="px-4 py-20 md:px-32 md:py-28 xl:px-44 xl:py-48">
      <div className="flex flex-col gap-14 lg:flex-row xl:gap-24">
        <div className="lg:w-3/5">
          <h2 className="text-[1.688rem] text-center font-semibold leading-8 md:text-3xl lg:text-4xl lg:text-left lg:leading-10 xl:text-5xl xl:leading-tight">
            The Takaful platform that helps you achieve your insurance
            goals—easily.
          </h2>
        </div>
        <div className="grid gap-6 text-center text-neutral-100 lg:text-left lg:w-3/4 xl:text-lg">
          <p>
            We&apos;ve created a{" "}
            <span className="text-primary-100 font-semibold">seamless</span> and{" "}
            <span className="text-primary-100 font-semibold">personalized</span>{" "}
            Takaful solution with easy management and tailored plans—all in one
            place. Our vision is to make ethical, decentralized insurance
            accessible to everyone, using blockchain to build a trusted and
            transparent ecosystem for communities worldwide.
          </p>
          <p>
            We&apos;re on a mission to transform insurance with blockchain and
            AI to create a transparent, ethical Takaful platform that empowers
            individuals to share risk and promotes financial inclusion for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
