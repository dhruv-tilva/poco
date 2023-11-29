import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const route = location.pathname.split("/")[1];
  const opneMenu = () => {
    document.getElementById("mobile-nav").classList.add("toggleManu");
    document.getElementById("mobile-nav").classList.remove("defaultManu");
  };
  const closeMenu = () => {
    document.getElementById("mobile-nav").classList.add("defaultManu");
    document.getElementById("mobile-nav").classList.remove("toggleManu");
  };
  return (
    <header>
      <div className="flex justify-between px-4 py-6 items-center lg:px-8 fixed top-0 z-[9999] bg-white w-full">
        <i
          className="fa-solid fa-bars text-3xl sm:!hidden"
          onClick={opneMenu}
        ></i>
        <img src="/src/assets/logo_svg.svg" className="w-32 h-8" alt="" />
        <ul className="hidden md:flex text-lg font-medium font-darker space-x-8 lg:space-x-16">
          <li>
            <Link
              className="transition-all text-2xl font-semibold duration-200 hover:text-[#ffc222]"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                route === "blog"
                  ? "hoverClass transition-all text-2xl font-semibold duration-200 hover:text-[#ffc222]"
                  : "transition-all text-2xl font-semibold duration-200 hover:text-[#ffc222]"
              }
              to="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex items-center space-x-3">
          <div>
            <i className="fa-solid fa-motorcycle text-4xl font-semibold text-green-500"></i>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[#999999]">
              Call and Order in
            </h3>
            <p className="text-[#ffc222] text-2xl font-bold">+1 718-904-4450</p>
          </div>
        </div>
      </div>
      <div
        id="mobile-nav"
        className="flex p-4 space-y-4 bg-neutral-950 w-[300px] z-[9999] flex-col fixed left-0 top-0 h-full transition-transform duration-300 defaultManu"
      >
        <div className="flex justify-end">
          <i
            className="fa-solid fa-xmark text-white text-2xl"
            onClick={closeMenu}
          ></i>
        </div>
        <ul className="flex flex-col space-y-2">
          <li>
            <Link
              className="font-darker text-3xl font-medium text-white transition-all duration-150 hover:text-[#FFC222]"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-darker text-3xl font-medium text-white transition-all duration-150 hover:text-[#FFC222]"
              to="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
