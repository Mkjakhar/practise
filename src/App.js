import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import MyCalendar from "./components/MyCalendar";
import OurServices from "./components/OurServices";
import HoverCompo from "./components/HoverCompo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroTwo from "./components/HeroTwo";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SwipeSlide from "./components/SwipeSlide";
function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<HoverCompo />} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/MyCalendar" element={<MyCalendar />} />
      </Routes> */}
      <Hero />
      <HoverCompo />
      <MyCalendar />
      <SwipeSlide />
    </>
  );
}

export default App;
