import React from "react";
import servicesBg from "../assets/services-bg.jpg";
import servicesInfo from "../assets/services-info.jpg";

const Services = () => {
  return (
    <div
      className="w-[100vw] h-[100vh] flex justify-center"
      style={{ justifyContent: "center" }}
    >
      <img
        src={servicesBg}
        alt=" home-page-img"
        className="object-cover bg-cover h-full w-full"
      />
      <div
        className=" absolute w-full h-full grid items-center  sm:grid-cols-10"
        style={{ justifyItems: "center" }}
      >
        <div className="sm:col-span-4 flex flex-col items-start" style={{ paddingLeft: "2rem" }}>
          <h1 className="font-bold sm:text-5xl text-2xl p-5 self-start">
            MODERN FURNITURE
          </h1>
          <h2 className="collection">Collections</h2>
          <p className="sm:text-xl text-sm p-4 sm:-2 text-black">
            Explore our carefully curated modern furniture collection designed
            to elevate your living spaces. Discover a blend of sleek designs,
            premium materials, and timeless craftsmanship that perfectly
            balances aesthetics and functionality.
          </p>
          <button
            class="relative m-[5px] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            style={{ marginLeft: "15px" }}
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-700 rounded-md group-hover:bg-opacity-0">
              shop now
            </span>
          </button>
        </div>
        <div className=" h-full sm:w-[60vw] sm:px-5 sm:col-span-6">
          <img
            src={servicesInfo}
            alt="aboutChairImg"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
