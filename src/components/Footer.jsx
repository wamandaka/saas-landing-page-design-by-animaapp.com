const Footer = () => {
  return (
    <>
      <div className="w-full px-5 mx-auto flex flex-col py-12 md:px-8 ">
        <div className="border-t border-white border-opacity-20 ">
          <h1 className="text-white text-2xl font-semibold mb-8 md:text-3xl lg:mb-0 md:pt-7 lg:pt-14">
            Wallet
          </h1>
          <div className="md:flex flex-row-reverse justify-between">
            <div className="">
              <p className="mb-5 text-lg text-white">
                Updates right to your inbox
              </p>
              <div className="lg:flex lg:gap-5">
                <input
                  type="text"
                  placeholder="Email Address..."
                  className="input input-bordered w-full mb-5 lg:w-80"
                />
                <button className="btn btn-secondary font-thin text-lg rounded-2xl mb-10 w-full lg:w-44 lg:mb-0">
                  Send
                </button>
              </div>
            </div>
            <ul className="flex flex-col gap-3 text-white font-semibold md:text-lg md:justify-evenly lg:flex-row-reverse lg:items-end lg:gap-10">
              <li>
                <a href="">Term of use</a>
              </li>
              <li>
                <a href="">Cookies policy</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <p>© Wallet 2023</p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
