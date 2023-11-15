import React, { useEffect } from "react";
import seacrhIcon from "../assets/img/png/search.png";
import pharmacy from "../assets/img/png/pharmacy.png";
import consultation from "../assets/img/png/consultation.png";
import details from "../assets/img/png/details.png";
import emergency from "../assets/img/png/emergency.png";
import tracking from "../assets/img/png/tracking.png";
import serviceVector from "../assets/img/png/service-vector.png";
const OurServices = () => {
  for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
    console.log(String.fromCharCode(i));
  }
  return (
    <>
      <section className="relative z-10">
        <img
          className=" absolute top-1/2 translate-y-[-50%] z-[-1] min-w-[300px] w-5/12 left-0"
          src={serviceVector}
          alt="serviceVector"
        />
        <div className="container mx-auto px-3 py-9 lg:py-20">
          <h2 className="text-center mb-8 sm:mb-12 text-2xl text-black relative font-mulish font-bold md:text-4xl after:absolute after:content-[''] after:w-8 after:h-[2px] after:rounded-full after:bg-black after:left-1/2 after:translate-x-[-50%] after:bottom-[-12px] sm:after:bottom-[-26px]">
            Our services
          </h2>
          <p className="text-center font-mulish font-light text-gray text-base md:text-lg">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment
            <span className="xl:block">
              {" "}
              with our highly qualified doctors you can consult with us which
              type of service is suitable for your health
            </span>
          </p>
          <div className="grid grid-cols-1 pt-12 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 xl:px-10">
            <div className="p-10 shadow-sm transition duration-300 hover:scale-105 bg-white rounded-[20px]">
              <img width={91} src={seacrhIcon} alt="seacrhIcon" />
              <p className=" mt-5 font-bold font-mulish text-2xl text-black">
                Search doctor
              </p>
              <p className="mt-2 text-base text-gray font-light font-mulish">
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </p>
            </div>
            <div className="p-10 shadow-sm transition duration-300 hover:scale-105 bg-white rounded-[20px]">
              <img width={61} src={pharmacy} alt="pharmacy" />
              <p className=" mt-5 font-bold font-mulish text-2xl text-black">
                Online pharmacy
              </p>
              <p className="mt-2 text-base text-gray font-light font-mulish">
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </div>
            <div className="p-10 shadow-sm transition duration-300 hover:scale-105 bg-white rounded-[20px]">
              <img width={67} src={consultation} alt="consultation" />
              <p className=" mt-5 font-bold font-mulish text-2xl text-black">
                Consultation
              </p>
              <p className="mt-2 text-base text-gray font-light font-mulish">
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
            <div className="p-10 shadow-sm transition duration-300 hover:scale-105 bg-white rounded-[20px]">
              <img width={67} src={details} alt="details" />
              <p className=" mt-5 font-bold font-mulish text-2xl text-black">
                Details info
              </p>
              <p className="mt-2 text-base text-gray font-light font-mulish">
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
            <div className="p-10 shadow-sm transition duration-300 hover:scale-105 bg-white rounded-[20px]">
              <img width={80} src={emergency} alt="emergency" />
              <p className=" mt-5 font-bold font-mulish text-2xl text-black">
                Emergency care
              </p>
              <p className="mt-2 text-base text-gray font-light font-mulish">
                Choose You can get 24/7 urgent care for yourself or your
                children and your lovely family
              </p>
            </div>
            <div className="p-10 shadow-sm transition duration-300 hover:scale-105 bg-white rounded-[20px]">
              <img width={69} src={tracking} alt="tracking" />
              <p className=" mt-5 font-bold font-mulish text-2xl text-black">
                Tracking
              </p>
              <p className="mt-2 text-base text-gray font-light font-mulish">
                Track and save your medical history and health data
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="#"
              className="inline-block text-base md:text-lg font-mulish py-3 font-bold text-primary px-12 border-[1.4px] hover:text-white hover:bg-primary transition duration-300 border-primary rounded-full"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
