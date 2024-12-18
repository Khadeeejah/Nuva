import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import appDashboard from "../assets/images/app-dashboard.png";
import signUp from "../assets/images/signUp.png";
import setup from "../assets/images/setup.png";

const HowItWorks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div
      id="how-it-works"
      className="px-4 py-20 md:px-10 lg:px-28 lg:py-32 xl:px-48"
    >
      <div className="grid gap-6 lg:gap-8">
        <div className="px-3 py-1 bg-primary-200 w-fit rounded-lg mx-auto">
          <p className="text-xs text-black-100 lg:text-sm">How It Works</p>
        </div>
        <h3 className="text-[1.75rem] font-semibold text-center leading-8 md:w-3/5 md:mx-auto lg:text-[2rem] xl:w-2/5">
          Start in 3 Easy Steps
        </h3>
      </div>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="p-1 mt-8 mb-7 bg-black-200 w-fit mx-auto border border-black-300 rounded-lg shadow-purplish-grayish flex gap-2 items-center md:mt-12 md:gap-4 lg:mt-14 lg:mb-20 xl:mt-16">
            <Tab
              className={`text-[0.845rem] p-2 rounded-md font-normal cursor-pointer outline-none ${
                tabIndex === 0
                  ? "bg-primary-100 text-black-50 font-medium"
                  : "text-neutral-300"
              } md:text-sm lg:text-base lg:px-3 xl:hover:bg-primary-50 xl:hover:text-black-50 xl:transition xl:duration-[400ms]`}
            >
              Insurance Companies
            </Tab>
            <Tab
              className={`text-[0.845rem] p-2 rounded-md font-normal cursor-pointer outline-none ${
                tabIndex === 1
                  ? "bg-primary-100 text-black-50 font-medium"
                  : "text-neutral-300"
              } md:text-sm lg:text-base lg:px-3 xl:hover:bg-primary-50 xl:hover:text-black-50 xl:transition xl:duration-[400ms]`}
            >
              Small & Medium Enterprises
            </Tab>
          </TabList>
          <TabPanel>
            <div className="grid lg:grid-cols-2 lg:gap-12">
              <div className="hidden lg:flex lg:gap-4 lg:justify-center lg:items-center xl:gap-0">
                <div className="w-[600px]">
                  <img
                    src={appDashboard}
                    alt="Nuva dashboard"
                    className="rounded-tl-[50px] border border-black-300 shadow-neutral xl:w-[93%] xl:h-3/4"
                  />
                </div>
                <div className="grid gap-4">
                  <div className="xl:w-4/5 xl:h-4/5">
                    <img
                      src={signUp}
                      alt="Nuva signup"
                      className="rounded-tr-[50px] border border-black-300 shadow-neutral"
                    />
                  </div>
                  <div className="xl:w-4/5 xl:h-4/5">
                    <img
                      src={setup}
                      alt="Nuva setup"
                      className="rounded-bl-[50px] border border-black-300 shadow-neutral"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid gap-3 py-6 border-b border-black-300 md:py-8 md:gap-4">
                  <p className="uppercase text-sm text-neutral-300 font-extralight">
                    Step 01
                  </p>
                  <div>
                    <h4 className="text-lg font-medium md:text-xl">
                      Request for a Demo
                    </h4>
                    <p className="text-neutral-200 pt-1">
                      Get started instantly with a free account and explore your
                      options.
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 py-6 border-b border-black-300 md:py-8 md:gap-4">
                  <p className="uppercase text-sm text-neutral-300 font-extralight">
                    Step 02
                  </p>
                  <div>
                    <h4 className="text-lg font-medium md:text-xl">
                      Customize Your Coverage
                    </h4>
                    <p className="text-neutral-200 pt-1">
                      Utilize our blockchain and AI-driven features
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 py-6 md:py-8 md:gap-4">
                  <p className="uppercase text-sm text-neutral-300 font-extralight">
                    Step 03
                  </p>
                  <div>
                    <h4 className="text-lg font-medium md:text-xl">
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
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-2 lg:gap-12">
              <div className="hidden lg:flex lg:gap-4 lg:justify-center lg:items-center xl:gap-0">
                <div className="w-[600px]">
                  <img
                    src={appDashboard}
                    alt="Nuva dashboard"
                    className="rounded-tl-[50px] border border-black-300 shadow-neutral xl:w-[93%] xl:h-3/4"
                  />
                </div>
                <div className="grid gap-4">
                  <div className="xl:w-4/5 xl:h-4/5">
                    <img
                      src={signUp}
                      alt="Nuva signup"
                      className="rounded-tr-[50px] border border-black-300 shadow-neutral"
                    />
                  </div>
                  <div className="xl:w-4/5 xl:h-4/5">
                    <img
                      src={signUp}
                      alt="Nuva setup"
                      className="rounded-bl-[50px] border border-black-300 shadow-neutral"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid gap-3 py-6 border-b border-black-300 md:py-8 md:gap-4">
                  <p className="uppercase text-sm text-neutral-300 font-extralight">
                    Step 01
                  </p>
                  <div>
                    <h4 className="text-lg font-medium md-text-xl">
                      Set Up Your Profile
                    </h4>
                    <p className="text-neutral-200 pt-1">
                      Register on the Nuva platform with your business
                      credentials
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 py-6 border-b border-black-300 md:py-8 md:gap-4">
                  <p className="uppercase text-sm text-neutral-300 font-extralight">
                    Step 02
                  </p>
                  <div>
                    <h4 className="text-lg font-medium md-text-xl">
                      Request and Buy Policies
                    </h4>
                    <p className="text-neutral-200 pt-1">
                      Select and buy the policy that fits your business
                      requirements directly through our AI and Blockchain tools.
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 py-6 md:py-8 md:gap-4">
                  <p className="uppercase text-sm text-neutral-300 font-extralight">
                    Step 03
                  </p>
                  <div>
                    <h4 className="text-lg font-medium md-text-xl">
                      Collaborate and Buy from the Policy Pool
                    </h4>
                    <p className="text-neutral-200 pt-1">
                      Participate in pooled policies that distribute risks and
                      rewards among SMEs with similar needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default HowItWorks;
