"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { establecimiento } from "@/data/pise";

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
        <span className="flex items-center gap-2 text-sm font-semibold">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-lime-500 text-charcoal-900">PB</span>
          PISE · {establecimiento.nombre}
        </span>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-white/20 px-3 py-1.5 text-sm"
          aria-label="Abrir menú"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      <aside
        className={`z-30 w-full shrink-0 border-border bg-charcoal-900 text-white lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-r ${
          open ? "block" : "hidden"
        } lg:block`}
      >
        <div className="hidden flex-col gap-1 border-b border-white/10 px-5 py-6 lg:flex">
          <span className="flex items-center gap-2 text-base font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-500 text-charcoal-900">PB</span>
            PISE Bosquemar
          </span>
          <span className="text-xs text-white/50">Corporación Educacional Futuro</span>
        </div>

        <nav className="flex flex-col gap-1 px-3 py-4">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  active
                    ? "bg-lime-500 font-medium text-charcoal-900"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="text-base leading-none">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mx-3 mt-4 rounded-lg border border-skyblue-400/30 bg-skyblue-500/10 px-3 py-3 text-xs text-skyblue-100">
          <p className="font-semibold text-white">Versión de diseño 1</p>
          <p className="mt-1 text-white/70">
            Contenido base tomado del documento vigente del colegio. Se irá actualizando hasta alinearlo al 100% con la normativa Mineduc/SENAPRED 2025.
          </p>
        </div>
      </aside>
    </>
  );
}
