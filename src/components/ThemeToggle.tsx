"use client";

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
      className={`flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white ${className}`}
    >
      <span className="relative flex h-4 w-4 items-center justify-center text-sm">
        <span className="theme-icon-light">☀️</span>
        <span className="theme-icon-dark">🌙</span>
      </span>
      <span className="theme-label-light">Modo claro</span>
      <span className="theme-label-dark">Modo oscuro</span>
    </button>
  );
}
