import React from "react";

const ProductsData = [

]

function Products() {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className=" mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-[#F4511F]">Best Saler Products for you</p>
          <h1 className="text-3xl font-bold"> Products</h1>
          <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet,  adipisicing elit. consectetur adipisicing elit. Similique velit id mollitia .</p>
        </div>

        <div>
            <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                {ProductsData.map((items)=>(
                    <div>
                        Hello
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
};

export default Products;
