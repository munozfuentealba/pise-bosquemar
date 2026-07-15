"use client";

import { useState } from "react";
import { BASE_PATH } from "@/lib/basePath";

export default function IntroSplash() {
  const [closing, setClosing] = useState(false);
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-charcoal-900 px-6 transition-opacity duration-500 ease-out ${
        closing ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      onTransitionEnd={() => {
        if (closing) setHidden(true);
      }}
    >
      <div
        aria-hidden
        className="decor-blob pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime-500 opacity-[0.18] blur-3xl"
      />
      <div
        aria-hidden
        className="decor-blob pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-skyblue-500 opacity-[0.2] blur-3xl"
        style={{ animationDelay: "-6s" }}
      />

      <div
        className={`relative flex w-full max-w-md flex-col items-center gap-7 text-center transition-all duration-500 ease-out ${
          closing ? "translate-y-4 scale-95 opacity-0" : "translate-y-0 scale-100 opacity-100"
        }`}
      >
        <div className="w-fit rounded-2xl bg-white px-7 py-5 shadow-2xl shadow-black/40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE_PATH}/logo-bosquemar.png`}
            alt="Colegio Bosquemar — Puerto Montt"
            className="h-20 w-auto sm:h-24"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Corporación Educacional Futuro
          </p>
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
            PISE
          </h1>
          <p className="text-base font-medium leading-snug text-white/70 sm:text-lg">
            Plan Integral de Seguridad Educativa
          </p>
        </div>

        <button
          type="button"
          onClick={() => setClosing(true)}
          className="elevate mt-2 rounded-full bg-lime-500 px-8 py-3 text-sm font-bold text-charcoal-900 shadow-lg shadow-black/25 transition-transform hover:scale-105 active:scale-95"
        >
          Conoce más →
        </button>
      </div>
    </div>
  );
}
