import { Card, PageHeader } from "@/components/Card";
import { directorioEmergencia } from "@/data/pise";

export default function DirectorioPage() {
  return (
    <div>
      <PageHeader
        icon="📞"
        eyebrow="Comunicación e información"
        title="Directorio de emergencia"
        description="Contactos locales para cada tipo de emergencia. Puerto Montt / Los Lagos."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {directorioEmergencia.map((c, i) => (
          <Card key={i} className={c.notaPendiente ? "border-red-400/40" : ""}>
            <p className="text-xs uppercase tracking-wide text-muted">{c.tipo}</p>
            <p className="mt-1 font-semibold">{c.institucion}</p>
            <p className="mt-2 text-lg font-bold text-skyblue-600 dark:text-skyblue-400">{c.numero}</p>
            {c.horario && <p className="mt-1 text-xs text-muted">{c.horario}</p>}
            {c.notaPendiente && (
              <p className="mt-2 text-xs font-medium text-red-600 dark:text-red-400">⚠ {c.notaPendiente}</p>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
