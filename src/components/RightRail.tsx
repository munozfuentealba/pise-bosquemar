import { directorioEmergencia, establecimiento, protocolos } from "@/data/pise";
import { IconPhone, IconShield } from "./icons";

const destacados = directorioEmergencia.filter((c) => c.destacado);
const pendientes = protocolos.filter((p) => p.estado !== "vigente").length;

export default function RightRail() {
  return (
    <aside className="sticky top-8 hidden w-72 shrink-0 self-start xl:block">
      <div className="relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm shadow-black/[0.03]">
        <IconPhone
          aria-hidden
          className="pointer-events-none absolute bottom-3 right-3 h-16 w-16 text-foreground/[0.06]"
          strokeWidth={1.1}
        />
        <div className="relative flex items-center gap-2">
          <IconPhone className="h-4 w-4 text-skyblue-600 dark:text-skyblue-400" />
          <p className="text-xs font-bold uppercase tracking-wide text-foreground">Acceso rápido</p>
        </div>
        <ul className="relative mt-4 space-y-3">
          {destacados.map((c) => (
            <li key={c.institucion} className="flex items-center justify-between gap-3 text-sm">
              <span className="text-muted">{c.institucion}</span>
              <span className="font-bold text-foreground">{c.numero}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-4 overflow-hidden rounded-xl border border-border bg-gradient-to-br from-lime-500/10 to-skyblue-500/10 p-5">
        <IconShield
          aria-hidden
          className="pointer-events-none absolute bottom-3 right-3 h-16 w-16 text-lime-700/[0.10] dark:text-lime-400/[0.12]"
          strokeWidth={1.1}
        />
        <div className="relative flex items-center gap-2">
          <IconShield className="h-4 w-4 text-lime-700 dark:text-lime-400" />
          <p className="text-xs font-bold uppercase tracking-wide text-foreground">Estado del PISE</p>
        </div>
        <p className="relative mt-3 text-sm text-muted">
          {establecimiento.totalPersonas.toLocaleString("es-CL")} personas cubiertas por{" "}
          <span className="font-semibold text-foreground">{protocolos.length} protocolos</span>.
        </p>
        {pendientes > 0 && (
          <p className="relative mt-2 text-sm text-muted">
            <span className="font-semibold text-foreground">{pendientes}</span> protocolo(s) aún requieren
            actualización normativa.
          </p>
        )}
      </div>
    </aside>
  );
}
