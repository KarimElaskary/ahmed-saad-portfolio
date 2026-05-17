import type { Service } from "../types";

const services: Service[] = [
  {
    icon: "🖥️",
    title: "Shopify Store Development",
    description:
      "Full store development from scratch with the best practices, custom features, and conversion-focused architecture.",
  },
  {
    icon: "🎨",
    title: "Theme Customization",
    description:
      "Customizing any theme to match your brand and business needs — pixel-perfect and performance-optimized.",
  },
  {
    icon: "📊",
    title: "CRO & UX Optimization",
    description:
      "Improving user experience and boosting conversion rate through data-driven design and strategic testing.",
  },
  {
    icon: "⚡️",
    title: "Performance Optimization",
    description:
      "Speed optimization for better performance and store sales — faster stores convert more visitors into buyers.",
  },
  {
    icon: "📦",
    title: "Product Setup",
    description:
      "Complete product catalog setup, collections, metafields, and SEO optimization for maximum discoverability.",
  },
  {
    icon: "⚒️",
    title: "Maintenance & Support",
    description:
      "Ongoing support and maintenance to keep your store perfect, secure, and always running at peak performance.",
  },
];

const Services = () => {
  return (
    <section id="services" className="container mx-auto px-6 py-20">
      <div className="flex flex-col gap-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Services</h2>
          <h1 className="text-4xl md:text-5xl font-bold">Solutions Tailored for <span className="text-white/60">Growth</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="glass p-8 rounded-3xl flex flex-col gap-6 glass-hover group"
            >
              <div className="text-4xl bg-primary/10 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
