import { FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import type { ContactDetail } from "../types";

const details: ContactDetail[] = [
  { 
    icon: <SiGmail />, 
    title: "Email", 
    info: "a7medsaad653@gmail.com",
    link: "mailto:a7medsaad653@gmail.com"
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    info: "+20 101 917 4896",
    link: "https://wa.me/201019174896"
  },
  { 
    icon: <FaLinkedin />, 
    title: "LinkedIn", 
    info: "@ahmed-saad",
    link: "https://www.linkedin.com/in/ahmed-saad-abdullah-051276331/" 
  },
  { 
    icon: <FaFacebook />, 
    title: "Facebook", 
    info: "Ahmed Saad",
    link: "https://www.facebook.com/profile.php?id=61589289310538" 
  },
];

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-6 py-24">
      <div className="glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary/5 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Contact</h2>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Let's Build Something <br />
              <span className="text-white/60 italic">Remarkable</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Ready to scale your Shopify store? I'm currently accepting new projects. 
              Let's discuss how we can work together to achieve your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-8">
            {details.map((detail) => {
              const href = detail.link;

              return (
                <a
                  key={detail.title}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group glass p-8 rounded-4xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-primary hover:scale-[1.02] cursor-pointer"
                >
                  <span className="text-3xl p-4 rounded-2xl transition-colors duration-300 bg-primary/10 group-hover:bg-black/10 text-primary group-hover:text-black">
                    {detail.icon}
                  </span>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 text-white/40 group-hover:text-black/60">
                      {detail.title}
                    </p>
                    <p className="font-semibold text-xs transition-colors duration-300 text-white group-hover:text-black">
                      {detail.info}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="pt-12">
            <p className="text-white/20 text-xs font-medium uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Ahmed Saad — All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
