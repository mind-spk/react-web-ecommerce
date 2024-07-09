import React from "react";
import { BiRestaurant } from "react-icons/bi";
import { Link } from "react-router-dom";
import Button from "./layouts/Button";

function Navbar() {
  return (
    <div className=" fixed w-full">
      <div className="flex flex-row justify-between p-5 md:px32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer">
          <span>
            <BiRestaurant size={32}/>
          </span>
          <h1 className="text-xl font-semibold ">Food Web</h1>
        </div>

        <nav className=" hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link to="home" className=" hover:text-[#F4511F] cursor-pointer">
            Home
          </Link>
          <Link to="dishes" className="hover:text-[#F4511F] cursor-pointer">
            Dishes
          </Link>
          <Link to="about" className="hover:text-[#F4511F] cursor-pointer">
            About
          </Link>
          <Link to="menu" className="hover:text-[#F4511F] cursor-pointer">
            Menu
          </Link>
          <Link to="review" className="hover:text-[#F4511F] cursor-pointer">
            Reviews
          </Link>

          <Button title="Login"/>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
