const SubFooter = () => {
  return (
    <div className="px-4 text-sm pt-10 pb-16 md:px-10 lg:px-20 lg:py-20 lg:text-base xl:py-28 xl:px-[7.5rem]">
      <div>
        <h2 className="text-2xl font-semibold text-center leading-7 md:leading-8 md:w-3/5 md:mx-auto lg:text-3xl lg:w-2/3 xl:text-[2.438rem] xl:leading-tight xl:w-1/2">
          Stay ahead of the curve—be the first to hear about our launch!
        </h2>
        <button className="px-6 py-2.5 mx-auto flex mt-8 text-black-50 font-medium bg-primary-100 cursor-pointer rounded-lg transition duration-300 xl:hover:bg-primary-200">
          Stay Updated!
        </button>
      </div>
    </div>
  );
};

export default SubFooter;
