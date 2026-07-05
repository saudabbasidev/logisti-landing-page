const ResultSection = () => {
  const data = [
    {
      t1: "15K+",
      t2: "Satisfied Customers",
    },
    {
      t1: "25+",
      t2: "Awards Won",
    },
    {
      t1: "10+",
      t2: "Year Experience",
    },
    {
      t1: "20K+",
      t2: "Package Delivered",
    },
  ];
  return (
    <>
      <section className="py-20">
        <div className="flex justify-between sm:items-center sm:gap-10 mt-20 pb-10  sm:px-10 px-2">
          <h1 className="font-semibold md:text-[40px] text-3xl max-sm:text-2xl ">
            Our All Logistic
            <br />
            <span className="bg-yellow-500 text-gray-900">Achievements</span>
          </h1>
          <p className="font-thin text-gray-300 text-sm whitespace-normal w-60">
            Logistic services are all the elements of your supply chain, the
            factory of the end customer
          </p>
        </div>
        <div className="relative" data-aos="fade-up">
          <img
            src="/container.png"
            alt=""
            className="object-contain max-md:w-3xl lg:max-w-5.5xl lg:px-12 mx-auto p-5 mt-3 brightness-80"
          />

          {/* Bottom fade */}
          <div className="pointer-events-none absolute bottom-5 left-0 h-80 w-full bg-linear-to-t from-[#0e121a] " />
        </div>

        <section className="flex px-10 gap-3 max-md:gap-10 max-md:flex-wrap items-center justify-center">
          {data.map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-linear-to-b from-gray-800 to-[#0F131B] text-yellow-500 p-10 rounded-2xl max-md:max-w-60 w-100 h-30"
            >
              <h1 className="font-bold text-5xl">{item.t1}</h1>
              <p className="font-light">{item.t2}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default ResultSection;
