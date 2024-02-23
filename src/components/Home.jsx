import React from "react";
import bgImg from "../assets/home-pagejpg.jpg";
import servicesInfo from "../assets/services-info.jpg";
import aboutChair from "../assets/about-chair.png";

const Home = () => {
  return (
    <>
      {/* Home page */}
      <div className="h-[120vh] flex justify-center items-center">
        <img
          src={bgImg}
          alt=" home-page-img"
          className=" bg-contain h-full w-full blur-[2px]"
        />
        <div className="absolute flex justify-center bg-transparent-30 rounded-lg m-3 p-4 items-center flex-col sm:w-43 sm:gap-[4rem] mb-16">
          <h1 className="font-bold sm:text-8xl text-5xl charm-bold">
            AGS <span className="sofa"> Sofa's</span>
          </h1>
          <p className="sm:text-4xl font-semibold text-xl text-white sm:text-black">
            style your home, style your life
          </p>
        </div>
      </div>
      {/* About page */}
      <div className=" h-[105vh] sm:h-[100vh] flex justify-center">
        {/* <img
        src={aboutImg}
        alt=" home-page-img"
        className="object-cover bg-cover h-full w-full"
        
      /> */}
        <div className="animation-div"></div>
        <div className=" absolute w-full h-full grid items-center gap-5 sm:grid-cols-10">
          <div className="sm:col-span-6" style={{ paddingLeft: "2rem" }}>
            <h1 className="font-bold sm:text-5xl text-2xl p-5 self-start">
              About
            </h1>
            <p className="sm:text-2xl text-xl p-4 sm:-2 text-black">
              At the heart of our business lies a commitment to deliver
              excellence. We believe that the home is a sacred space, and each
              piece of furniture and every interior accessory should reflect the
              essence of the homeowner's personality and style. With this belief
              in mind, we strive to curate a diverse and exquisite collection
              that caters to various tastes, preferences, and lifestyles.
            </p>
            <button
              class="relative m-[5px] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
              style={{ marginLeft: "15px" }}
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-700 rounded-md group-hover:bg-opacity-0">
                more info
              </span>
            </button>
          </div>
          <div className=" min-h-[200px] py-4 sm:w-[28rem] sm:px-5 sm:col-span-4">
            <img src={aboutChair} alt="aboutChairImg" className="sm:w-full w-[90%]" />
          </div>
          <div className="animation-div-right "></div>
          <div className="animation-div-home-about"></div>
        </div>
      </div>
      {/* services page */}
      <div
      className="h-[110vh] flex justify-center overflow-x-hidden"
      style={{ justifyContent: "center" }}
    >

      {/* <img
        src={servicesBg}
        alt=" home-page-img"
        className=" bg-cover sm:h-[120vh] w-full "
      /> */}
      {/* <div className="animation-div block"></div> */}
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
          <div className="animation-div"></div>
        </div>
        <div className="sm:col-span-2"></div>
        <div className=" sm:w-[60vw] sm:px-5 sm:col-span-4">
          <img
            src={servicesInfo}
            alt="servicesInfo"
            className="w-[90%] z-[-1] sm:h-[80%]"
          />
          {/* <div className="animation-div"></div> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
