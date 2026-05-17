import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import shopify from "../assets/shopify.png";
import liquid from "../assets/liquid.png";
import github from "../assets/github.png";
import type { Skill } from "../types";

const skills: Skill[] = [
  { icon: html, title: "HTML5" },
  { icon: css, title: "CSS3" },
  { icon: javascript, title: "Javascript" },
  { icon: php, title: "PHP" },
  { icon: mysql, title: "MySQL" },
  { icon: shopify, title: "Shopify" },
  { icon: liquid, title: "Liquid" },
  { icon: github, title: "GitHub" },
];

const About = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">About Me</h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Building Stores That <br />
              <span className="text-white/60 italic">Actually Sell</span>
            </h1>
          </div>
          <p className="text-white/60 text-lg leading-relaxed">
            I'm a Shopify E-commerce Developer with experience in building
            high-performing online stores that focus on user experience,
            conversion rate, and real results. I combine clean design with smart
            development to deliver stores that help brands grow — not just look
            pretty.
          </p>
          <div className="pt-4 flex justify-center lg:justify-start">
             <div className="flex gap-8 items-center text-white/40 font-bold uppercase text-xs tracking-tighter">
                <div className="flex flex-col items-center lg:items-start">
                   <span className="text-3xl text-white">4+</span>
                   <span>Years Exp</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                   <span className="text-3xl text-white">50+</span>
                   <span>Projects</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                   <span className="text-3xl text-white">100%</span>
                   <span>Happy Clients</span>
                </div>
             </div>
          </div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill.title} 
              className="glass p-4 rounded-2xl flex flex-col items-center gap-3 glass-hover group"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.title} 
                  className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all" 
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors">
                {skill.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
