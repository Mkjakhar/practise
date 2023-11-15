import React from "react";
import RadialNav from "./RadialNav";
import heroImg from "../assets/img/png/hero-img.png";
import heroDots from "../assets/img/png/hero-dots.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <header className="lg:min-h-screen flex flex-col">
        <RadialNav />
        <div className="flex items-center justify-center flex-grow relative">
          <img
            className="absolute left-0 z-[-1] top-7 w-10 xl:w-20"
            src={heroDots}
            alt="heroDots"
          />
          <div className="container mx-auto px-3">
            <div className="flex flex-col-reverse md:flex-row text-center md:text-left gap-6 md:gap-3 items-center justify-between py-6 2xl:py-12">
              <div className="md:w-5/12 xl:w-2/5">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text_black font-mulish">
                  Virtual healthcare <span className="xl:block">for you</span>
                </h1>
                <p className="text-lg md:text-xl mt-4 md:mt-6 font-mulish font-light text-gray">
                  Radial-Health provides progressive, and affordable healthcare,
                  accessible on mobile and online for everyone
                </p>
                <Link
                  to="/OurServices"
                  className="text-base sm:text-lg px-10 rounded-full bg-primary py-3 inline-block mt-7 md:mt-11 font-mulish font-bold text-white transition-all duration-300 border-[1.4px] border-transparent hover:border-primary hover:bg-transparent hover:text-primary"
                >
                  Consult today
                </Link>
              </div>
              <div className="w-4/5 md:w-1/2">
                <img className="w-full" src={heroImg} alt="heroImg" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
