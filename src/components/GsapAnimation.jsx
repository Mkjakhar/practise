import React, { useEffect, useRef, useState } from "react";
import tracking from "../assets/img/png/tracking.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const GsapAnimation = () => {
  // const [eleHeight, seteleHeight] = useState(0);
  // const elementRef = useRef(null);

  // useEffect(() => {
  //   if (elementRef.current) {
  //     seteleHeight(elementRef.current.getBoundingClientRect().height);
  //   }

  //   window.addEventListener("resize", () => {
  //     if (elementRef.current) {
  //       seteleHeight(elementRef.current.getBoundingClientRect().height);
  //     }
  //   });
  // }, [eleHeight]);
  useEffect(() => {
    const targets = document.querySelectorAll(".target, .target2, .target3");

    targets.forEach((target) => {
      gsap.fromTo(
        target,
        {
          background: "red",
          height: "200px",
        },
        {
          background: "pink",
          height: "400px",
          scrollTrigger: {
            trigger: target,
            start: "top center",
            end: "bottom center",
            markers: true,
            scrub: true,
          },
        }
      );
    });
  }, []);
  return (
    <div>
      <div className="h-screen bg-green-400"></div>
      <div className="conatiner py-16 parent">
        <div className="flex target">
          <div className="w-full">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium labore vel quia dolor atque omnis nisi, similique
              magni qui officia? Aut dolores asperiores provident hic, sit
              accusamus reiciendis enim sapiente.
            </h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium labore vel quia dolor atque omnis nisi, similique
              magni qui officia? Aut dolores asperiores provident hic, sit
              accusamus reiciendis enim sapiente.
            </h1>
          </div>
          <div className="w-full">
            <img
              className="w-full target max-w-[400px] mx-auto object-cover object-top"
              src={tracking}
              alt="tracking"
            />
          </div>
        </div>
        <div className="flex target2 my-5">
          <div className="w-full">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium labore vel quia dolor atque omnis nisi, similique
              magni qui officia? Aut dolores asperiores provident hic, sit
              accusamus reiciendis enim sapiente.
            </h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium labore vel quia dolor atque omnis nisi, similique
              magni qui officia? Aut dolores asperiores provident hic, sit
              accusamus reiciendis enim sapiente.
            </h1>
          </div>
          <div className="w-full">
            <img
              className="w-full target2 max-w-[400px] mx-auto object-cover object-top"
              src={tracking}
              alt="tracking"
            />
          </div>
        </div>
        <div className="flex target3">
          <div className="w-full">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium labore vel quia dolor atque omnis nisi, similique
              magni qui officia? Aut dolores asperiores provident hic, sit
              accusamus reiciendis enim sapiente.
            </h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium labore vel quia dolor atque omnis nisi, similique
              magni qui officia? Aut dolores asperiores provident hic, sit
              accusamus reiciendis enim sapiente.
            </h1>
          </div>
          <div className="w-full">
            <img
              className="w-full target3 max-w-[400px] mx-auto object-cover object-top"
              src={tracking}
              alt="tracking"
            />
          </div>
        </div>
      </div>
      <div className="h-screen bg-green-400"></div>
    </div>
  );
};

export default GsapAnimation;
