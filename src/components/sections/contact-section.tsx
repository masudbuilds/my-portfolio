import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social-links";
import { ContactForm } from "@/components/contact/contact-form";

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
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-card/60 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs mb-4">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          <span>GET IN TOUCH</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading, Narrative, and Contact Details */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2] mb-4"
            >
              Let&apos;s build something meaningful.
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Have a project idea, an opportunity, or a question? I&apos;d be happy
              to connect and discuss how we can turn ideas into useful digital
              experiences.
            </p>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-3.5 w-full mb-8">
              {/* Email */}
              <a
                href="mailto:immasudrn@gmail.com"
                className="group flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs p-3.5 sm:p-4 shadow-xs transition-all duration-200 hover:border-primary/40 hover:bg-card/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                <div
                  className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0 transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none"
                  aria-hidden="true"
                >
                  <Mail className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <span className="block text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                    immasudrn@gmail.com
                  </span>
                </div>
                <ArrowUpRight
                  className="size-4 text-muted-foreground transition-transform duration-200 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </a>

              {/* Phone */}
              <a
                href="tel:+8801876441074"
                className="group flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs p-3.5 sm:p-4 shadow-xs transition-all duration-200 hover:border-primary/40 hover:bg-card/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                <div
                  className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0 transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none"
                  aria-hidden="true"
                >
                  <Phone className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Phone
                  </span>
                  <span className="block text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                    +8801876441074
                  </span>
                </div>
                <ArrowUpRight
                  className="size-4 text-muted-foreground transition-transform duration-200 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs p-3.5 sm:p-4 shadow-xs">
                <div
                  className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0"
                  aria-hidden="true"
                >
                  <MapPin className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Location
                  </span>
                  <span className="block text-sm font-semibold text-foreground">
                    Mymensingh, Bangladesh
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="w-full">
              <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Connect Online
              </span>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="group inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card/60 backdrop-blur-xs px-3.5 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-card/90 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
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
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
