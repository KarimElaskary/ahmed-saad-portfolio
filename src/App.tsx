import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import LiveProjects from "./components/LiveProjects";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero/>
      <About/>
      <Services/>
      <LiveProjects/>
      <Process/>
      <Contact/>
    </div>
  );
};

export default App;
