import React from "react";
import { GrFavorite } from "react-icons/gr";

function ProductCard({
  discount,
  imageUrl,
  title,
  price,
  originalPrice,
  rating,
  reviews,
  isAddToCart,
}) {
  return (
    <div className="bg-[#F5F5F5] p-4 rounded-2xl shadow-md w-64 h-[350px] ">
      <div className="relative">
        <span className="bg-[#F4511F] absolute top-2 left-2  px-2 py-1 rounded-full text-xs">
          {discount}
        </span>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[200px] object-cover rounded-md mb-4"
        />
        <div className=" bg-white absolute top-2 right-2 flex flex-col items-center rounded-full  p-1">
          <button className="bg-muted text-muted-foreground p-1 rounded-full">
            <GrFavorite />
          </button>
        </div>
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <div className="flex items-center space-x-2 mb-2">
        <span className=" text-xl font-bold">{price}</span>
        <span className="text-muted line-through">{originalPrice}</span>
      </div>
      {isAddToCart && (
        <button className="w-full py-2 rounded-md">
          Add To Cart
        </button>
      )}
      <div className="flex items-center space-x-1 mt-2">
        <span className="text-yellow-500">{rating}</span>
        <span className="text-muted">{reviews}</span>
      </div>
    </div>
  );
}

export default ProductCard;
