import React from "react";
import "react-slideshow-image/dist/styles.css";
import Image1 from "../../assets/img/photo-1526178613552-2b45c6c302f0.avif";
import Image2 from "../../assets/img/photo-1542992015-4a0b729b1385.avif";
import Image3 from "../../assets/img/photo-1607083206869-4c7672e72a8a.avif";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "50% off on all Women's Wear",
    description:
      "lWho's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function Hero() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center">
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings} className="mt-10">
          {ImageList.map((item) => (
            <div key={item.id}>
              <div className=" grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left oeder-2 sm:order-1 relative ">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {item.title}
                  </h1>
                  <p className="text-sm">{item.description}</p>
                  <div>
                    <button className="bg-[#F4511F] hover:scale-105 duration-200 text-white py-2 px-4 rounded-3xl">
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div>
                    <img
                      src={item.img}
                      alt=""
                      className="w-[200px] sm:h-[200px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
