import hero from "../assets/hero.jpeg";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div id="hero" className="container mx-auto px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <div className="space-y-2">
            <p className="text-primary font-bold tracking-widest uppercase text-sm">Shopify E-commerce Expert</p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Hey, 👋 I'm<br />
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Ahmed Saad
              </span>
            </h1>
          </div>
          
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
              Your store exists. <span className="text-primary italic">I make it convert.</span>
            </h2>
          </div>

          <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            I don't just build Shopify stores; I engineer 
            <span className="text-white font-medium"> high-converting digital experiences </span> 
            that turn visitors into loyal customers. Backend power meets premium design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              className="group bg-primary px-8 py-4 rounded-2xl text-black font-bold flex items-center justify-center gap-3 hover:brightness-110 transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(var(--color-primary),0.3)]"
              href="#projects"
            >
              Explore My Work 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              className="glass px-8 py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
              href="#contact"
            >
              Start a Project
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="relative group mx-auto lg:ml-auto max-w-lg lg:max-w-none">
          <div className="relative aspect-square md:aspect-auto">
            <img 
              src={hero} 
              alt="Ahmed Saad" 
              className="rounded-2xl w-full object-cover shadow-2xl grayscale-20 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
