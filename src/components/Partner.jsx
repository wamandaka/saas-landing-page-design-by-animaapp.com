/* eslint-disable no-unused-vars */
import React from "react";
import Accenture from "../assets/Accenture.png";
import Apple from "../assets/apple.svg";
import Microsoft from "../assets/Microsoft.png";
import Google from "../assets/Google.png";
import BearingPoint from "../assets/BearingPoint.png";

const Partner = () => {
  return (
    <>
      {/* <div className="divider"></div> */}
      <div className="px-5">
        <div className="w-full flex flex-wrap items-center gap-4 justify-center border-y-2 py-12 border-white border-opacity-20 md:gap-6 lg:gap-20">
          <div className="w-28 grayscale hover:grayscale-0 md:w-24 lg:w-32">
            <img src={Accenture} alt="" />
          </div>
          <div className="w-10 grayscale hover:grayscale-0 md:w-8 lg:w-12">
            <img src={Apple} alt="" />
          </div>
          <div className="w-40 grayscale hover:grayscale-0 md:w-36 lg:w-48">
            <img src={Microsoft} alt="" />
          </div>
          <div className="w-28 grayscale hover:grayscale-0 md:w-24 lg:w-32">
            <img src={Google} alt="" />
          </div>
          <div className="w-52 grayscale hover:grayscale-0 md:w-48 lg:w-60">
            <img src={BearingPoint} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="divider"></div> */}
    </>
  );
};

export default Partner;
