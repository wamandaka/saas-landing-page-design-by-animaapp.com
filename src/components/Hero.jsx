/* eslint-disable no-unused-vars */
import React from "react";
import Image from "../assets/Image.png";

const Hero = () => {
  return (
    <>
      <div className="w-full flex flex-col text-center items-center px-5 py-20 md:flex-row md:px-16 md:gap-5 md:items-start lg:px-52">
        <div className="md:w-1/2 md:text-start">
          <h1 className="text-[40px] font-semibold text-white mb-8 md:mb-5 lg:text-6xl lg:leading-[90px] lg:mb-10">
            SaaS Landing Page Template
          </h1>
          <p className="text-lg mb-20 leading-8 font-thin md:mb-10 lg:opacity-40 lg:mb-14">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
          <button className="btn btn-primary font-normal text-lg w-44 rounded-2xl mb-16">
            Get Started
          </button>
        </div>
        <div className="bg-[#333] rounded-xl md:w-1/2 lg:w-[500px] lg:h-[446px]">
          <img src={Image} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
