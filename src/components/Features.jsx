import AIDriven from "../assets/svgs/AIDriven";
import Buildings from "../assets/svgs/Buildings";
import ELearning from "../assets/svgs/ELearning";

const Features = () => {
  return (
    <div className="px-4 py-20 md:px-10 lg:px-20 lg:py-32 xl:px-[7.5rem]">
      <div className="grid gap-6 lg:gap-8">
        <div className="px-3 py-1 bg-primary-200 w-fit rounded-lg mx-auto">
          <p className="text-xs text-black-100 lg:text-sm">What We Offer</p>
        </div>
        {/* <div className="px-3 py-1 bg-black-200 border border-black-300 w-fit rounded-lg mx-auto">
          <p className="text-xs text-neutral-300 lg:text-sm">What We Offer</p>
        </div> */}
        <h3 className="text-[1.75rem] font-medium text-center leading-8 md:w-3/5 md:mx-auto lg:text-[2rem] xl:w-2/5">
          Takaful insurance, re-engineered for a better experience
        </h3>
      </div>
      <div className="mt-16 grid lg:grid-cols-3 lg:mt-20">
        <div className="p-6 grid gap-4">
          <AIDriven className="*:stroke-neutral-100 w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
          <div>
            <h4 className="text-lg font-medium xl:text-xl">
              Personalized Insurance, AI-Driven
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Our AI analyzes and processes claims with smart contracts while
              providing chatbot assistance.
            </p>
          </div>
        </div>
        <div className="p-6 grid gap-4">
          <Buildings className="*:stroke-neutral-100 w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
          <div>
            <h4 className="text-lg font-medium xl:text-xl">
              Top Providers, One App
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Access the best Takaful Insurance providers with just a
              tap—convenience and choice at your fingertips.
            </p>
          </div>
        </div>
        <div className="p-6 grid gap-4">
          <ELearning className="*:stroke-neutral-100 w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
          <div>
            <h4 className="text-lg font-medium xl:text-xl">
              Learn Takaful Insurance, easily
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Learn how Takaful Insurance works with our quick and
              easy-to-understan educational resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
