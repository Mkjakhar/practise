import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import GsapAnimation from "./components/GsapAnimation";
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
      {/* <Hero />
      <HoverCompo />
      <MyCalendar />
      <SwipeSlide /> */}
      <GsapAnimation />
    </>
  );
}

export default App;
