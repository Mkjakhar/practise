import React, { useEffect, useRef } from "react";
import MyNav from "./MyNav";
import mobile from "../assets/img/png/mobile.png";
const HeroTwo = () => {
  const shape = useRef();
  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);

  return (
    <React.Fragment>
      <header className="flex flex-col bg-red-200 2xl:min-h-[80vh]">
        <MyNav />
        <div className="container mx-auto pb-12 flex-grow flex items-center justify-center relative z-10">
          <div className="flex flex-col-reverse md:flex-row md:py-10 lg:py-[120px]">
            <div className="px-3 md:w-1/2 mt-6 md:mt-0">
              <h1 className="text-3xl text_anim xl:text-5xl font-bold">
                Lorem ipsum dolor sit amet.
              </h1>
              <h4 className="text-lg sm:text-2xl xl:text-3xl text_anim font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h4>
              <p className="text_anim">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt mollitia unde quaerat aut adipisci excepturi qui dicta
                ullam vitae dolor, et velit iste provident ducimus tempora
                explicabo voluptatum. Magni, excepturi?
              </p>
            </div>
            <div className="px-3 md:w-1/2">
              <div
                ref={shape}
                className="bg-orange-400 overflow-hidden anim pt-16 rounded-b-full md:absolute w-3/4 mx-auto md:w-[36%] top-0 right-0 lg:right-24"
              >
                <img
                  data-aos="fade-up"
                  data-aos-delay="1100"
                  data-aos-duration="1000"
                  className="w-3/4 md:w-3/4 mx-auto anim_two"
                  src={mobile}
                  alt="mobile"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default HeroTwo;
