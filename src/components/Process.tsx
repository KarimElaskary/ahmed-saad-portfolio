import type { Step } from "../types";

const steps: Step[] = [
  {
    id: 1,
    icon: "🔎",
    title: "Discover",
    description:
      "Understanding your business, goals and requirements in depth.",
  },
  {
    id: 2,
    icon: "📝",
    title: "Plan",
    description:
      "Planning the store structure and user journey for maximum impact.",
  },
  {
    id: 3,
    icon: "✏️",
    title: "Design",
    description:
      "Designing a clean, modern and conversion-focused store layout.",
  },
  {
    id: 4,
    icon: "💻",
    title: "Develop",
    description:
      "Building the store with clean code and best Shopify practices.",
  },
  {
    id: 5,
    icon: "🚀",
    title: "Optimize",
    description:
      "Testing, optimizing and launching for the best results possible.",
  },
];

const Process = () => {
  return (
    <section id="process" className="container mx-auto px-6 py-20">
      <div className="flex flex-col gap-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Workflow</h2>
          <h1 className="text-4xl md:text-5xl font-bold">My <span className="text-white/60">Process</span></h1>
          <p className="text-white/50">A structured approach to building high-converting Shopify stores.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              <div className="glass p-8 rounded-[2rem] flex flex-col gap-6 h-full glass-hover">
                <div className="flex justify-between items-start">
                  <span className="text-4xl bg-primary/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-primary/20 transition-colors">
                    {step.icon}
                  </span>
                  <span className="text-4xl font-black text-white/5 tracking-tighter group-hover:text-primary/10 transition-colors">
                    {index + 1}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
