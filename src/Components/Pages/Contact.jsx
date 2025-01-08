import React from "react";
import { assests } from "../../assets/assets";
import BlogItem from "../BlogList/BlogItem";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
      <div className="container ">
        <div className="w-full  rounded-md bg-[#e8e8ea] p-5 space-y-3">
          <div className="flex justify-center items-center gap-3">
            <div>
              <img src={assests.Hero_profileImg1} alt="" className="w-12" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#181a2a]">
                Jonathan Doe
              </p>
              <p className="text-sm text-[#3b3b4a]">Collaborator & Editor</p>
            </div>
          </div>

          <p className="text-center text-sm mx-auto text-[#3b3b4a] xl:w-[550px] ">
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives
          </p>
        </div>

        <p className="font-semibold pt-3">Latest Post</p>
        <div className="pt-4">
          <BlogItem />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
