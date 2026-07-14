"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { IconChat, IconSend, IconX, IconShield } from "./icons";
import { searchChat, type ChatAnswer } from "@/lib/chatSearch";

interface Message {
  role: "bot" | "user";
  text: string;
  link?: { href: string; label: string };
}

const SUGGESTIONS = [
  "¿Qué hago en caso de sismo?",
  "Teléfono de Bomberos",
  "¿Quién es el Coordinador de Seguridad?",
  "Pasos de RCP",
];

const WELCOME: Message = {
  role: "bot",
  text: "Hola, soy el asistente del PISE Bosquemar. Pregúntame sobre protocolos, contactos de emergencia, el Comité de Seguridad o primeros auxilios.",
};

const FALLBACK: ChatAnswer = {
  text: "No encontré una respuesta exacta en el PISE. Puedes revisar las secciones del menú o escribirnos directo por WhatsApp (botón verde abajo).",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function ask(question: string) {
    const q = question.trim();
    if (!q) return;
    const answer = searchChat(q) ?? FALLBACK;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: q },
      { role: "bot", text: answer.text, link: answer.linkHref ? { href: answer.linkHref, label: answer.linkLabel ?? "Ver más" } : undefined },
    ]);
    setInput("");
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-[11.5rem] right-5 z-50 flex h-[28rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/25">
          <div className="flex items-center justify-between gap-2 bg-gradient-to-br from-lime-500 to-skyblue-600 px-4 py-3 text-white">
            <span className="flex items-center gap-2 font-display text-base font-semibold">
              <IconShield className="h-5 w-5" />
              Asistente PISE
            </span>
            <button onClick={() => setOpen(false)} aria-label="Cerrar chat" className="rounded-full p-1 hover:bg-white/15">
              <IconX className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-sm bg-lime-500 text-charcoal-900"
                      : "rounded-bl-sm bg-background text-foreground"
                  }`}
                >
                  <p>{m.text}</p>
                  {m.link && (
                    <Link href={m.link.href} onClick={() => setOpen(false)} className="mt-1.5 inline-block text-xs font-semibold text-skyblue-600 underline underline-offset-2 dark:text-skyblue-400">
                      {m.link.label} →
                    </Link>
                  )}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => ask(s)}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted transition-colors hover:border-lime-500 hover:text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta…"
              className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-lime-500"
            />
            <button
              type="submit"
              aria-label="Enviar"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-500 text-charcoal-900 transition-transform hover:scale-105"
            >
              <IconSend className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente de preguntas"}
        className="fixed bottom-[8.75rem] right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-lime-500 to-skyblue-600 text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
      >
        {open ? <IconX className="h-5 w-5" /> : <IconChat className="h-5 w-5" />}
      </button>
    </>
  );
}
