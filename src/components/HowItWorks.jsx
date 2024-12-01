import appDashboard from "../assets/images/app-dashboard.png";
import signUp from "../assets/images/sign-up.png";

const HowItWorks = () => {
  return (
    <div className="px-4 py-20 md:px-10 lg:px-28 lg:py-32 xl:px-48">
      <div className="grid gap-6 lg:gap-8">
        <div className="px-3 py-1 bg-primary-200 w-fit rounded-lg mx-auto">
          <p className="text-xs text-black-100 lg:text-sm">How it Works</p>
        </div>
        <h3 className="text-[1.75rem] font-medium text-center leading-8 md:w-3/5 md:mx-auto lg:text-[2rem] xl:w-2/5">
          Start in 3 easy steps
        </h3>
      </div>
      <div className="mt-12 grid lg:mt-16 lg:grid-cols-2 lg:gap-12 xl:mt-20">
        <div className="hidden lg:flex lg:gap-4 lg:justify-center lg:items-center xl:gap-0">
          <div className="w-[600px]">
            <img
              src={appDashboard}
              alt="amanah dashboard"
              className="rounded-tl-[50px] border border-black-300 shadow-neutral xl:w-[93%] xl:h-3/4"
            />
          </div>
          <div className="grid gap-4">
            <div className="xl:w-4/5 xl:h-4/5">
              <img
                src={signUp}
                alt="amanah signup"
                className="rounded-tr-[50px] border border-black-300 shadow-neutral"
              />
            </div>
            <div className="xl:w-4/5 xl:h-4/5">
              <img
                src={signUp}
                alt="amanah setup"
                className="rounded-bl-[50px] border border-black-300 shadow-neutral"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="grid gap-4 py-8 border-b border-black-300">
            <p className="uppercase text-sm text-neutral-300 font-extralight">
              Step 01
            </p>
            <div>
              <h4 className="text-xl font-medium">Create Account</h4>
              <p className="text-neutral-200 pt-1">
                Get started instantly with a free account and explore your
                options.
              </p>
            </div>
          </div>
          <div className="grid gap-4 py-8 border-b border-black-300">
            <p className="uppercase text-sm text-neutral-300 font-extralight">
              Step 02
            </p>
            <div>
              <h4 className="text-xl font-medium">Customize Your Coverage</h4>
              <p className="text-neutral-200 pt-1">
                Choose from a range of Takaful insurance plans and personalize
                your coverage to fit your needs.
              </p>
            </div>
          </div>
          <div className="grid gap-4 py-8">
            <p className="uppercase text-sm text-neutral-300 font-extralight">
              Step 03
            </p>
            <div>
              <h4 className="text-xl font-medium">
                Manage and Track Your Plans
              </h4>
              <p className="text-neutral-200 pt-1">
                Easily monitor your coverage, file claims, and access your
                policy information anytime, all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
