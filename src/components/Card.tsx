import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`relative rounded-xl border border-border bg-card p-5 shadow-sm shadow-black/[0.03] ${
        interactive ? "elevate cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  icon,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: string;
}) {
  return (
    <div className="relative mb-8 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-16 -z-10 h-40 w-64 rounded-full bg-gradient-to-br from-lime-400/25 via-skyblue-400/15 to-transparent blur-3xl"
      />
      <div className="flex items-start gap-4">
        {icon && (
          <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lime-500 to-skyblue-600 text-xl shadow-md shadow-lime-600/20">
            {icon}
          </span>
        )}
        <div>
          {eyebrow && (
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-skyblue-600 dark:text-skyblue-400">
              {eyebrow}
            </p>
          )}
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h1>
          {description && (
            <p className="mt-2 max-w-3xl text-sm text-muted sm:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
