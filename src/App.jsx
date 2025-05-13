import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Nav";
import HeroSection from "./Components/HeroSection/Hero";
import TaskBoard from "./Components/TaskBoard/TaskBoard";
import "./App.css";

const App = () => {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Header />
      <div className="flex flex-col items-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </div>
  );
};

export default App;
