import React from "react";
// import servicesBg from "../assets/services-bg.jpg";
import servicesInfo from "../assets/services-info.jpg";

const Services = () => {
  return (
    <div
      className="h-[120vh] flex justify-center overflow-x-hidden"
      style={{ justifyContent: "center" }}
    >

      {/* <img
        src={servicesBg}
        alt=" home-page-img"
        className=" bg-cover sm:h-[120vh] w-full "
      /> */}
      <div
        className=" absolute h-full grid items-center  bg-white sm:grid-cols-10"
        style={{ justifyItems: "center" }}
      >
        <div className="sm:col-span-4 flex flex-col items-start" style={{ paddingLeft: "2rem" }}>
          <h1 className="font-bold sm:text-8xl text-3xl sm:p-5 p-2 self-start">
            MODERN FURNITURE
          </h1>
          <h2 className="collection sm:text-8xl text-2xl">Collections</h2>
          <p className="sm:text-xl text-sm p-4  text-black">
            Explore our carefully curated modern furniture collection designed
            to elevate your living spaces. Discover a blend of sleek designs,
            premium materials, and timeless craftsmanship that perfectly
            balances aesthetics and functionality.
          </p>
          <button
            class="relative m-[5px] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            style={{ marginLeft: "15px" }}
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-700 rounded-md uppercase group-hover:bg-opacity-0">
              buy now
            </span>
          </button>
        </div>
        <div className="sm:col-span-2"></div>
        <div className=" sm:w-[60vw] sm:px-5 sm:col-span-4">
          <img
            src={servicesInfo}
            alt="servicesInfo"
            className=""
          />
          
        </div>
      </div>
    </div>
  );
};

export default Services;
