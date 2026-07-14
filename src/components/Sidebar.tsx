"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { href: "/", label: "Inicio", icon: "🏠" },
  { href: "/comite", label: "Comité de Seguridad", icon: "👥" },
  { href: "/diagnostico", label: "Diagnóstico AIDEP", icon: "🔎" },
  { href: "/protocolos", label: "Protocolos de emergencia", icon: "🚨" },
  { href: "/directorio", label: "Directorio de emergencia", icon: "📞" },
  { href: "/primeros-auxilios", label: "Primeros auxilios", icon: "🩹" },
  { href: "/simulacros", label: "Simulacros y carta Gantt", icon: "📅" },
  { href: "/actualizacion", label: "Plan de actualización 2025", icon: "🛠️" },
] as const;

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-charcoal-900 px-4 py-3 text-white lg:hidden">
        <span className="flex items-center gap-2">
          <span className="rounded-md bg-white px-2 py-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-bosquemar.png" alt="Colegio Bosquemar" className="h-6 w-auto" />
          </span>
          <span className="text-sm font-semibold">PISE</span>
        </span>
        <div className="flex items-center gap-2">
          <ThemeToggle className="px-2 py-1.5" />
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-white/20 px-3 py-1.5 text-sm"
            aria-label="Abrir menú"
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>

      <aside
        className={`relative z-30 w-full shrink-0 overflow-hidden border-border bg-charcoal-900 text-white lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-r ${
          open ? "block" : "hidden"
        } lg:block`}
      >
        {/* Decorative brand blobs, echoing the circular marks in the school logo */}
        <div
          aria-hidden
          className="decor-blob pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-lime-500 opacity-[0.16] blur-3xl"
        />
        <div
          aria-hidden
          className="decor-blob pointer-events-none absolute -left-20 top-1/2 h-64 w-64 rounded-full bg-skyblue-500 opacity-[0.18] blur-3xl"
          style={{ animationDelay: "-6s" }}
        />

        <div className="relative flex flex-col gap-3 border-b border-white/10 px-5 py-6">
          <div className="flex items-center justify-between gap-2">
            <div className="w-fit rounded-lg bg-white px-3 py-2.5 shadow-lg shadow-black/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-bosquemar.png" alt="Colegio Bosquemar" className="h-9 w-auto" />
            </div>
            <ThemeToggle className="hidden !p-2 lg:flex" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">PISE — Plan Integral de Seguridad Educativa</p>
            <p className="text-xs text-white/50">Corporación Educacional Futuro</p>
          </div>
        </div>

        <nav className="relative flex flex-col gap-1 px-3 py-4">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`group relative flex items-center gap-3 overflow-hidden rounded-lg py-2.5 pl-4 pr-3 text-sm transition-all duration-200 ${
                  active
                    ? "bg-lime-500 font-medium text-charcoal-900"
                    : "text-white/75 hover:translate-x-0.5 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute left-0 top-1/2 h-0 w-1 -translate-y-1/2 rounded-r-full bg-lime-400 transition-all duration-200 ${
                    active ? "hidden" : "group-hover:h-6"
                  }`}
                />
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-sm transition-transform duration-200 group-hover:scale-110 ${
                    active ? "bg-charcoal-900/10" : "bg-white/10"
                  }`}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative mx-3 mt-4 rounded-lg border border-skyblue-400/30 bg-skyblue-500/10 px-3 py-3 text-xs text-skyblue-100">
          <p className="font-semibold text-white">Versión de diseño 1</p>
          <p className="mt-1 text-white/70">
            Contenido base tomado del documento vigente del colegio. Se irá actualizando hasta alinearlo al 100% con la normativa Mineduc/SENAPRED 2025.
          </p>
        </div>
      </aside>
    </>
  );
}
