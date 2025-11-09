import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./index.css";

function App() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6">
        <HeroSection />
      </main>
    </>
  );
}

export default App;
