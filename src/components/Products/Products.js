import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { ImAlarm } from "react-icons/im";
import Countdown from 'react-countdown';

const productsData = [
  {
    discount: "-35%",
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "AK-900 Wired Keyboard",
    price: "$960",
    originalPrice: "$1160",
    rating: "★★★★★",
    reviews: "(75)",
  },
  {
    discount: "-35%",
    imageUrl: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "AK-900 Wired Keyboard",
    price: "$960",
    originalPrice: "$1160",
    rating: "★★★★★",
    reviews: "(75)",
  },
  {
    discount: "-30%",
    imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    originalPrice: "$400",
    rating: "★★★★★",
    reviews: "(99)"
  },
  {
    discount: "-25%",
    imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "S-Series Comfort Chair",
    price: "$375",
    originalPrice: "$400",
    rating: "★★★★★",
    reviews: "(99)"
  }
];

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex space-x-2 text-center">
      <div>
        <span className="block text-lg font-bold">Days</span>
        <span className="block text-2xl font-bold">{days}</span>
      </div>
      <div>
        <span className="block text-lg font-bold">Hours</span>
        <span className="block text-2xl font-bold">{hours}</span>
      </div>
      <div>
        <span className="block text-lg font-bold">Minutes</span>
        <span className="block text-2xl font-bold">{minutes}</span>
      </div>
      <div>
        <span className="block text-lg font-bold">Seconds</span>
        <span className="block text-2xl font-bold">{seconds}</span>
      </div>
    </div>
  );
};


function Products() {
  return (
    <div className="flex justify-center items-center mt-14 mb-12">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4 ">
          <div className="flex items-center  gap-11">
           <div className="flex items-center justify-center gap-3">
          <ImAlarm className="text-[36px]"/>
            <h2 className="text-xl font-bold text-[#DB4444]">
              Today's <span className="text-primary">Deals</span>
            </h2>
           </div>

            <div className="flex  justify-center items-center  gap-8 text-center">
            <Countdown date={Date.now() + 50000000} renderer={renderer} />
            </div>
          </div>


        </div>
        <h3 className="text-2xl font-bold mb-6">Flash Sales</h3>
        <div className="flex items-center gap-[55px] overflow-x-auto">
          <button className="bg-red-200  p-2 rounded-full">
           <GrFormPrevious/>
          </button>
           {productsData.map((product, index)=>(
            <ProductCard key={index} {...product} />
           ))}
          <button className="bg-red-200 p-2 rounded-full">
            <GrFormNext/>
          </button>
        </div>
        <div className="text-center mt-10">
          <button className="px-6 py-1 border-2 border-[#F4511F] text-[#F4511F] hover:bg-[#F4511F] hover:text-white transition-all rounded-full">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
