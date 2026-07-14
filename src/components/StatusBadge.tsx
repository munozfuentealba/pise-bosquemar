import type { EstadoActualizacion } from "@/data/pise";

const STYLES: Record<EstadoActualizacion, string> = {
  vigente: "bg-lime-100 text-lime-700 border-lime-400/40 dark:bg-lime-500/10 dark:text-lime-400 dark:border-lime-500/30",
  revisar: "bg-amber-100 text-amber-700 border-amber-400/40 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30",
  pendiente: "bg-red-100 text-red-700 border-red-400/40 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30",
};

const LABELS: Record<EstadoActualizacion, string> = {
  vigente: "Alineado a normativa 2025",
  revisar: "Requiere revisión",
  pendiente: "Pendiente de actualizar",
};

export default function StatusBadge({ estado, className = "" }: { estado: EstadoActualizacion; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${STYLES[estado]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {LABELS[estado]}
    </span>
  );
}
