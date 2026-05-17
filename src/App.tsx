import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Process/>
      <Contact/>
    </div>
  );
};

export default App;
