import React from "react";
import { assests } from "../../assets/assets";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="container relative  ">
        <div className=" w-full h-100 ">
          <img src={assests.Hero_Img} alt="" className="w-full h-100 " />
        </div>

        <div className=" absolute -translate-y-12 translate-x-14 md:-translate-y-10 xl:-translate-y-1/2 md:translate-x- xl:translate-x-1/2 rounded-md  bg-[#fafafc] mx-auto w-[250px] md:w-[500px] xl:w-[736px] p-7 md:p-20">
          <form className="">
            <h2 className="font-medium md:font-semibold md:text-3xl text-[#32264d] pb-2 md:pb-5">
              Blog form
            </h2>{" "}
            <hr className=" pb-2 md:pb-5" />
            <label htmlFor="" className="pb-2 text-sm md:pb-5">
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 md:p-5 my-2 md:my-5 bg-[#fafafc] border border-[#e6e6f0] rounded"
            />
            <label htmlFor="" className="text-sm">
              Description
            </label>
            <input
              type="text"
              className="w-full  md:h-[168px] p-3 md:p-5 my-2 md:my-5 bg-[#fafafc] border border-[#e6e6f0] rounded"
            />
            <button className="w-full bg-[#4b4bfb] text-center text-white rounded-md p-2 md:p-5">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="absolute translate-y-80 md:translate-y-[700px] xl:translate-y-[500px]  w-full">
        <Footer />
      </div>
    </>
  );
};

export default Blog;
