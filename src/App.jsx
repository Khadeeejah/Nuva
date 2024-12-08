import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navigation from "./components/Navigation";
import Stats from "./components/Stats";
import SubFooter from "./components/SubFooter";

const App = () => {
  return (
    <div className="xl:max-w-[1400px] xl:mx-auto">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Features />
      <HowItWorks />
      <SubFooter />
      <Footer />
    </div>
  );
};

export default App;
