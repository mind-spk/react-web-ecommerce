import React from "react";
import { FcShop } from "react-icons/fc";
import { Link } from "react-router-dom";
import Button from "../../layouts/Button";
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="bg-gray-500/10 w-full ">
      <div className="flex flex-row justify-between p-5 md:px32 px-5 bg-white/10 shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer">
          <span>
            <FcShop size={32} />
          </span>
          <h1 className="text-xl font-semibold ml-3 text-[#F4511F] ">
            MaShopsy
          </h1>
        </div>

        <nav className=" hidden md:flex flex-row items-center text-lg font-semibold gap-8">
          <Link to="home" className=" hover:text-[#F4511F] cursor-pointer">
            Home
          </Link>
          <Link to="hotdeals" className="hover:text-[#F4511F] cursor-pointer">
            Hot Deals
          </Link>
          <Link to="special" className="hover:text-[#F4511F] cursor-pointer">
            Special
          </Link>
          <Link to="menu" className="hover:text-[#F4511F] cursor-pointer">
            Category
          </Link>
          <Link to="review" className="hover:text-[#F4511F] cursor-pointer">
            Reviews
          </Link>

          <div className=" flex justify-between items-center gap-4">
            <div className=" relative group  hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="text-wrap rounded-full group-hover:w-[300px] w-[200px] sm:w-[200px]  placeholder:p-6 border-gray-300 focus:outline-none focus:border-1 focus:border-[#F4511F]"
              />
              <IoSearchOutline className="text-gray-500 group-hover:text-[#F4511F] absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-[#F4511F]/60 relative bg-gradient-to-r from-[#F4511F] to-secondary transition-all  duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <span className=" absolute rounded-full w-[23px] h-[23px] bg-red-600 -top-[15px] -right-[7px] text-white text-center text-[12px] ">
                1
              </span>
              <FaCartShopping />
            </button>

            <button className=" p-2 rounded">🌙</button>

            <Button title="Login" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
