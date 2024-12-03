import AIDriven from "../assets/svgs/AIDriven";
import Buildings from "../assets/svgs/Buildings";
import ELearning from "../assets/svgs/ELearning";

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
          <span className="block"> Our Solution at a glance </span>
        </h3>
      </div>
      <div className="mt-16 grid lg:grid-cols-3 lg:mt-20">
        <div className="p-6 grid gap-4">
          <AIDriven className="*:stroke-neutral-100 w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
          <div>
            <h4 className="text-lg font-medium xl:text-xl">
              Compliance Driven Digital Identity Verification
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Utilize DLT and smart contracts to verify identities, automate
              compliance checks, and enhance security, safeguarding user privacy
              during validation and regulatory audits.
            </p>
          </div>
        </div>
        <div className="p-6 grid gap-4">
          <Buildings className="*:stroke-neutral-100 w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
          <div>
            <h4 className="text-lg font-medium xl:text-xl">
              Automated Claims Processing
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Self-service Claims, AI-powered verification, automated assesment,
              smart contract payment abd real-time updates streamling the claim
              process.
            </p>
          </div>
        </div>
        <div className="p-6 grid gap-4">
          <ELearning className="*:stroke-neutral-100 w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
          <div>
            <h4 className="text-lg font-medium xl:text-xl">
              AI-Powered WhatsApp Chatbot
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Simplify policy management and sales with our multilingual
              chatbot. Easily browse options, get personalized quotes, apply,
              make payments, and receive digital policy documents directly via
              email—all through WhatsApp..
            </p>
          </div>
        </div>
        <div className="p-6 grid gap-4">
          <ELearning className="*:stroke-neutral-100 w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
          <div>
            <h4 className="text-lg font-medium xl:text-xl">
              Fractional Ownership of Policies
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Participants can own fractions of policies, contributing to pools
              and sharing in coverage and surplus, while earning rewards for
              long-term ownership and community participation.
            </p>
          </div>
        </div>
        <div className="p-6 grid gap-4">
          <ELearning className="*:stroke-neutral-100 w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
          <div>
            <h4 className="text-lg font-medium xl:text-xl">
              Educational Resources
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Learn about blockchain technology and artificial intelligence
              relating to insurance via webiners, blog post and workshops
            </p>
          </div>
        </div>
        <div className="p-6 grid gap-4">
          <ELearning className="*:stroke-neutral-100 w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
          <div>
            <h4 className="text-lg font-medium xl:text-xl">
              Gamified Dynamic Risk Scoring
            </h4>
            <p className="text-neutral-200 lg:pt-2">
              Dynamically adjust risk scores based on user behavior and market
              conditions while rewarding risk reduction and community
              contributions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
