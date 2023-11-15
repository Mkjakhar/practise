import React, { useState } from "react";
import pageLogo from "../assets/img/svg/logo.svg";
const MyNav = () => {
  const [showNav, setShowNav] = useState(true);
  if (showNav) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <>
      <nav className="bg-black text-white relative z-[11] show_nav">
        <div className="container mx-auto px-3 py-6 2xl:py-12">
          <div className=" flex items-center justify-between">
            <a className="inline-block w-full" href="#">
              <img
                className="w-[180px] sm:w-[214px]"
                src={pageLogo}
                alt="pageLogo"
              />
            </a>
            <ul className="pl-0 mb-0 w -full hidden lg:flex items-center gap-5 lg:gap-11">
              <li>
                <a
                  className="px-1 font-mulish text-white font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="px-1 font-mulish text-white font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100"
                  href="#"
                >
                  Apps
                </a>
              </li>
              <li>
                <a
                  className="px-1 font-mulish text-white font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  className="px-1 whitespace-nowrap font-mulish text-white font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100"
                  href="#"
                >
                  About us
                </a>
              </li>
            </ul>
            <div className="w-full text-center lg:text-end">
              <button className="rounded-full py-3 px-6 bg-white leading-[100%] text-black">
                Login
              </button>
            </div>
            <button onClick={() => setShowNav(false)} className=" lg:hidden">
              open
            </button>
            <div
              className={`w-full fixed top-0 transition-all duration-300 min-h-screen flex items-center justify-center bg-black z-50 lg:hidden ${
                showNav ? "left-[-100%] opacity-0" : "left-0 opacity-100"
              }`}
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
                    className="px-1 font-mulish text-white font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="px-1 font-mulish text-white font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100"
                    href="#"
                  >
                    Apps
                  </a>
                </li>
                <li>
                  <a
                    className="px-1 font-mulish text-white font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100"
                    href="#"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="px-1 font-mulish text-white font-normal text-[16px] sm:text-[18px] transition duration-300 hover:opacity-100"
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

export default MyNav;
