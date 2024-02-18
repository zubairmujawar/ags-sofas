import React from "react";
// import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="w-full fixed z-10 flex justify-center items-center h-12">
      <div className="flex w-full justify-around ">
          <h2>logo</h2>
          <ul className="flex justify-center items-center gap-2">
            <li className="cursor-pointer text-white">Home</li>
            <li className="cursor-pointer text-white">About</li>
            <li className="cursor-pointer text-white">Contact</li>
          </ul>
      </div>
    </header>
  );
};
export default Navbar;
