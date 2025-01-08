import React, { useState } from "react";
// import Search from '../../assets/search-outline.png'
import Switch from "../../assets/Swich.png";
import { navbarMenu } from "../MockData/data";
import { NavLink} from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { assests } from "../../assets/assets";
import { MdMenu } from "react-icons/md";
import ResponsiveNav from "./ResponsiveNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="my-4  bg-white sticky top-0  ">
      <div className="container flex justify-between items-center py-4 w-full ">
        {/* Logo section  */}
        <div>
          <img src={assests.Logo} alt="" />
        </div>

        {/* navbar menu section  */}

        <div className="hidden lg:block">
          <ul className="flex gap-5 ">
            {navbarMenu.map((item) => {
              return (
                <li key={item.id} className="hover:text-blue-900 transition-all duration-500">
                  <NavLink to={item.link}>{item.title}</NavLink>
                  {/* <a href={item.link}>{item.title}</a> */}
                </li>
              );
            })}
          </ul>
        </div>

        {/* search button section  */}
        <div className="hidden lg:flex  gap-[40px]">
          <div className="flex gap-[40px]">
            <form className="relative">
              <div className="relative">
                <input
                  type="search"
                  placeholder="search"
                  className="w-[166px] py-[8px] ps-[8px] pe-[16px] bg-[#f4f4f5] "
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 gap-[40px]">
                  <CiSearch />
                </button>
              </div>
            </form>
          </div>

          <div className="hidden lg:block">
            <img src={assests.Switch} alt="" className="w-16 " />
          </div>
        </div>

        {/* mobile hamburger menu section  */}
        <div
          className="lg:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MdMenu className="text-4xl" />
        </div>
      </div>

      
        {/* mobile side bar menu  */}
        <ResponsiveNav isOpen={isOpen} />
      
    </nav>
  );
};

export default Navbar;
