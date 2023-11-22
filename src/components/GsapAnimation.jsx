import React, { useLayoutEffect, useRef, useState } from "react";
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

  const [up, setUp] = useState(true);
  const targetOneRef = useRef();
  const targetTwoRef = useRef();
  const targetThreeRef = useRef();

  useLayoutEffect(() => {
    const targets = [
      targetOneRef.current,
      targetTwoRef.current,
      targetThreeRef.current,
    ];

    const context = gsap.context(() => {
      targets.forEach((target, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: target,
            start: "top center",
            end: "bottom center",
            markers: true,
            id: `target ${index + 1}`,
            scrub: true,
            onRefresh: (x) => console.log("ref", x),
            onUpdate: (x) => {
              x.refresh();
            },
          },
        });

        tl.to(target, {
          background: "pink",
          height: 400,
        });
      });
    });

    return () => context.revert();
  }, []);

  return (
    <div>
      <div className="h-screen bg-green-400"></div>
      <div className="conatiner py-16 parent">
        <div
          ref={targetOneRef}
          className="flex target bg-red-500 h-52 overflow-hidden"
        >
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
        </div>
        <div
          ref={targetTwoRef}
          className="flex target2 my-5 bg-red-500 h-52 overflow-hidden"
        >
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
        </div>
        <div
          ref={targetThreeRef}
          className="flex target3 bg-red-500 h-52 overflow-hidden"
        >
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
        </div>
      </div>
      <div className="h-screen bg-green-400"></div>
    </div>
  );
};

export default GsapAnimation;
