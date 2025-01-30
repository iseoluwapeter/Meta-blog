import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { assests } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-[#f6f6f7] ">
      <div className="container pt-16 pb-14   ">
        <div className=" flex flex-col xl:flex-row gap-11  w-full  ">
          {/* about  */}
          <div className="md:w-96 space-y-4  ">
            <p className="text-[#181a2a] font-semibold">About</p>
            <p className="text-[#696a75] font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ex
              blanditiis fuga sequi animi ea maxime, unde error facere
              consequuntur itaque sapiente, illo eligendi nemo?
            </p>
            <p className="text-[#181a2a] font-semibold">
              Email:{" "}
              <span className="text-[#696a75] font-normal">
                info@jstemplate.net
              </span>
            </p>
            <p className="text-[#181a2a] font-semibold">
              Phone:{" "}
              <span className="text-[#696a75] font-normal">
                880 123 456 789
              </span>
            </p>
          </div>

          {/* quick link and category */}

          <div className="flex gap-32  xl:ms-28  ">
            <div className="">
              <div className="space-y-4 w-[90px]  ">
                <p className="text-[#181a2a] font-semibold ">Quick Link</p>
                <div className=" text-[#696a75] font-normal ">
                  <ul className="flex flex-col pb-2 ">
                    <a href="#Header" className="hover:text-[#181a2a]">
                      Home
                    </a>
                  </ul>

                  <ul className="flex flex-col pb-2 ">
                    <a href="#About" className="hover:text-[#181a2a]">
                      About
                    </a>
                  </ul>

                  <ul className="flex flex-col pb-2">
                    <a href="#blog" className="hover:text-[#181a2a]">
                      Blog
                    </a>
                  </ul>

                  <ul className="flex flex-col pb-2 ">
                    <a href="#archived" className="hover:text-[#181a2a]">
                      Archived
                    </a>
                  </ul>

                  <ul className="flex flex-col pb-2 ">
                    <a href="#About" className="hover:text-[#181a2a]">
                      Author
                    </a>
                  </ul>

                  <ul className="flex flex-col  pb-2 ">
                    <a href="#About" className="hover:text-[#181a2a]">
                      Contact
                    </a>
                  </ul>
                </div>
              </div>
            </div>

            {/* category  */}
            <div className="space-y-4   ">
              <p className="text-[#181a2a] font-semibold  ">Category</p>
              <div className=" text-[#696a75] font-normal ">
                <ul className="flex flex-col pb-2 ">
                  <a href="#Header" className="hover:text-[#181a2a]">
                    Lifestyle
                  </a>
                </ul>

                <ul className="flex flex-col  pb-2 ">
                  <a href="#About" className="hover:text-[#181a2a]">
                    Technology
                  </a>
                </ul>

                <ul className="flex flex-col pb-2">
                  <a href="#blog" className="hover:text-[#181a2a]">
                    Travel
                  </a>
                </ul>

                <ul className="flex flex-col  pb-2">
                  <a href="#archived" className="hover:text-[#181a2a]">
                    Business
                  </a>
                </ul>

                <ul className="flex flex-col pb-2 ">
                  <a href="#About" className="hover:text-[#181a2a]">
                    Economy
                  </a>
                </ul>

                <ul className="flex flex-col pb-2 ">
                  <a href="#About" className="hover:text-[#181a2a]">
                    Sports
                  </a>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter  */}

          <div className="xl:ms-28">
            <div className="items-center text-center   ">
              <div className="bg-[#ffffff]  rounded p-[32px] gap-[30px] space-y-3 ">
                <p className="text-center font-semibold text-[#181a2a]">
                  Weekly Newsletter
                </p>
                <p className="text-gray-400">
                  Get blog articles and offers via email
                </p>
                <input
                  type="email"
                  className=" h-[48px] border rounded w-full p-3 "
                  placeholder="Your email "
                ></input>
                {/* <img
                  src={assests.Mail}
                  alt=""
                  className="absolute -translate-y-12 right-16 md:hidden lg:right-32 xl:right-20 gap-[40px] w-7"
                /> */}
                <button className=" rounded bg-[#4b6bfb] text-white  py-3 w-full text-center">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr className="bg-gray-500 " />
      </div>

      {/* footer nav  */}

      <div className="container flex flex-col md:flex-row text-sm md:text-lg gap-2 md:gap-5 justify-between py-5">
        <div className="flex items-center gap-2">
          <div className="w-10 md:w-20">
            <img src={assests.Logo1} alt="" />
          </div>

          <div className=" ">
            <p className="font-normal text-lg md:text-4xl">
              Meta<span className="font-bold">Blog</span>
            </p>
            <p className=" md:text-sm">
              JS Template 2023. All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-center text-sm ">
          <a href="">Terms of Use</a>
          <a href="">Privacy Policy</a>
          <a href="">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
