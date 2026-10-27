import { Code2, Target, BookOpen } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Development Focus",
    description: "Modern, responsive web applications.",
  },
  {
    icon: Target,
    title: "Current Goal",
    description: "Junior Full-Stack Developer role.",
  },
  {
    icon: BookOpen,
    title: "Learning Approach",
    description: "Hands-on projects and continuous learning.",
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full py-12 sm:py-16 lg:py-20 border-t border-border/40"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 w-full">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-card/60 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs mb-4">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          <span>About Me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2] mb-6"
            >
              Turning ideas into useful digital experiences.
            </h2>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Masud Rana, a Full-Stack Developer focused on building modern
                web applications that are practical, responsive, and easy to use. My
                journey into development has been driven by curiosity, hands-on
                learning, and the satisfaction of turning ideas into working products.
              </p>
              <p>
                I enjoy exploring frontend development, connecting interfaces with
                backend functionality, and learning how different technologies work
                together. Through personal projects, I continue to strengthen my
                skills, solve practical problems, and work toward my goal of becoming
                a Junior Full-Stack Developer.
              </p>
            </div>
          </div>

          {/* Right Column: Information Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs p-4 sm:p-5 shadow-xs transition-all duration-200 hover:border-primary/40 hover:bg-card/90 motion-reduce:transition-none"
                >
                  <div
                    className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0 transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none"
                    aria-hidden="true"
                  >
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-normal mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
