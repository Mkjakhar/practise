import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";

const SwipeSlide = () => {
  const slideData = [
    {
      para: "“ Wise has been a lifesaver for me as a student in a foreign country. ”",
      btn: "demo btn 1",
      background: "red",
    },
    {
      para: "“ Wise has been a lifesaver for me as a student in a foreign country. ”",
      btn: "demo btn 2",
      background: "yellow",
    },
    {
      para: "“ Wise has been a lifesaver for me as a student in a foreign country. ”",
      btn: "demo btn 3",
      background: "green",
    },
    {
      para: "“ Wise has been a lifesaver for me as a student in a foreign country. ”",
      btn: "demo btn 4",
      background: "blue",
    },
    {
      para: "“ Wise has been a lifesaver for me as a student in a foreign country. ”",
      btn: "demo btn 5",
      background: "orange",
    },
  ];
  const mySlides = slideData.map((val) => {
    return (
      <SwiperSlide style={{ padding: "0 12px" }}>
        <div
          style={{
            backgroundColor: val.background,
            padding: "40px",
            borderRadius: "25px",
          }}
        >
          <p
            style={{
              fontSize: "clamp(2rem,calc(1.12857rem + 1.14286vw),2.5rem)",
              padding: "30px 0",
            }}
          >
            {val.para}
          </p>
          <button
            style={{
              padding: "12px 30px",
              borderRadius: "50px",
              backgroundColor: "yellowgreen",
              border: "unset",
            }}
          >
            {val.btn}
          </button>
        </div>
      </SwiperSlide>
    );
  });
  const handleIndexOnNextClick = () => {
    const cards = document.querySelectorAll(".swiper-slide-active");
    cards[0].classList.add("index_4");
  };
  return (
    <section className="overflow-hidden pt-5">
      <div className="container">
        <div className="flex flex-wrap justify-end">
          <div className="w-full lg:w-1/2">
            <Swiper
              grabCursor={true}
              effect={"creative"}
              slidesPerView={1.2}
              direction="horizontal"
              shortSwipes={false}
              allowTouchMove={false}
              speed={700}
              //   loop={true}
              creativeEffect={{
                prev: {
                  translate: [0, 0, 0],
                  scale: 0.3,
                  //   opacity: 0,
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[EffectCreative, Navigation]}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              className="mySwiper"
            >
              {mySlides}
            </Swiper>
          </div>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <div
            className="swiper-prev"
            style={{
              padding: "0px 14px",
              backgroundColor: "lightblue",
              fontSize: "40px",
            }}
          >
            &larr;
          </div>
          <div
            onClick={handleIndexOnNextClick}
            className="swiper-next"
            style={{
              padding: "0px 14px",
              backgroundColor: "lightblue",
              fontSize: "40px",
            }}
          >
            &rarr;
          </div>
        </div>
      </div>
    </section>
  );
};
export default SwipeSlide;
