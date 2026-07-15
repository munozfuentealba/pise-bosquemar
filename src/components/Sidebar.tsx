"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { BASE_PATH } from "@/lib/basePath";
import {
  IconBook,
  IconCalendar,
  IconCross,
  IconHome,
  IconPhone,
  IconSearch,
  IconSiren,
  IconUsers,
  IconWrench,
} from "./icons";

const NAV = [
  { href: "/", label: "Inicio", Icon: IconHome },
  { href: "/comite", label: "Comité de Seguridad", Icon: IconUsers },
  { href: "/diagnostico", label: "Diagnóstico AIDEP", Icon: IconSearch },
  { href: "/protocolos", label: "Protocolos de emergencia", Icon: IconSiren },
  { href: "/directorio", label: "Directorio de emergencia", Icon: IconPhone },
  { href: "/primeros-auxilios", label: "Primeros auxilios", Icon: IconCross },
  { href: "/simulacros", label: "Simulacros y carta Gantt", Icon: IconCalendar },
  { href: "/documento", label: "Documento PISE completo", Icon: IconBook },
  { href: "/actualizacion", label: "Plan de actualización 2025", Icon: IconWrench },
] as const;

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-charcoal-900 px-4 py-3 text-white lg:hidden">
        <span className="flex items-center gap-2">
          <span className="flex items-center rounded-md bg-white px-2 py-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE_PATH}/logo-bosquemar.png`}
              alt="Colegio Bosquemar — Puerto Montt"
              className="h-5 w-auto"
            />
          </span>
          <span className="text-sm font-semibold">PISE</span>
        </span>
        <div className="flex items-center gap-2">
          <ThemeToggle className="!h-8 !w-8 border-white/20 bg-white/5 text-white hover:bg-white/10" />
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

        <div className="relative flex flex-col gap-3.5 border-b border-white/10 px-5 py-6">
          <div className="w-fit rounded-xl bg-white px-4 py-3 shadow-lg shadow-black/25">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE_PATH}/logo-bosquemar.png`}
              alt="Colegio Bosquemar — Puerto Montt"
              className="h-14 w-auto"
            />
          </div>
          <div>
            <p className="font-display text-base font-semibold text-white">PISE</p>
            <p className="text-xs leading-snug text-white/50">
              Plan Integral de Seguridad Educativa · Corporación Educacional Futuro
            </p>
          </div>
        </div>

        <nav className="relative flex flex-col gap-1 px-3 py-4">
          {NAV.map((item) => {
            const active = pathname === item.href;
            const Icon = item.Icon;
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
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-transform duration-200 group-hover:scale-110 ${
                    active ? "bg-charcoal-900/10" : "bg-white/10"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
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
