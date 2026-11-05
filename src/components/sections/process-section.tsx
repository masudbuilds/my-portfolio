import { Compass, Code2, Gauge, Rocket, CheckCircle2 } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Compass;
  tags: readonly string[];
}

const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Planning & Architecture",
    subtitle: "Laying the foundation",
    description:
      "Analyzing requirements, establishing domain data models, mapping RESTful API contracts, and planning component hierarchies before writing production code.",
    icon: Compass,
    tags: ["Schema Modeling", "API Contracts", "System Design"],
  },
  {
    number: "02",
    title: "Clean & Secure Code",
    subtitle: "Building with precision",
    description:
      "Crafting type-safe, modular code with Next.js and Express. Implementing robust JWT authentication, input sanitization, and strict separation of concerns.",
    icon: Code2,
    tags: ["TypeScript", "JWT & Auth Bridge", "Modular Architecture"],
  },
  {
    number: "03",
    title: "Testing & Optimization",
    subtitle: "Refining the experience",
    description:
      "Validating responsive behavior across devices, auditing Core Web Vitals, eliminating layout shifts, and implementing graceful error boundaries.",
    icon: Gauge,
    tags: ["Lighthouse 95+", "Zero Layout Shift", "Accessible UX"],
  },
  {
    number: "04",
    title: "Deployment & Delivery",
    subtitle: "Shipping to production",
    description:
      "Configuring continuous deployment, provisioning production databases, verifying CORS and SSL policies, and delivering clear documentation.",
    icon: Rocket,
    tags: ["Vercel / Cloud", "CORS & SSL", "Documentation"],
  },
] as const;

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative w-full py-16 sm:py-20 lg:py-24 border-t border-border/40"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-2xl mb-12 sm:mb-14">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-card/60 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs mb-4">
            <span
              className="size-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span>ENGINEERING WORKFLOW</span>
          </div>

          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2] mb-4"
          >
            How I transform ideas into software<span className="text-primary">.</span>
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            A structured, end-to-end methodology prioritizing system
            architecture, type safety, security safeguards, and verified
            performance at every stage.
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 shadow-xs transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none"
              >
                <div>
                  {/* Card Header: Step number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 shadow-2xs">
                      {step.number}
                    </span>
                    <div
                      className="flex size-10 items-center justify-center rounded-2xl bg-muted/70 text-foreground border border-border/60 transition-transform duration-200 group-hover:scale-105 group-hover:text-primary motion-reduce:transform-none"
                      aria-hidden="true"
                    >
                      <Icon className="size-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-primary mb-3">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Focus Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-0.5 rounded-md bg-muted/60 border border-border/50 text-[10px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy & Engineering Standards Banner */}
        <div className="rounded-3xl border border-border/80 bg-card/40 backdrop-blur-xs p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <span className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                Engineering Philosophy
              </span>
              <p className="text-sm font-medium text-foreground leading-relaxed">
                &ldquo;Great software isn&apos;t just about functional code—it is
                about architectural clarity, security by design, and crafting
                experiences that remain maintainable and fast as they
                scale.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3 pt-4 lg:pt-0 lg:border-l lg:border-border/60 lg:pl-6">
              {[
                "100% Type-Safe",
                "Security by Design",
                "Zero Layout Shift",
                "Accessible UX",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    className="size-4 text-primary shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold text-foreground/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
