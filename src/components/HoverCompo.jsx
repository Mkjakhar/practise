import React, { useEffect, useRef } from "react";
import tracking from "../assets/img/png/tracking.png";
import HoverCompoTwo from "./HoverCompoTwo";
import HoverCompoThree from "./HoverCompoThree";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const HoverCompo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.to(section, {
      height: 0,
      opacity: 0,
      duration: 0,
    });

    ScrollTrigger.create({
      trigger: section,
      markers: true,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onUpdate: (self) => {
        // Get the natural (intrinsic) height of the content
        const naturalHeight = section.scrollHeight;

        // Calculate the current height based on scroll progress
        const currentHeight = self.progress * naturalHeight;

        // Set the element's height
        gsap.to(section, {
          height: currentHeight,
          opacity: 1,
          duration: 0.5, // Adjust the duration as needed
        });
      },
    });
  }, []);
  return (
    <React.Fragment>
      <div className="container mx-auto duration-500 bg-slate-400">
        <div className="py-10 flex-col sm:flex-row flex items -center justify-between">
          <div className="w-full px-3 sm:w-1/2">
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
          <div
            ref={sectionRef}
            className="w-full px-3 sm:w-1/2 xl:w-1/4 mt-6 lg:mt-0 opacity-0 overflow-hidden"
          >
            <img className="w-full" src={tracking} alt="tracking" />
          </div>
        </div>
      </div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime neque
      facere quibusdam, optio sequi iste ipsa, explicabo reiciendis nostrum a
      fugiat accusamus libero provident aspernatur saepe, temporibus dicta?
      Dicta, exercitationem.
      <HoverCompoTwo />
      <HoverCompoThree />
    </React.Fragment>
  );
};

export default HoverCompo;
