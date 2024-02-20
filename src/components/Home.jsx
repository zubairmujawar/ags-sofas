import React from "react";
import bgImg from "../assets/home-pagejpg.jpg";

const Home = () => {
  return (
    <div className="h-[120vh] flex justify-center items-center">
      <img
        src={bgImg}
        alt=" home-page-img"
        className=" bg-contain h-full w-full blur-[2px]"
      />
      <div className="absolute flex justify-center bg-transparent-30 rounded-lg m-3 p-4 items-center flex-col sm:w-43 sm:gap-[4rem] mb-16">
        <h1 className="font-bold sm:text-8xl text-5xl charm-bold">AGS <span className="sofa"> Sofa's</span></h1>
        <p className="sm:text-3xl text-xl text-white sm:text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi
          commodi facere
        </p>
      </div>
    </div>
  );
};

export default Home;
