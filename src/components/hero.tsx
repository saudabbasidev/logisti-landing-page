

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col justify-center">
        <div className="flex gap-5 justify-between max-xs:px-2  max-md:flex-col lg:h-65">
          <h1 className="text-6xl  max-sm:text-4xl  font-extrabold pt-10 px-5 ">
            Grow Your <span className="text-yellow-500">Business</span>
            <br /> With Our
            <span className="text-yellow-500"> Logistic</span>
            <br /> Service
          </h1>
          <p className="font-thin text-sm md:w-50 w-60 md:pt-13 px-5 text-gray-300">
            Once your business gets last mile delivery right, it becomes the
            hallmark of best service
          </p>
        </div>

        <div data-aos="fade-up">
          <img
            src="/truck.png"
            alt=""
            className="object-contain md:max-w-3xl mx-auto p-5"
          />
        </div>
      </section>

    
        <div className="flex justify-between sm:items-center sm:gap-10 sm:px-10 px-2 mt-20 pb-10">
          <p className="font-thin text-gray-300 text-sm max-sm:text-xs whitespace-normal w-60">
            Cargo, Also known as freight, refers to goods or produce being
            transported from one place to another - by water, air or land.
          </p>
          <h1 className="font-semibold md:text-[40px] text-3xl max-sm:text-2xl ">
            Our All <span className="bg-yellow-500 text-gray-900">Solution</span>{" "}
            For <br /> Your Business
          </h1>
        </div>




      
     
    </>
  );
};

export default HeroSection;
