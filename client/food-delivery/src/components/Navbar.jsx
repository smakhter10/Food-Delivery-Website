import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className=" bg-[#FFF] w-full md:w-auto  md:flex justify-between items-center md:h-[65px]  mb-10">
      <img src="images/logo.png" className="w-[94px] h-[56px]" />

      <div
        onClick={() => setOpen(!open)}
        className="absolute right-10 top-10 text-3xl md:hidden "
      >
        {open ? <IoMenu /> : <IoClose />}
      </div>

      <div
        className={` bg-white absolute md:static flex flex-col md:flex-row pt-12 md:top-0  w-full md:ml-96 md:z-auto z-[1] transition-all duration-300 ease-in ${
          open ? "top-[-420px]" : "top-20 opacity-100"
        }`}
      >
        <Link
          to="/"
          className="ml-4 pb-4 text-sm font-semibold hover:text-orange-600"
        >
          HOME
        </Link>
        <Link
          to="/menu"
          className="ml-4 pb-4 md:ml-20 text-sm font-semibold hover:text-orange-600"
        >
          MENU
        </Link>
        <Link
          to="/service"
          className="ml-4 pb-4 md:ml-20 text-sm font-semibold hover:text-orange-600"
        >
          SERVICE
        </Link>
        <Link
          to="/shop"
          className="ml-4 pb-4 md:ml-20 text-sm font-semibold hover:text-orange-600"
        >
          SHOP
        </Link>

        <Link
          to="/login"
          className="ml-4 pb-4 md:ml-20 text-sm font-semibold hover:text-orange-600"
        >
          LOG IN
        </Link>

        <div className="top-40 md:top-0 flex gap-3 mr-3 items-center w-60 h-10  rounded-lg shadow-xl md:ml-auto mb-10 md:mb-auto">
          <IoIosSearch className="w-[25px] h-[26px] ml-2" />
          <p className="text-sm">Search</p>
          <div className="flex items-center ml-20">
            <span className=" h-[27px] border-l-2 border-a"></span>
            <LuShoppingBag className="w-[21px] h-[23px] mx-5" />
            <div className="w-[15px] h-[15px] bg-[#F48E28] rounded-full flex items-center justify-center text-xs text-[#FFF] shadow-[0_0_22px_rgba(204,0,0,0.80)] absolute translate-x-[35px] translate-y-[-10px]">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
