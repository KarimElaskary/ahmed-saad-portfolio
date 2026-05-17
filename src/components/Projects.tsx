import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Project } from '../types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import blendgo from '../assets/blendgo.jpeg';
import noirwear from '../assets/noirwear.jpeg';
import pharmacy from '../assets/pharmacy.jpeg';
import storeforge from '../assets/storeforge.jpeg';
import velora from '../assets/velora.jpeg';
import mo from '../assets/mo.jpeg';

const projects: Project[] = [
  {
    image: blendgo,
    title: "BlendGo — Single Product Store",
    description: "Most single-product stores throw everything on one page and hope for the best. BlendGo was built differently — every section has one job, in the right order: Hero → Problem → Solution → Benefits → How it Works → Reviews → FAQ → CTA. Integrated Sticky Cart, Upsell, Trust Badges, and Reviews apps. The result is a store that guides every visitor toward one decision.",
    demo: "https://drive.google.com/file/d/1_8RCrBfoK6NZzsMiHh7_mK0wRMoJSOTD/view?usp=drive_link",
  },
  {
    image: noirwear,
    title: "NoirWear — Premium Fashion Store",
    description: "A high-end English-language fashion store built specifically for the Saudi market — full SAR currency, dark luxury aesthetic, and a unisex catalog across 4 categories. Implemented a complete discount & stock management system, custom mobile media, multi-banner navigation with Shop Now CTAs, and third-party apps for advanced filtering and customer reviews. Built for Class A customers who expect a premium experience.",
    demo: "https://drive.google.com/file/d/1BJSleWabXYm251EvwgLDrkqMujJlnObZ/view?usp=drive_link",
  },
  {
    image: pharmacy,
    title: "MediCare — Pharmacy & Medical System Store",
    description: "This wasn't just a store — it was a complete medical system built on Shopify. Prescription upload feature, WhatsApp-based doctor consultation, 6 main categories with multiple subcategories, and 50+ fully configured products. Every element was designed around patient trust and real healthcare user journeys — not just product browsing. One of the most complex Shopify builds in this portfolio.",
    demo: "https://drive.google.com/file/d/1aJewhRu60X6QSSf49kBcXM9S-RJgB-2a/view?usp=drive_link",
  },
  {
    image: storeforge,
    title: "StoreForge — Course Landing Page",
    description: "Selling a course is about one thing — getting the visitor from curiosity to checkout without losing them. StoreForge was built with the optimal landing page structure: Hero → Benefits → Curriculum → Instructor → Testimonials → Pricing — with a direct CTA embedded in every single section. Clean, distraction-free, and engineered to convert from the first scroll to the last.",
    demo: "https://drive.google.com/file/d/147EMidxKcn-0xTw7BfPiBHG20R9BB33V/view?usp=drive_link",
  },
  {
    image: velora,
    title: "Velora — Luxury Perfume Store",
    description: "Building a perfume brand isn't just about listing products — it's about selling a feeling. Velora was built from scratch with 60 products across 4 curated collections, each with multi-size variants, individual pricing, and custom imagery. Every product was SEO-configured with SKUs, meta descriptions, and attributes. The entire store was designed to position fragrance as a lifestyle — elegant, minimal, and built to convert.",
    demo: "https://drive.google.com/file/d/13k-v7IQDOCi-gdIZRgohMVbtb6f_glGl/view?usp=drive_link",
  },
  {
    image: mo,
    title: "Modern Outfit — Arabic Fashion Store",
    description: "Most developers translate content to Arabic. I rebuilt the entire theme at the code level — full RTL customization that goes beyond what Shopify's default settings allow. Dual-gender structure across 6 subcategories, a custom size guide, and a unique image flip effect revealing front & back product views. Every product fully configured with variants, SEO metadata, and optimized across every mobile screen size.",
    demo: "https://drive.google.com/file/d/1Tk03z8x2wkGeHvTn4xTnSOLtgN0Cs17k/view?usp=drive_link",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Portfolio</h2>
          <h1 className="text-4xl md:text-6xl font-bold">Featured <span className="text-white/60">Projects</span></h1>
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
                    View Project Case Study
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
    </section>
  );
};

export default Projects;
