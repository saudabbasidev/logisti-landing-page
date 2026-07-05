const FooterSection = () => {
  return (
    <>
      <section>
        <div className="flex justify-between items-center sm:gap-10 px-10 mt-20 pb-10">
          <p className="font-thin text-gray-300 text-sm whitespace-normal w-60">
            Logistic services are all the elements of your supply chain, the
            factory of the end customer
          </p>
          <h1 className="font-semibold md:text-[40px] text-3xl max-sm:text-2xl ">
            Some of Our
            <br />
            Awesome
            <span className="bg-yellow-500 text-gray-900">Partners</span>
          </h1>
        </div>
        <div>
          <ul className="grayscale flex items-center justify-center max-sm:gap-8 gap-20 mt-15">
            <img
              className="object-contain w-[14%]"
              src="https://images.seeklogo.com/logo-png/32/2/deliveroo-logo-png_seeklogo-329512.png"
              alt=""
            />
            <img
              className="object-contain w-[14%]"
              src="https://logodownload.org/wp-content/uploads/2018/03/logitech-logo-01.png"
              alt=""
            />
            <img
              className="object-contain w-[14%]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/960px-Salesforce.com_logo.svg.png"
              alt=""
            />
            <img
              className="object-contain w-[14%]"
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/TCS_Pakistan_logo_%282024%29.png"
              alt=""
            />
          </ul>
        </div>
        <h1 className="flex justify-center items-center py-20">
          <img src="/logo.png" alt="" />
        </h1>

        <footer className="flex justify-center items-center max-sm:text-center max-sm:flex-col gap-20 pb-20">
          <div className="flex font-extralight flex-col gap-1 w-[20%]">
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
            <a href="">Trendy </a>
          </div>
          <div className=" space-y-2 flex flex-col items-center w-[20%] justify-center">
            <h1 className=" underline underline-offset-4 text-left">
              ourlogistics@gmail.com
            </h1>{" "}
            <h1>111 - 222 - 333</h1>{" "}
          </div>
          <div className="flex gap-1 flex-col font-extralight underline w-[20%] underline-offset-4 md:text-right">
            <a href="">Linkedin</a>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
          </div>
        </footer>
      </section>
    </>
  );
};

export default FooterSection;
