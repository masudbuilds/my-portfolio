import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social-links";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

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

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full py-16 sm:py-20 lg:py-24 border-t border-border/40"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-2xl mb-10 sm:mb-12">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-card/60 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs mb-4">
            <span
              className="size-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span>GET IN TOUCH</span>
          </div>

          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2] mb-4"
          >
            Let&apos;s build something meaningful.
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            Have a project idea, an opportunity, or a question? I&apos;d be happy
            to connect and discuss how we can turn ideas into useful digital
            experiences.
          </p>
        </div>

        {/* 3-Column Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {/* Email Card */}
          <a
            href="mailto:immasudrn@gmail.com"
            className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 sm:p-7 shadow-xs transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:transform-none"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div
                  className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none"
                  aria-hidden="true"
                >
                  <Mail className="size-6" />
                </div>
                <ArrowUpRight
                  className="size-4 text-muted-foreground transition-transform duration-200 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </div>
              <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                Email
              </span>
              <p className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
                immasudrn@gmail.com
              </p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border/60">
              Direct inbox. Send a note anytime for inquiries, projects, or
              collaborations.
            </p>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+8801876441074"
            className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 sm:p-7 shadow-xs transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:transform-none"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div
                  className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none"
                  aria-hidden="true"
                >
                  <Phone className="size-6" />
                </div>
                <ArrowUpRight
                  className="size-4 text-muted-foreground transition-transform duration-200 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </div>
              <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                Phone &amp; WhatsApp
              </span>
              <p className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
                +8801876441074
              </p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border/60">
              Direct call or WhatsApp chat for real-time discussions and
              updates.
            </p>
          </a>

          {/* Location Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 sm:p-7 shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div
                  className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20"
                  aria-hidden="true"
                >
                  <MapPin className="size-6" />
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold">
                  Available Remote
                </span>
              </div>
              <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                Location
              </span>
              <p className="text-base sm:text-lg font-bold text-foreground">
                Mymensingh, Bangladesh
              </p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border/60">
              Open to local in-person engagements and worldwide remote
              full-stack roles.
            </p>
          </div>
        </div>

        {/* Social Links & Quick CTA Footer Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-3xl border border-border/80 bg-card/40 backdrop-blur-xs p-6 sm:p-8">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              Social Presence
            </span>
            <p className="text-sm font-medium text-foreground">
              Explore my code repositories, articles, and professional network:
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                {link.name === "GitHub" ? (
                  <GitHubIcon className="size-4 shrink-0 transition-transform group-hover:scale-105 motion-reduce:transform-none" />
                ) : (
                  <LinkedInIcon className="size-4 shrink-0 transition-transform group-hover:scale-105 motion-reduce:transform-none" />
                )}
                <span>{link.name}</span>
                <ArrowUpRight
                  className="size-3 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </a>
            ))}

            <a
              href="mailto:immasudrn@gmail.com"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-5 text-xs font-medium shadow-xs gap-1.5 inline-flex items-center transition-transform active:scale-95 motion-reduce:transform-none",
              )}
            >
              <Mail className="size-3.5" aria-hidden="true" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
