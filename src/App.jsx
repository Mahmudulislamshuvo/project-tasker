import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Nav";
import HeroSection from "./Components/HeroSection/Hero";
import TaskBoard from "./Components/TaskBoard/TaskBoard";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TaskBoard />
      <Footer />
    </div>
  );
};

export default App;
