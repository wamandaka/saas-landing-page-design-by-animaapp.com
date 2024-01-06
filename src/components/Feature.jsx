import CardIcon from "../assets/Cards icon.svg";
import CoinIcon from "../assets/Coin icon.svg";
import PurseIcon from "../assets/Purse icon.svg";
const Feature = () => {
  return (
    <>
      <div className="w-full px-8 py-10 flex flex-col items-center text-center justify-center md:flex-row lg:px-52">
        <div className="w-full flex flex-col items-center md:h-80">
          <img src={CardIcon} alt="" className="w-20 mb-12 h-20" />
          <h1 className="text-lg font-semibold mb-4 text-white">
            Customizeable card
          </h1>
          <p className="text-lg w-64 leading-8">
            Custom your own card for your exact incomes and expenses needs.
          </p>
        </div>
        <div className="w-full flex flex-col items-center pt-12 md:pt-0 md:h-80">
          <img src={CoinIcon} alt="" className="w-20 mb-12 h-20" />
          <h1 className="text-lg font-semibold mb-4 text-white">
            No payment fee
          </h1>
          <p className="text-lg w-64 leading-8">
            Transfer your payment all over the world with no payment fee.
          </p>
        </div>
        <div className="w-full flex flex-col items-center pt-12 md:pt-0 md:h-80">
          <img src={PurseIcon} alt="" className="w-16 mb-12 h-20" />
          <h1 className="text-lg font-semibold mb-4 text-white">
            All in one place
          </h1>
          <p className="text-lg w-64 leading-8">
            The right place to keep your credit and debit cards, boarding passes
            & more.
          </p>
        </div>
      </div>
    </>
  );
};

export default Feature;
