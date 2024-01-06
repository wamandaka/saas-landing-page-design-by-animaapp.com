import UserFeedbackImg from "../assets/User Feedback Image.svg"

const UserFeedback = () => {
  return (
    <>
      <div className="w-full px-5 mx-auto py-12 md:px-10 lg:px-52">
        <div className="w-full bg-secondary rounded-xl flex flex-col text-base-100 items-center lg:items-start lg:px-40">
          <p className="py-20 text-2xl text-center font-semibold leading-10 w-64 md:w-full lg:text-start">
            “Wallet is a great product! All of my most important information is
            there - credit cards, transit cards, boarding passes, tickets, and
            more. And I don&apos;t need to worry because it&apos;s all in one place!
            thanks!”
          </p>
          <div className="flex items-center mb-20 gap-5 w-64 justify-center lg:justify-start">
            <img src={UserFeedbackImg} alt="" />
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold text-base-100 text-opacity-40">Johnny Owens</p>
              <p className="text-transparent bg-black bg-clip-text">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFeedback;
