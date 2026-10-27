"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navItems: readonly NavItem[];
  contactItem: NavItem;
  activeSection: string;
}

export function MobileMenu({
  navItems,
  contactItem,
  activeSection,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const toggleButtonRef = React.useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Close on Escape key
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        toggleButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      const originalOverflow = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close when clicking outside
  React.useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={toggleButtonRef}
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "size-9 min-h-11 min-w-11 rounded-full text-foreground hover:bg-muted/60 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        )}
      >
        {isOpen ? (
          <X
            className="size-5 transition-transform duration-200"
            aria-hidden="true"
          />
        ) : (
          <Menu
            className="size-5 transition-transform duration-200"
            aria-hidden="true"
          />
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-xs transition-opacity duration-200"
            aria-hidden="true"
            onClick={closeMenu}
          />

          {/* Floating Dropdown Drawer */}
          <div
            id="mobile-navigation"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed top-16 sm:top-20 inset-x-4 z-50 rounded-2xl border border-border/80 bg-background/95 backdrop-blur-md p-4 shadow-lg shadow-foreground/5 max-w-sm mx-auto animate-in fade-in-0 zoom-in-95 duration-200 motion-reduce:animate-none"
          >
            <nav
              className="flex flex-col gap-1"
              aria-label="Mobile Navigation Links"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("/#", "");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "min-h-11 px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        className="size-1.5 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}

              <div className="pt-2 mt-1 border-t border-border/60">
                <Link
                  href={contactItem.href}
                  onClick={closeMenu}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full min-h-11 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium shadow-xs justify-center",
                  )}
                >
                  {contactItem.label}
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export default MobileMenu;
