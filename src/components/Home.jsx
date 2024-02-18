import React from "react";
import bgImg from "../assets/home-pagejpg.jpg";

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <img
        src={bgImg}
        alt=" home-page-img"
        className="object-cover bg-contain h-full w-full blur-sm"
      />
      <div className="absolute flex justify-center bg-transparent-30 rounded-lg m-3 p-4 items-center flex-col sm:w-43 sm:gap-[4rem] mb-16">
        <h1 className="font-bold sm:text-8xl text-5xl">AGS Sofa's</h1>
        <p className="sm:text-3xl text-xl text-white sm:text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi
          commodi facere
        </p>
      </div>
    </div>
  );
};

export default Home;
