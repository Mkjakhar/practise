import React, { useState } from "react";
import pageLogo from "../assets/img/svg/logo.svg";
const RadialNav = () => {
  const [showNav, setShowNav] = useState(true);
  if (showNav) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <>
      <nav>
        <div className="container mx-auto px-3 py-6 2xl:py-12">
          <div className=" flex items-center justify-between">
            <a className="inline-block" href="#">
              <img
                className="w-[180px] sm:w-[214px]"
                src={pageLogo}
                alt="pageLogo"
              />
            </a>
            <ul className="pl-0 mb-0 hidden lg:flex items-center gap-5 lg:gap-11">
              <li>
                <a
                  className="px-1 font-mulish opacity-50 text-gray font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100 hover:font-bold"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="px-1 font-mulish opacity-50 text-gray font-normal text-[16px] sm:text-[18px] transition relative  duration-300 hover:opacity-100 hover:font-bold"
                  href="#"
                >
                  Find a doctor
                </a>
              </li>
              <li>
                <a
                  className="px-1 font-mulish opacity-50 text-gray font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100 hover:font-bold"
                  href="#"
                >
                  Apps
                </a>
              </li>
              <li>
                <a
                  className="px-1 font-mulish opacity-50 text-gray font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100 hover:font-bold"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  className="px-1 font-mulish opacity-50 text-gray font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100 hover:font-bold"
                  href="#"
                >
                  About us
                </a>
              </li>
            </ul>
            <button onClick={() => setShowNav(false)} className=" lg:hidden">
              open
            </button>
            <div
              className={
                showNav
                  ? "fixed top-0 left-[-100%] opacity-0 transition-all duration-300 w-full min-h-screen flex items-center justify-center bg-white z-50 lg:hidden"
                  : "fixed top-0 left-0 w-full opacity-100 transition-all duration-300 min-h-screen flex items-center justify-center bg-white z-50 lg:hidden"
              }
            >
              <button
                onClick={() => setShowNav(true)}
                className=" absolute top-4 right-4"
              >
                close
              </button>
              <ul className="pl-0 mb-0 flex flex-col items-center gap-5 lg:gap-11">
                <li>
                  <a
                    className="px-1 font-mulish opacity-50 text-gray font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100 hover:font-bold"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="px-1 font-mulish opacity-50 text-gray font-normal text-[16px] sm:text-[18px] transition relative  duration-300 hover:opacity-100 hover:font-bold"
                    href="#"
                  >
                    Find a doctor
                  </a>
                </li>
                <li>
                  <a
                    className="px-1 font-mulish opacity-50 text-gray font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100 hover:font-bold"
                    href="#"
                  >
                    Apps
                  </a>
                </li>
                <li>
                  <a
                    className="px-1 font-mulish opacity-50 text-gray font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100 hover:font-bold"
                    href="#"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="px-1 font-mulish opacity-50 text-gray font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100 hover:font-bold"
                    href="#"
                  >
                    About us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default RadialNav;
