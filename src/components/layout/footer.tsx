"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { NAV_ITEMS, CONTACT_ITEM } from "@/components/layout/navbar";
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: isReducedMotion ? "auto" : "smooth",
    });
  };

  const allNavLinks = [...NAV_ITEMS, CONTACT_ITEM];

  return (
    <footer className="w-full border-t border-border/70 bg-card/40 backdrop-blur-xs transition-colors">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-3">
            <Link
              href="/#home"
              className="group inline-flex items-center gap-2.5 rounded-full text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-fit"
              aria-label="Masud Rana Home"
            >
              <Image
                src="/images/mr-logo.png"
                alt="MR Logo"
                width={40}
                height={40}
                className="size-9 sm:size-10 object-contain transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none"
              />
              <span className="text-base font-semibold tracking-tight text-foreground">
                Masud <span className="text-primary font-bold">Rana</span>
              </span>
            </Link>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Full-Stack Developer
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Crafting clean, accessible, and performant web experiences with
              modern architecture and thoughtful engineering.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </p>
            <nav
              className="grid grid-cols-2 gap-2 text-sm"
              aria-label="Footer Navigation"
            >
              {allNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm py-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Connect & Social Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Connect
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Find my open-source work and professional network:
            </p>
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group flex size-10 items-center justify-center rounded-full border border-border/80 bg-background/80 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transform-none"
                >
                  {link.name === "GitHub" ? (
                    <GitHubIcon className="size-4 transition-transform group-hover:scale-110 motion-reduce:transform-none" />
                  ) : (
                    <LinkedInIcon className="size-4 transition-transform group-hover:scale-110 motion-reduce:transform-none" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {currentYear} Masud Rana. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transform-none min-h-9"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp
              className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transform-none"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
