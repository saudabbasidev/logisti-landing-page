import ServicesSection from "./components/cards";
import FooterSection from "./components/footer";
import HeroSection from "./components/hero";
import ResultSection from "./components/result";
import Navbar from "./components/navbar";

const App = () => {
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
