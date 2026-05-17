import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const menuItems: string[] = ["About", "Projects", "Services", "Process"];

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <div className="container mx-auto glass rounded-2xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#hero" className="flex gap-3 items-center group">
            <span className="bg-primary px-3 py-1 text-black font-extrabold rounded-lg shadow-[0_0_20px_rgba(var(--color-primary),0.3)] group-hover:scale-105 transition-transform">
              AS
            </span>
            <h1 className="text-xl font-bold tracking-tight">Ahmed Saad</h1>
          </a>
        </div>
        <nav className="md:flex gap-8 hidden items-center">
          {menuItems.map((item) => (
            <a
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors relative group"
              key={item}
              href={`#${item.toLowerCase()}`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-primary text-black px-5 py-2 rounded-xl font-bold text-sm hover:brightness-110 transition-all hover:shadow-[0_0_15px_rgba(var(--color-primary),0.4)]"
          >
            Hire Me
          </a>
        </nav>
        <div className="md:hidden">
          <CiMenuBurger
            className="text-2xl cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <div
            className={`w-[calc(100%-2rem)] absolute left-4 top-24 p-6 gap-6 bg-[#070b14] rounded-2xl border border-white/10 shadow-2xl ${isOpen ? "flex flex-col animate-in fade-in slide-in-from-top-4" : "hidden"}`}
          >
            {menuItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium border-b border-white/10 pb-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
