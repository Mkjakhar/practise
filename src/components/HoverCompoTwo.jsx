import React from "react";
import tracking from "../assets/img/png/tracking.png";
import Slider from "react-slick";

const HoverCompoTwo = () => {
  var settingsOne = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    vertical: true,
    pauseOnHover: false,
  };
  var settingstwo = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    rtl: true,
    vertical: true,
    // verticalSwiping: true,
    pauseOnHover: false,
  };
  return (
    <React.Fragment>
      <div className="container group mx-auto duration-500 bg-slate-400">
        <div className="py-10 flex-col lg:flex-row flex items -center justify-between">
          <div className="w-full px-3 lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl xl:text-5xl">
              Lorem ipsum dolor sit amet.
            </h1>
            <h4 className="text-lg sm:text-2xl xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              mollitia unde quaerat aut adipisci excepturi qui dicta ullam vitae
              dolor, et velit iste provident ducimus tempora explicabo
              voluptatum. Magni, excepturi?
            </p>
          </div>
          <div className="w-full px-3 lg:w-1/2 xl:w-1/3 mt-6 max-h-0 lg:mt-0 opacity-0 overflow-hidden duration-1000 group-hover:opacity-100 group-hover:max-h-[1000px]">
            <div className="grid grid-cols-3 gap-2">
              <Slider {...settingsOne}>
                <img className="w-full my-1" src={tracking} alt="tracking" />
                <img className="w-full my-1" src={tracking} alt="tracking" />
                <img className="w-full my-1" src={tracking} alt="tracking" />
                <img className="w-full my-1" src={tracking} alt="tracking" />
              </Slider>
              <Slider {...settingstwo}>
                <img className="w-full my-1" src={tracking} alt="tracking" />
                <img className="w-full my-1" src={tracking} alt="tracking" />
                <img className="w-full my-1" src={tracking} alt="tracking" />
                <img className="w-full my-1" src={tracking} alt="tracking" />
              </Slider>
              <Slider {...settingsOne}>
                <img className="w-full my-1" src={tracking} alt="tracking" />
                <img className="w-full my-1" src={tracking} alt="tracking" />
                <img className="w-full my-1" src={tracking} alt="tracking" />
                <img className="w-full my-1" src={tracking} alt="tracking" />
              </Slider>
            </div>
          </div>
        </div>
      </div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime neque
      facere quibusdam, optio sequi iste ipsa, explicabo reiciendis nostrum a
      fugiat accusamus libero provident aspernatur saepe, temporibus dicta?
      Dicta, exercitationem.
    </React.Fragment>
  );
};

export default HoverCompoTwo;
