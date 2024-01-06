import CTAImg from "../assets/GIF.svg";

const ClickToAction = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center px-5 mx-auto text-center py-12 md:flex-row md:items-start md:text-start md:gap-5 lg:px-52">
        <div className="md:w-1/2 lg:w-[500px]">
          <h1 className="text-[40px] font-semibold text-white mb-8 w-72 md:text-5xl md:leading-[70px] md:mb-3 lg:text-6xl lg:leading-[90px] lg:mb-8 lg:w-full">
            Question? Let&apos;s talk.
          </h1>
          <p className="text-lg mb-10 leading-8 w-72 md:mb-5 lg:mb-10 lg:w-full">
            Contact us through our 24/7 live chat. We’re always happy to help!
          </p>
          <button className="btn btn-primary font-normal text-lg w-44 rounded-2xl mb-16">
            Get Started
          </button>
        </div>
        <div className=" md:w-1/2 lg:w-[500px]">
          <img src={CTAImg} alt="" className="lg:w-[500px] lg:h-[400px]" />
        </div>
      </div>
    </>
  );
};

export default ClickToAction;
