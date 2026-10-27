import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/data/social-links";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-1/4 right-1/4 -z-10 size-64 sm:size-96 rounded-full bg-primary/5 blur-3xl pointer-events-none motion-reduce:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 -z-10 size-48 sm:size-72 rounded-full bg-primary/3 blur-2xl pointer-events-none motion-reduce:hidden"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-xs text-xs font-medium text-primary shadow-2xs mb-5">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              <span>Full-Stack Developer</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5"
            >
              Masud Rana.{" "}
              <span className="block text-muted-foreground font-normal mt-1 sm:mt-1.5">
                I build digital experiences.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
              Full-Stack Developer focused on building modern, responsive, and
              user-friendly web applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 sm:mb-10 w-full sm:w-auto">
              <a
                href="/resume.pdf"
                download="Masud_Rana_Resume.pdf"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 text-sm font-medium shadow-xs transition-transform active:scale-95 motion-reduce:transform-none gap-2 inline-flex items-center justify-center w-full sm:w-auto"
                )}
              >
                <Download className="size-4" aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              <Link
                href="/#contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "group rounded-full border-border/80 bg-background/80 hover:bg-muted/60 text-foreground h-11 px-6 text-sm font-medium transition-transform active:scale-95 motion-reduce:transform-none gap-2 inline-flex items-center justify-center w-full sm:w-auto"
                )}
              >
                <span>Contact Me</span>
                <ArrowRight
                  className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-1">
                Connect
              </span>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border/80 bg-background/80 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transform-none"
                >
                  {link.name === "GitHub" ? (
                    <GitHubIcon className="size-4" />
                  ) : (
                    <LinkedInIcon className="size-4" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer decorative card frame */}
              <div className="relative size-64 sm:size-72 md:size-80 lg:size-88 max-w-full aspect-square rounded-3xl p-2.5 bg-card/60 backdrop-blur-xs border border-border/80 shadow-lg shadow-foreground/5 transition-transform duration-300 group-hover:border-primary/40 motion-reduce:transform-none">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-muted/40">
                  <Image
                    src="/images/profile.png"
                    alt="Masud Rana - Full-Stack Developer"
                    width={400}
                    height={400}
                    priority
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-102 motion-reduce:transform-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
