import FeaturesSection from "./components/FeaturesSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import WorkflowSection from "./components/WorkflowSection";
import "./index.css";

function App() {
  return (
    <>
      <Header />

      <main className="main-container">
        <HeroSection />

        <FeaturesSection />
      </main>

      <div className="h-px bg-neutral-800"></div>

      <main className="main-container">
        <WorkflowSection />

        <PricingSection />
      </main>
    </>
  );
}

export default App;
