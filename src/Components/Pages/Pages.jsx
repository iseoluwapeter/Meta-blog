import React from "react";
import { assests } from "../../assets/assets";
import BlogItem from "../BlogList/BlogItem";
import Footer from "../Footer/Footer";
import Ads from "../Ads";
import Navbar from "../Navbar/Navbar";

const Pages = () => {
  return (
    <>
    <Navbar/>
      <div className="container flex flex-col ">
        {/* title  */}
        <div className="text-center pb-5">
          <h5 className="font-semibold text-xl">Page Title</h5>

          <h2 className="pe-3">
            Home <span className="border-l-2 ps-3">Link</span>
          </h2>
        </div>

        <div className="w-full pb-10">
          <img src={assests.Pages_hero} alt="" className="w-full" />
        </div>
        <BlogItem />
        <div className="flex justify-center mx-auto items-center border w-[150px] hover:bg-slate-600 hover:text-white duration-500 p-2 rounded  text-gray-500 mb-5">
          <button className=" ">Load More</button>
        </div>

        <Ads/>
      </div>
      <Footer />
    </>
  );
};

export default Pages;
