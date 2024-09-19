import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

function Categories() {
  return (
    <div className=" bg-slate-100 w-full h-screen mt-14 mb-12 ">
      <div className="flex flex-col gap-5">
        <div className="text-[#DB4444] font-semibold text-[16px]">Categories</div>

        <div className="flex justify-between">
          <div className=" font-semibold text-[36px]">Browse By Category</div>
          <div className=" flex gap-3">
            <button className="w-[46px] h-[46px] rounded-full p-2 bg-white text-center">
              <GrFormPreviousLink   className="text-[30px] text-center"/>
            </button>
            <button className="w-[46px] h-[46px] rounded-full p-2 bg-white text-center">
              <GrFormNextLink  className="text-[30px] text-center"/>
            </button>
          </div>
        </div>

        <div className="flex  justify-around mt-10">
          <button className="w-[170px] h-[145px] bg-white ">#</button>
          <button className="w-[170px] h-[145px] bg-white ">#</button>
          <button className="w-[170px] h-[145px] bg-white ">#</button>
          <button className="w-[170px] h-[145px] bg-white ">#</button>
          <button className="w-[170px] h-[145px] bg-white ">#</button>
          <button className="w-[170px] h-[145px] bg-white ">#</button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
