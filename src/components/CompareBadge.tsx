import type { EstadoComparativo } from "@/data/piseComparativa";

const STYLES: Record<EstadoComparativo, string> = {
  completo: "bg-lime-100 text-lime-700 border-lime-400/40 dark:bg-lime-500/10 dark:text-lime-400 dark:border-lime-500/30",
  parcial: "bg-amber-100 text-amber-700 border-amber-400/40 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30",
  falta: "bg-red-100 text-red-700 border-red-400/40 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30",
};

const LABELS: Record<EstadoComparativo, string> = {
  completo: "Completo",
  parcial: "Parcial",
  falta: "Falta",
};

export default function CompareBadge({ estado }: { estado: EstadoComparativo }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium ${STYLES[estado]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {LABELS[estado]}
    </span>
  );
}
