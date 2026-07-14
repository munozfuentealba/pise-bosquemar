import { Card, PageHeader } from "@/components/Card";
import { analisisHistorico, investigacionTerreno, planDeBrechas, infraestructura } from "@/data/pise";

function Cumplimiento({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-24 overflow-hidden rounded-full bg-border">
        <div
          className={`h-full rounded-full ${value === 100 ? "bg-lime-500" : value === 0 ? "bg-border" : "bg-skyblue-500"}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs font-medium text-muted">{value}%</span>
    </div>
  );
}

export default function DiagnosticoPage() {
  return (
    <div>
      <PageHeader
        icon="🔎"
        eyebrow="Metodología AIDEP"
        title="Diagnóstico de riesgos y recursos"
        description="Análisis histórico, investigación en terreno, priorización de riesgos y plan de brechas del colegio."
      />

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          A · Análisis histórico — ¿qué nos ha pasado?
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-charcoal-900 text-white">
              <tr>
                <th className="px-4 py-3 font-medium">Fecha</th>
                <th className="px-4 py-3 font-medium">Evento</th>
                <th className="px-4 py-3 font-medium">Cómo se actuó</th>
                <th className="px-4 py-3 font-medium">Seguimiento</th>
              </tr>
            </thead>
            <tbody>
              {analisisHistorico.map((e, i) => (
                <tr key={i} className="border-t border-border bg-card">
                  <td className="px-4 py-3 font-medium">{e.fecha}</td>
                  <td className="px-4 py-3">{e.evento}</td>
                  <td className="px-4 py-3 text-muted">{e.comoSeActuo}</td>
                  <td className="px-4 py-3 text-muted">{e.seguimiento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          I · Investigación en terreno — ¿dónde y cómo podría volver a pasar?
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {investigacionTerreno.map((r, i) => (
            <Card key={i}>
              <p className="font-semibold">{r.condicion}</p>
              <p className="mt-1 text-sm text-muted">📍 {r.ubicacion}</p>
              <p className="mt-2 text-sm">{r.impacto}</p>
              <p className="mt-2 text-xs text-muted">Encargado: {r.encargado}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Plan de brechas 2026
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-charcoal-900 text-white">
              <tr>
                <th className="px-4 py-3 font-medium">Requisito</th>
                <th className="px-4 py-3 font-medium">Medida</th>
                <th className="px-4 py-3 font-medium">Plazo</th>
                <th className="px-4 py-3 font-medium">Cumplimiento</th>
              </tr>
            </thead>
            <tbody>
              {planDeBrechas.map((b, i) => (
                <tr key={i} className="border-t border-border bg-card">
                  <td className="px-4 py-3 font-medium">{b.requisito}</td>
                  <td className="px-4 py-3 text-muted">{b.medida}</td>
                  <td className="px-4 py-3 text-muted">{b.plazo}</td>
                  <td className="px-4 py-3">
                    <Cumplimiento value={b.cumplimiento} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Inventario de infraestructura
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {infraestructura.map((it, i) => (
            <Card key={i} className={it.alerta ? "border-red-400/40" : ""}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">{it.categoria}</p>
                  <p className="font-medium">{it.item}</p>
                </div>
                {it.alerta && (
                  <span className="shrink-0 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-500/10 dark:text-red-400">
                    Brecha
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted">{it.valor}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
