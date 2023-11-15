import React from "react";
import tracking from "../assets/img/png/tracking.png";
const HoverCompoThree = () => {
  return (
    <React.Fragment>
      <div className="container group mx-auto duration-500 bg-slate-400">
        <div className="py-10 flex-col sm:flex-row flex items -center justify-between">
          <div className="w-full px-3 sm:w-1/2">
            sm
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
          <div className="w-full px-3 sm:w-1/2 xl:w-1/4 mt-6 max-h-0 lg:mt-0 opacity-0 overflow-hidden duration-1000 group-hover:opacity-100 group-hover:max-h-[1000px] sm:group-hover:max-h-[650px]">
            <img className="w-full" src={tracking} alt="tracking" />
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

export default HoverCompoThree;
