import { Card, PageHeader } from "@/components/Card";
import { IconUsers } from "@/components/icons";
import { comiteSeguridad, brigadaPrimerosAuxilios, establecimiento } from "@/data/pise";

export default function ComitePage() {
  return (
    <div>
      <PageHeader
        icon={IconUsers}
        eyebrow="Gobernanza"
        title="Comité de Seguridad Escolar"
        description="Estructura responsable de la toma de decisiones y operaciones antes, durante y después de una emergencia."
      />

      <Card className="mb-8">
        <p className="text-sm text-muted">
          Presidido por la Directora <strong className="text-foreground">{establecimiento.director}</strong>, con{" "}
          <strong className="text-foreground">{establecimiento.subrogante}</strong> como subrogante, y coordinado
          operativamente por <strong className="text-foreground">{establecimiento.coordinadorSeguridad}</strong>.
        </p>
      </Card>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {comiteSeguridad.map((m) => (
          <Card key={m.cargo}>
            <p className="text-xs font-semibold uppercase tracking-wide text-skyblue-600 dark:text-skyblue-400">
              {m.cargo}
            </p>
            <p className="mt-1 text-lg font-semibold">{m.responsable}</p>
            {m.suplente && <p className="text-sm text-muted">Suplente: {m.suplente}</p>}
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {m.funciones.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-lime-600 dark:text-lime-400">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="mb-4 section-title">
          Brigada de primeros auxilios
        </h2>
        <Card>
          <div className="flex flex-wrap gap-3">
            {brigadaPrimerosAuxilios.map((n) => (
              <span
                key={n}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium"
              >
                {n}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">
            Solo 3 personas capacitadas para {establecimiento.totalPersonas.toLocaleString("es-CL")} personas totales.
            Ver observación en el Plan de actualización.
          </p>
        </Card>
      </div>
    </div>
  );
}
