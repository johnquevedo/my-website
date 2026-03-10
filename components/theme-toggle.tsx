"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="rounded-md border border-border px-3 py-2 text-sm"
        type="button"
      >
        Theme
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      className="rounded-md border border-border px-3 py-2 text-sm transition hover:border-accent"
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
