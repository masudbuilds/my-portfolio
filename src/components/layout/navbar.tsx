"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileMenu } from "@/components/layout/mobile-menu";

export const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/#projects" },
] as const;

export const CONTACT_ITEM = { label: "Contact", href: "/#contact" } as const;

export function Navbar() {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects");
  const [scrolled, setScrolled] = React.useState(false);
  const [homeActiveSection, setHomeActiveSection] =
    React.useState<string>("home");

  // Derive active section: on project pages, highlight projects; otherwise use intersection observer
  const activeSection = isProjectPage ? "projects" : homeActiveSection;

  // Track scroll position for floating glassmorphism appearance
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  React.useEffect(() => {
    if (isProjectPage) return;

    const sectionIds = [
      "home",
      "about",
      "skills",
      "education",
      "projects",
      "contact",
    ];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length > 0) {
          intersecting.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
          setHomeActiveSection(intersecting[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isProjectPage]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto w-full max-w-5xl rounded-full border transition-all duration-300 motion-reduce:transition-none flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5",
          scrolled
            ? "bg-background/85 backdrop-blur-md border-border/80 shadow-xs shadow-foreground/5"
            : "bg-background/60 backdrop-blur-sm border-border/40 shadow-none",
        )}
      >
        {/* Left: Masud Rana Wordmark */}
        <Link
          href="/#home"
          className="group flex items-center gap-2 sm:gap-2.5 rounded-full px-2 py-1 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Masud Rana Home"
        >
          <Image
            src="/images/mr-logo.png"
            alt="MR Logo"
            width={48}
            height={48}
            priority
            className="size-10 sm:size-11 border rounded-full object-contain transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none"
          />
          <span className="text-base sm:text-lg font-semibold tracking-tight text-foreground">
            Masud <span className="text-primary font-bold">Rana</span>
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Desktop Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("/#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isActive
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Theme Toggle, Contact CTA, & Mobile Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />

          <Link
            href={CONTACT_ITEM.href}
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "hidden sm:inline-flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-8 sm:h-9 px-4 text-xs sm:text-sm font-medium shadow-xs transition-transform active:scale-95 motion-reduce:transform-none",
            )}
          >
            {CONTACT_ITEM.label}
          </Link>

          <MobileMenu
            navItems={NAV_ITEMS}
            contactItem={CONTACT_ITEM}
            activeSection={activeSection}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
