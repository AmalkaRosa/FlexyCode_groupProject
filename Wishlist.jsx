import React from "react";
import Navbar from "./Navbar";
import star from "../components/images/star.png";
import img2 from "../components/images/Img1.png";
import arrow from "../components/images/arrow.png";
import shoe3 from "../components/images/shoe3.png";
import shoe4 from "../components/images/shoe4.png";
import shoe5 from "../components/images/shoe5.png";

const Wishlist = () => {
  return (
    <>
      {/*Navbar*/}
      <Navbar />

      {/*Product list*/}
      <div className="justify-center text-center items-center flex flex-col">
        {/*Heading*/}
        <h1 className="text5 text-slate-800 text-4xl font-bold mt-4 sm:mt-6 sm:text-5xl lg:text-6xl">
          Wishlist
        </h1>
        <p className="text5 text-base font-medium mt-2 sm:text-base lg:text-lg">
          Get in on the trend with our curated selection of best-selling styles.
        </p>
        <hr className="border border-spacing-4 border-b-slate-700 lg:w-[700px] w-[430px]" />

        {/*Products*/}
        <div className=" justify-center items-center mt-6 flex flex-col sm:flex-row md:flex-row gap-8 md:gap-10">
          <div className="bg-[#D9D9D9] rounded-xl w-[310px] h-auto sm:w-[160px] md:w-[180px] lg:w-[300px]">
            <img
              src={shoe5}
              alt="..."
              className="h-auto w-[290px] md:w-[280px] lg:w-[380px] mb-5"
            />

            <label className="font-semibold">name of the product</label>
            <label className="flex flex-row font-medium justify-center items-center">
              $38.99 | 5.0
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
            </label>

            <label className="flex flex-row font-medium justify-center items-center mt-2 mb-4">
              <button className="border border-spacing-3 bg-black text-white p-2 w-[150px] rounded-2xl">
                Add to Cart
              </button>
              <button className="border border-spacing-3 bg-red-600 text-white p-2 w-[100px] rounded-2xl">
                Delete
              </button>
            </label>
          </div>

          <div className="bg-[#D9D9D9] rounded-xl w-[310px] h-auto sm:w-[160px] md:w-[180px] lg:w-[300px]">
            <img
              src={shoe3}
              alt="..."
              className="h-auto w-[270px] md:w-[280px] lg:w-[380px] mb-5"
            />
            <label className="font-semibold">name of the product</label>
            <label className="flex flex-row font-medium justify-center items-center">
              $38.99 | 5.0
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
            </label>
            <label className="flex flex-row font-medium justify-center items-center mt-2 mb-4">
              <button className="border border-spacing-3 bg-black text-white p-2 w-[150px] rounded-2xl">
                Add to Cart
              </button>
              <button className="border border-spacing-3 bg-red-600 text-white p-2 w-[100px] rounded-2xl">
                Delete
              </button>
            </label>
          </div>

          <div className="bg-[#D9D9D9] rounded-xl w-[310px] h-auto sm:w-[160px] md:w-[180px] lg:w-[300px]">
            <img
              src={shoe4}
              alt="..."
              className="h-auto w-[290px] md:w-[280px] lg:w-[380px] mb-5"
            />
            <label className="font-semibold">name of the product</label>
            <label className="flex flex-row font-medium justify-center items-center">
              $38.99 | 5.0
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
            </label>
            <label className="flex flex-row font-medium justify-center items-center mt-2 mb-4">
              <button className="border border-spacing-3 bg-black text-white p-2 w-[150px] rounded-2xl">
                Add to Cart
              </button>
              <button className="border border-spacing-3 bg-red-600 text-white p-2 w-[100px] rounded-2xl">
                Delete
              </button>
            </label>
          </div>
        </div>

        <div className=" justify-center items-center mt-6 flex flex-col sm:flex-row md:flex-row gap-8 md:gap-10">
          <div className="bg-[#D9D9D9] rounded-xl w-[310px] h-auto sm:w-[160px] md:w-[180px] lg:w-[300px]">
            <img
              src={shoe5}
              alt="..."
              className="h-auto w-[290px] md:w-[280px] lg:w-[380px] mb-5"
            />

            <label className="font-semibold">name of the product</label>
            <label className="flex flex-row font-medium justify-center items-center">
              $38.99 | 5.0
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
            </label>

            <label className="flex flex-row font-medium justify-center items-center mt-2 mb-4">
              <button className="border border-spacing-3 bg-black text-white p-2 w-[150px] rounded-2xl">
                Add to Cart
              </button>
              <button className="border border-spacing-3 bg-red-600 text-white p-2 w-[100px] rounded-2xl">
                Delete
              </button>
            </label>
          </div>

          <div className="bg-[#D9D9D9] rounded-xl w-[310px] h-auto sm:w-[160px] md:w-[180px] lg:w-[300px]">
            <img
              src={shoe3}
              alt="..."
              className="h-auto w-[270px] md:w-[280px] lg:w-[380px] mb-5"
            />
            <label className="font-semibold">name of the product</label>
            <label className="flex flex-row font-medium justify-center items-center">
              $38.99 | 5.0
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
            </label>
            <label className="flex flex-row font-medium justify-center items-center mt-2 mb-4">
              <button className="border border-spacing-3 bg-black text-white p-2 w-[150px] rounded-2xl">
                Add to Cart
              </button>
              <button className="border border-spacing-3 bg-red-600 text-white p-2 w-[100px] rounded-2xl">
                Delete
              </button>
            </label>
          </div>

          <div className="bg-[#D9D9D9] rounded-xl w-[310px] h-auto sm:w-[160px] md:w-[180px] lg:w-[300px]">
            <img
              src={shoe4}
              alt="..."
              className="h-auto w-[290px] md:w-[280px] lg:w-[380px] mb-5"
            />
            <label className="font-semibold">name of the product</label>
            <label className="flex flex-row font-medium justify-center items-center">
              $38.99 | 5.0
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
              <img src={star} className="w-[18px] h-[18px] ml-1 mt-[1px]" />
            </label>
            <label className="flex flex-row font-medium justify-center items-center mt-2 mb-4">
              <button className="border border-spacing-3 bg-black text-white p-2 w-[150px] rounded-2xl">
                Add to Cart
              </button>
              <button className="border border-spacing-3 bg-red-600 text-white p-2 w-[100px] rounded-2xl">
                Delete
              </button>
            </label>
          </div>
        </div>

        {/* <button className="items-center text-xl text-slate-800  flex font-medium py-2 px-10 mt-8 sm:px-16 sm:py-3 border-4 border-slate-800">
          See more..
          <img src={arrow} className="w-[30px] h-auto" />
        </button> */}
      </div>
    </>
  );
};

export default Wishlist;
