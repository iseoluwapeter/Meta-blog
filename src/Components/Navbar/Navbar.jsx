import React from "react";
import Logo from "../../assets/Logo.png";
// import Search from '../../assets/search-outline.png'
import Switch from '../../assets/Swich.png'
import { navbarMenu } from "../MockData/data";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="container py-5 flex justify-between">
      {/* Logo section  */}
      <div>
        <img src={Logo} alt="" />
      </div>

      {/* navbar menu section  */}
      <div className="hidden lg:block">
        <ul className="flex gap-5 ">
          {navbarMenu.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* search button section  */}
      <div className="flex gap-[40px]">
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

        <div>
          <img src={Switch} alt="" className="w-16" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
