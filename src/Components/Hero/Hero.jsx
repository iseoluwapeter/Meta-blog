import React from "react";
import { assests } from "../../assets/assets";

const Hero = () => {
  return (
    <div className="container pb-16 w-full">
      <div className="relative">
        <img src={assests.Home_hero} alt="" className="w-full"/>
      </div>

      {/* <div className="container border absolute w-[416px] p-5 rounded-lg bg-white top-0 right-96 left-0 translate-y-96 space-y-3 shadow-xl">
        <p className="bg-blue-700 text-white p-1 rounded w-28 flex justify-center ">Technology</p>

        <p className="font-semibold text-2xl">
            The  Impact of Technology on the Workplace: How Technology is Changing
        </p>

        <div className="flex gap-3 text-gray-500 items-center">
            <img src={assests.Hero_profileImg1} alt="profileimg1" />

            <p>Jason Francico</p>
            <p>August 30,2023</p>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
