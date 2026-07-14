import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-border bg-card p-5 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-skyblue-600 dark:text-skyblue-400">
          {eyebrow}
        </p>
      )}
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h1>
      {description && <p className="mt-2 max-w-3xl text-sm text-muted sm:text-base">{description}</p>}
    </div>
  );
}
