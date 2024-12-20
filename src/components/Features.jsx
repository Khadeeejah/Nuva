import identityVerification from "../assets/images/identity-verification.png";
import claims from "../assets/images/claims.png";
import fractionalOwnership from "../assets/images/fractional-ownership.png";
import chatbot from "../assets/images/AI-chatbot.png";
import educationalResources from "../assets/images/resources.png";
import riskLevel from "../assets/images/risk-level.png";

const Features = () => {
  return (
    <div
      id="features"
      className="px-4 py-20 md:px-10 lg:px-20 lg:py-32 xl:px-[7.5rem]"
    >
      <div className="grid gap-6 lg:gap-8">
        <div className="px-3 py-1 bg-primary-200 w-fit rounded-lg mx-auto">
          <p className="text-xs text-black-100 lg:text-sm">What We Offer</p>
        </div>
        <h3 className="text-[1.75rem] font-semibold text-center leading-10 md:w-3/5 md:mx-auto lg:text-[2rem]">
          <span className="block">Our Solution at a Glance</span>
        </h3>
      </div>
      <div className="mt-8 grid gap-3 md:mt-10 lg:mt-20">
        <div className="flex flex-col justify-center gap-3 md:flex-row">
          <div className="px-5 py-6 bg-black-100 flex flex-col justify-end border border-black-300 rounded-lg md:w-1/2 xl:w-2/5 xl:h-[394px]">
            <div className="hidden mx-auto w-4/5 -mb-10 xl:block">
              <img
                src={identityVerification}
                alt="identity verification"
                className="w-[90%]"
              />
            </div>
            <div>
              <h4 className="text-lg pb-1 font-medium md:pb-0 xl:text-xl">
                Compliance Driven Digital Identity Verification
              </h4>
              <p className="text-neutral-200 lg:pt-2">
                Utilize DLT and smart contracts to verify identities, automate
                compliance checks, and enhance security, safeguarding user
                privacy during validation and regulatory audits.
              </p>
            </div>
          </div>
          <div className="px-5 py-6 bg-black-100 border border-black-300 rounded-lg md:w-1/2 xl:flex xl:flex-col xl:justify-end xl:w-[30%] xl:h-[394px]">
            <div className="hidden mx-auto w-[95%] -mb-4 xl:block">
              <img
                src={claims}
                alt="identity verification"
                className="w-[90%]"
              />
            </div>
            <h4 className="text-lg pb-1 font-medium md:pb-0 xl:text-xl">
              Automated Claims Processing
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Self-service claims with AI verification, automated assessment,
              smart contract payments, and real-time updates streamline the
              process.
            </p>
          </div>
          <div className="hidden px-5 py-6 bg-black-100 border border-black-300 rounded-lg xl:flex xl:flex-col xl:justify-end xl:w-[30%] xl:h-[394px]">
            <div className="mx-auto w-3/5 mb-8">
              <img
                src={fractionalOwnership}
                alt="fractional ownership"
                className="w-[90%]"
              />
            </div>
            <h4 className="text-lg pb-1 font-medium md:pb-0 xl:text-xl">
              Fractional Ownership of Policies
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Participants can own policy fractions, contribute to pools, share
              in coverage and surplus, and earn rewards for long-term ownership
              and community involvement.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:justify-center xl:hidden">
          <div className="px-5 py-6 bg-black-100 border border-black-300 rounded-lg md:w-1/2 xl:flex xl:flex-col xl:justify-end xl:w-[30%] xl:h-[394px]">
            <h4 className="text-lg pb-1 font-medium md:pb-0 xl:text-xl">
              Fractional Ownership of Policies
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Participants can own policy fractions, contribute to pools, share
              in coverage and surplus, and earn rewards for long-term ownership
              and community involvement.
            </p>
          </div>
          <div className="px-5 py-6 bg-black-100 border border-black-300 rounded-lg md:w-1/2 xl:flex xl:flex-col xl:justify-end xl:w-[30%] xl:h-[394px]">
            <h4 className="text-lg pb-1 font-medium md:pb-0 xl:text-xl">
              AI-Powered WhatsApp Agent
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Simplify policy management and sales with our multilingual
              WhatsApp chatbot. Browse options, get quotes, apply, pay, and
              receive digital policies via email.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3 md:flex-row">
          <div className="hidden px-5 py-6 bg-black-100 border border-black-300 rounded-lg xl:flex xl:flex-col xl:justify-end xl:w-[30%] xl:h-[394px]">
            <div className="mx-auto w-full -mb-10">
              <img src={chatbot} alt="AI chatbot" className="w-full" />
            </div>
            <h4 className="text-lg pb-1 font-medium md:pb-0 xl:text-xl">
              AI-Powered WhatsApp Chatbot
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Simplify policy management and sales with our multilingual
              WhatsApp chatbot. Browse options, get quotes, apply, pay, and
              receive digital policies via email.
            </p>
          </div>
          <div className="px-5 py-6 bg-black-100 border border-black-300 rounded-lg md:w-1/2 xl:flex xl:flex-col xl:justify-end xl:w-[30%] xl:pt-6 xl:pb-12 xl:h-[394px]">
            <div className="hidden mx-auto w-full -mb-10 xl:block">
              <img
                src={educationalResources}
                alt="educational resources"
                className="w-[90%]"
              />
            </div>
            <h4 className="text-lg pb-1 font-medium md:pb-0 xl:text-xl">
              Educational Resources
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Learn about blockchain technology and artificial intelligence
              relating to insurance via webinars, blog posts and workshops.
            </p>
          </div>
          <div className="px-5 py-6 bg-black-100 border border-black-300 rounded-lg md:w-1/2 xl:flex xl:flex-col xl:justify-end xl:w-2/5 xl:pt-6 xl:pb-12 xl:h-[394px]">
            <div className="hidden mx-auto w-[95%] -mb-[5.5rem] xl:block">
              <img src={riskLevel} alt="risk scoring" className="w-[90%]" />
            </div>
            <h4 className="text-lg pb-1 font-medium md:pb-0 xl:text-xl">
              Gamified Dynamic Risk Scoring
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Dynamically adjust risk scores based on user behaviour and market
              conditions while rewarding risk reduction and community
              contributions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
