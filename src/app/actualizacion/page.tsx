import { Card, PageHeader } from "@/components/Card";
import { IconWrench } from "@/components/icons";
import { brechasNormativas, documentoInfo, type Brecha } from "@/data/pise";

const PRIORIDAD_STYLES: Record<Brecha["prioridad"], string> = {
  alta: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
  media: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  baja: "bg-lime-100 text-lime-700 dark:bg-lime-500/10 dark:text-lime-400",
};

const PRIORIDAD_LABEL: Record<Brecha["prioridad"], string> = {
  alta: "Prioridad alta",
  media: "Prioridad media",
  baja: "Prioridad baja",
};

const orden: Record<Brecha["prioridad"], number> = { alta: 0, media: 1, baja: 2 };

export default function ActualizacionPage() {
  const ordenadas = [...brechasNormativas].sort((a, b) => orden[a.prioridad] - orden[b.prioridad]);

  return (
    <div>
      <PageHeader
        icon={IconWrench}
        eyebrow="Auditoría normativa 2025"
        title="Plan de actualización a la normativa Mineduc / SENAPRED"
        description="Brechas identificadas al comparar el documento vigente del colegio (PROTEGESS 2025) con el manual PISE Mineduc 2025 y los colegios de referencia investigados. Esta lista guía la versión final del documento."
      />

      <Card className="mb-8">
        <p className="text-sm text-muted">
          Documento fuente: <span className="font-mono text-xs">{documentoInfo.codigo}</span>, versión {documentoInfo.versionActual}.
        </p>
        <p className="mt-2 text-xs text-muted">{documentoInfo.notaInconsistencia}</p>
      </Card>

      <div className="space-y-4">
        {ordenadas.map((b, i) => (
          <Card key={i} watermark={IconWrench}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold">{b.titulo}</p>
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${PRIORIDAD_STYLES[b.prioridad]}`}>
                {PRIORIDAD_LABEL[b.prioridad]}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">{b.descripcion}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
