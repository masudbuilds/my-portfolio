import { GraduationCap } from "lucide-react";
import { EDUCATION_DATA } from "@/data/education";

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative w-full py-16 sm:py-20 lg:py-24 border-t border-border/40"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-2xl mb-10 sm:mb-12">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-card/60 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs mb-4">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span>Education</span>
          </div>

          <h2
            id="education-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2] mb-4"
          >
            A foundation in business, a growing passion for technology.
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            My academic background is in Business Administration, with a focus on
            Accounting. Alongside my formal education, I have been building
            practical development skills through hands-on learning and personal web
            projects.
          </p>
        </div>

        {/* Education Display Card */}
        <div className="max-w-2xl">
          {EDUCATION_DATA.map((item) => (
            <div
              key={item.degree}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 sm:p-8 shadow-xs transition-all duration-200 hover:border-primary/40 hover:bg-card/90 motion-reduce:transition-none"
            >
              {/* Academic Icon */}
              <div
                className="flex size-14 sm:size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shrink-0 transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none"
                aria-hidden="true"
              >
                <GraduationCap className="size-7 sm:size-8" />
              </div>

              {/* Details */}
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-xs font-medium text-primary w-fit border border-primary/20">
                  <span>Major</span>
                  <span className="font-semibold text-foreground">
                    {item.fieldOfStudy}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                  {item.degree}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
