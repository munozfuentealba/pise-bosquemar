"use client";

import { IconMoon, IconSun } from "./icons";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    window.localStorage.setItem("pise-theme", next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar entre modo claro y oscuro"
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-border/60 ${className}`}
    >
      <span className="theme-icon-light flex">
        <IconSun className="h-[18px] w-[18px]" />
      </span>
      <span className="theme-icon-dark flex">
        <IconMoon className="h-[18px] w-[18px]" />
      </span>
    </button>
  );
}
