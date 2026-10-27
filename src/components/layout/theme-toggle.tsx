"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};

function useIsMounted() {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useIsMounted();

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="size-9 min-h-[44px] min-w-[44px] rounded-full text-muted-foreground"
        aria-label="Toggle theme"
        disabled
      >
        <span className="size-4 opacity-0" aria-hidden="true" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="size-9 min-h-[44px] min-w-[44px] rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode (currently ${isDark ? "dark" : "light"} mode)`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun
          className="size-4 text-emerald-400 transition-transform duration-300 hover:rotate-45 motion-reduce:transform-none"
          aria-hidden="true"
        />
      ) : (
        <Moon
          className="size-4 text-emerald-700 transition-transform duration-300 hover:-rotate-12 motion-reduce:transform-none"
          aria-hidden="true"
        />
      )}
    </Button>
  );
}

export default ThemeToggle;
