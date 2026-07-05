import ServicesSection from "./components/cards";
import FooterSection from "./components/footer";
import HeroSection from "./components/hero";
import ResultSection from "./components/result";
import Navbar from "./components/navbar";
import { useEffect } from "react";
import AOS from "aos";

const App = () => {
    useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      easing: "ease-in-out",
      once: false, // animate only once
      offset: 100,
    });
  }, []);
  return (
    <>
      <Navbar />
      <main className="max-w-360 mx-auto w-full text-white ">
        <HeroSection />
        <ServicesSection />
        <ResultSection />
        <FooterSection />
      </main>
    </>
  );
};

export default App;
