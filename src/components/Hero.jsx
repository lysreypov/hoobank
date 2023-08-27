import React from "react";

import styles from "../styles";
import { discount, robot } from "../assets";
import { GetStarted } from "../components";

const Hero = () => {
  return (
    <section
      className={`flex md:flex-row flex-col ${styles.paddingY} lg:py-0 text-gray-300`}
    >
      <div
        className={`flex flex-col ${styles.flexStart} flex-1 xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient ">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white"> 1 Month </span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] ss:leading-[100px] leading-[75px] text-[52px] text-white">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[52px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identift a credit cards most
          likely to fit your needs. We examine annual percentage rates, annual
          fees.
        </p>
      </div>

      <div
        className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="Robot"
          className="w-full h-full object-cover relatice z-[5]"
        />
        <div className="absolute z-0 top-0 w-[40%] h-[35%] pink__gradient"></div>
        <div className="absolute z-[1] bottom-40 w-[80%] h-[70%] rounded-full white__gradient"></div>
        <div className="absolute z-[1] bottom-20 right-20 w-[50%] h-[50%] rounded-full blue__gradient"></div>
      </div>

      <div className={`${styles.flexCenter} ss:hidden `}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
