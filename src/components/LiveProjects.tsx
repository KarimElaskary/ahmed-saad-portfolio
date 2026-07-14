import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Project } from '../types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ferola from '../assets/ferola.jpeg';
import massage from '../assets/massage.jpeg';
import flora from '../assets/flora.jpeg';
import otakuverse from '../assets/otakuverse.jpeg';

import DemoProjects from './DemoProjects';

const projects: Project[] = [
  {
    image: otakuverse,
    title: "Otakuverse – Fashion Store (easy order)",
    description: "Designed and developed a complete e-commerce experience for Otakuverse, an anime fashion brand. The project included UI/UX design, responsive web layouts, HTML/CSS customization, brand identity integration, product page optimization, and user journey enhancements. The final result delivers a visually engaging shopping experience that captures the spirit of anime culture while maintaining usability, performance, and accessibility.",
    demo: "https://otakuverse.myeasyorders.com/",
  },
  {
    image: flora,
    title: "Flora Gallery - Handmade Jewelry Store (easy order)",
    description: "Designed and developed a modern e-commerce store for Flora Gallery, a handmade jewelry brand. The project focused on creating a premium shopping experience through custom UI design, responsive layouts, HTML/CSS customization, brand identity implementation, and user-centered design. Every detail was crafted to reflect the brand's elegant and natural aesthetic while ensuring a smooth and intuitive user experience",
    demo: "https://floragallery.store/",
  },
  {
    image: ferola,
    title: "Ferola Swim - Luxury Swimwear Store (Shopify)",
    description: "Designed and developed a premium Shopify store for Ferola Swim, an Egyptian luxury swimwear brand specializing in burkinis, bikinis, tankinis, and men's swimwear. The project focused on creating a modern shopping experience through custom theme customization, conversion-focused UI/UX, premium visual branding, SEO optimization, responsive design, and a seamless customer journey. I also integrated engaging content including video carousels, customer reviews, product hotspots, and custom Liquid sections to strengthen trust and enhance the overall shopping experience.",
    demo: "https://www.ferolaswim.shop/",
  },
  {
    image: massage,
    title: "Massage Manzely - landing page (Shopify)",
    description: "Designed and developed a high-converting Shopify landing page for a licensed home & hotel massage service in Saudi Arabia. Built with a strong focus on CRO, UX, SEO, bilingual support, and WhatsApp lead generation. Every section was strategically crafted to build trust, address customer pain points, and guide visitors toward booking a session.",
    demo: "https://massagemanzely.com/",
  },
];

const LiveProjects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Portfolio</h2>
          <h1 className="text-4xl md:text-6xl font-bold">Live <span className="text-white/60">Projects</span></h1>
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="project-swiper !pb-16"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="glass rounded-[2rem] overflow-hidden flex flex-col h-full group border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-2xl">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-grow line-clamp-4">
                    {project.description}
                  </p>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group/link"
                  >
                    View Store
                    <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .project-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.1;
          transition: all 0.3s ease;
        }
        .project-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: var(--color-primary);
          width: 32px;
          border-radius: 6px;
        }
        .project-swiper .swiper-button-next,
        .project-swiper .swiper-button-prev {
          width: 54px;
          height: 54px;
          background: oklch(100% 0 0 / 0.05);
          backdrop-filter: blur(8px);
          border: 1px solid oklch(100% 0 0 / 0.1);
          border-radius: 100%;
          color: white;
          transition: all 0.3s ease;
        }
        .project-swiper .swiper-button-next:after,
        .project-swiper .swiper-button-prev:after {
          font-size: 1.2rem;
          font-weight: bold;
        }
        .project-swiper .swiper-button-next:hover,
        .project-swiper .swiper-button-prev:hover {
          background: var(--color-primary);
          color: black;
          border-color: var(--color-primary);
        }
        @media (max-width: 1024px) {
          .project-swiper .swiper-button-next,
          .project-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
      <DemoProjects/>
    </section>
  );
};

export default LiveProjects;
