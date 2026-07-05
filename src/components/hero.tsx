

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col justify-center gap-12">
        <div className="flex gap-5 justify-between px-10  max-md:flex-col">
          <h1 className="text-6xl  max-sm:text-4xl  font-extrabold pt-30 px-5 ">
            Grow Your <span className="text-yellow-500">Business</span>
            <br /> With Our
            <span className="text-yellow-500"> Logistic</span>
            <br /> Service
          </h1>
          <p className="font-thin text-sm md:w-50 w-60 md:pt-33 px-5 text-gray-300">
            Once your business gets last mile delivery right, it becomes the
            hallmark of best service
          </p>
        </div>

        <div>
          <img
            src="/truck.png"
            alt=""
            className="object-contain md:max-w-3xl mx-auto p-5 mt-3"
          />
        </div>
      </section>

    
        <div className="flex justify-between items-center sm:gap-10 px-10 mt-20 pb-10">
          <p className="font-thin text-gray-300 text-sm whitespace-normal w-60">
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
