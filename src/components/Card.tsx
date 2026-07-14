import type { ComponentType, ReactNode, SVGProps } from "react";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export function Card({
  children,
  className = "",
  interactive = false,
  watermark: Watermark,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  /** A large, low-opacity themed icon sitting fully inside the card
   * (bottom-right), never touching or bleeding past the border. */
  watermark?: Icon;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm shadow-black/[0.03] ${
        interactive ? "elevate cursor-pointer" : ""
      } ${className}`}
    >
      {Watermark && (
        <Watermark
          aria-hidden
          className="pointer-events-none absolute bottom-3 right-3 h-16 w-16 text-foreground/[0.06]"
          strokeWidth={1.1}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

export function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: Icon;
  label: string;
  value: string | number;
}) {
  return (
    <Card watermark={Icon}>
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </Card>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: Icon;
}) {
  return (
    <div className="relative mb-10 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-16 -z-10 h-48 w-80 rounded-full bg-gradient-to-br from-lime-400/25 via-skyblue-400/15 to-transparent blur-3xl"
      />
      <div className="flex items-start gap-4">
        {Icon && (
          <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lime-500 to-skyblue-600 shadow-md shadow-lime-600/20">
            <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
          </span>
        )}
        <div>
          {eyebrow && (
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-skyblue-600 dark:text-skyblue-400">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{title}</h1>
          {description && (
            <p className="mt-2.5 max-w-3xl text-sm text-muted sm:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
