import React from "react";
import aboutImg from "../assets/about-bg.jpg";
import aboutChair from "../assets/about-chair.png";
const About = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center">
      <img
        src={aboutImg}
        alt=" home-page-img"
        className="object-cover bg-cover h-full w-full"
      />
      <div className=" absolute w-full h-full grid items-center  sm:grid-cols-10">
        <div className="sm:col-span-6" style={{paddingLeft: "2rem"}}>
          <h1 className="font-bold sm:text-5xl text-2xl p-5 self-start">About</h1>
          <p className="sm:text-3xl text-xl p-4 sm:-2 text-black">
          At the heart of our business lies a commitment to deliver excellence. We believe that the home is a sacred space, and each piece of furniture and every interior accessory should reflect the essence of the homeowner's personality and style. With this belief in mind, we strive to curate a diverse and exquisite collection that caters to various tastes, preferences, and lifestyles.
          </p>
        </div>
        <div className=" min-h-[200px] px-3 py-4 sm:w-[28rem] sm:px-5 sm:col-span-4">
          <img src={aboutChair} alt="aboutChairImg"  className="w-full"/>  
        </div>
      </div>
    </div>
  );
};

export default About;
