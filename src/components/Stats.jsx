import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="px-4 text-sm py-20 md:px-10 lg:px-20 lg:py-20 lg:text-base xl:py-32 xl:px-[7.5rem]">
      <p className="font-extralight italic text-center lg:text-lg">
        Did you know that?
      </p>
      <div className="mt-10 grid gap-20 md:px-16 lg:px-28 xl:px-40">
        <h4 className="text-lg font-medium text-center leading-7 md:text-xl md:leading-8 xl:text-2xl xl:leading-10">
          A 2023 PwC report highlights that 60% of insurers face slow claims
          processing and low customer satisfaction. Scalability, Opaque Policy
          Management, and Limited SME access further hinder growth and
          transparency in the insurance sector, leaving a gap for ethical,
          efficient, and compliant solutions.
        </h4>
        <div className="flex justify-between md:px-12 lg:px-16 xl:px-24">
          <div className="flex flex-col justify-center items-center gap-1 lg:gap-2">
            <h3 className="text-4xl text-primary-100 font-medium lg:text-5xl xl:text-6xl">
              <CountUp
                start={0}
                end={60}
                duration={4}
                separator=","
                suffix="%"
                scrollSpyOnce={true}
                enableScrollSpy={true}
              />
            </h3>
            <p className="text-neutral-100 text-xs md:text-sm lg:text-base">
            Slow Claims Processing and Low Customer Satisfaction
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 lg:gap-2">
            <h3 className="text-4xl text-primary-100 font-medium lg:text-5xl xl:text-6xl">
              <CountUp
                start={0}
                end={50}
                duration={4}
                separator=","
                suffix="%"
                scrollSpyOnce={true}
                enableScrollSpy={true}
              />
            </h3>
            <p className="text-neutral-100 text-xs md:text-sm lg:text-base">
            Limited SME Access to Insurance
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 lg:gap-2">
            <h3 className="text-4xl text-primary-100 font-medium lg:text-5xl xl:text-6xl">
              <CountUp
                start={0}
                end={18}
                duration={4}
                separator=","
                suffix="%"
                scrollSpyOnce={true}
                enableScrollSpy={true}
              />
            </h3>
            <p className="text-neutral-100 text-xs md:text-sm lg:text-base">
            Opportunity for Ethical and Efficient Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
