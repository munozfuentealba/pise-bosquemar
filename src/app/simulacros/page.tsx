import { Card, PageHeader } from "@/components/Card";
import { IconCalendar, IconCheck } from "@/components/icons";
import { simulacros, cartaGantt } from "@/data/pise";

export default function SimulacrosPage() {
  return (
    <div>
      <PageHeader
        icon={IconCalendar}
        eyebrow="Readecuación del protocolo"
        title="Simulacros y carta Gantt"
        description="Calendario de actividades y simulacros del ciclo PISE 2025–2026."
      />

      <section className="mb-10">
        <h2 className="mb-4 section-title">Simulacros programados</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {simulacros.map((s, i) => {
            const done = s.cumplimiento === "100%";
            return (
              <Card key={i} watermark={IconCalendar}>
                <p className="font-semibold">{s.tipo}</p>
                <p className="mt-1 text-sm text-muted">{s.fecha}</p>
                <span
                  className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                    done
                      ? "bg-lime-100 text-lime-700 dark:bg-lime-500/10 dark:text-lime-400"
                      : "bg-border text-muted"
                  }`}
                >
                  {done && <IconCheck className="h-3 w-3" strokeWidth={2.5} />}
                  {done ? "Cumplido" : `Pendiente · ${s.cumplimiento}`}
                </span>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-4 section-title">Carta Gantt PISE 2025–2026</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="bg-charcoal-900 text-white">
              <tr>
                <th className="px-4 py-3 font-medium">Actividad</th>
                <th className="px-4 py-3 font-medium">Plazo</th>
                <th className="px-4 py-3 font-medium">Responsable</th>
              </tr>
            </thead>
            <tbody>
              {cartaGantt.map((g, i) => (
                <tr key={i} className="border-t border-border bg-card">
                  <td className="px-4 py-3 font-medium">{g.actividad}</td>
                  <td className="px-4 py-3 text-muted">{g.plazo}</td>
                  <td className="px-4 py-3 text-muted">{g.responsable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
