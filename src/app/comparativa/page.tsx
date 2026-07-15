import { Card, PageHeader } from "@/components/Card";
import CompareBadge from "@/components/CompareBadge";
import { IconScale } from "@/components/icons";
import { comparativa, extrasBosquemar, extrasPuertoMontt, type ExtraAgregado } from "@/data/piseComparativa";

function ExtrasList({ items }: { items: ExtraAgregado[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.titulo}>
          <p className="text-sm font-semibold text-foreground">{item.titulo}</p>
          <p className="mt-0.5 text-sm leading-relaxed text-muted">{item.descripcion}</p>
        </li>
      ))}
    </ul>
  );
}

export default function ComparativaPage() {
  return (
    <div>
      <PageHeader
        icon={IconScale}
        eyebrow="Corporación Educacional Futuro"
        title="Comparativa: Manual Mineduc vs. Bosquemar vs. Puerto Montt"
        description={`Lectura de qué tan alineado está cada PISE frente al "Plan Integral de Seguridad Educativa — Manual para su elaboración" (Mineduc, actualización 2025), y qué agregó cada colegio por su cuenta que el manual no exige. Ambos colegios comparten sostenedora.`}
      />

      <Card className="mb-8">
        <p className="text-sm leading-relaxed text-muted">
          Fuentes: manual oficial vigente (enero 2025, Mineduc/SENAPRED); <strong className="text-foreground">PROTEGESS 2025.pdf</strong> (PISE-SSO-001 v1.0, Colegio Bosquemar, junio 2025); <strong className="text-foreground">PISE FINAL 2026 (1).docx</strong> (Colegio Puerto Montt, RBD 22306, aprobado 29-nov-2025, actualizado marzo/abril 2026). Es una lectura comparativa de los documentos fuente, no una auditoría legal formal.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CompareBadge estado="completo" />
          <span className="text-xs text-muted">cubre lo que pide el manual</span>
          <CompareBadge estado="parcial" />
          <span className="text-xs text-muted">existe pero incompleto</span>
          <CompareBadge estado="falta" />
          <span className="text-xs text-muted">no está presente</span>
        </div>
      </Card>

      <div className="space-y-10">
        {comparativa.map((cat) => (
          <div key={cat.categoria}>
            <h2 className="mb-4 section-title">{cat.categoria}</h2>
            <div className="space-y-4">
              {cat.filas.map((fila) => (
                <Card key={fila.tema}>
                  <p className="font-display text-base font-semibold text-foreground">{fila.tema}</p>
                  <p className="mt-1.5 text-xs uppercase tracking-wide text-skyblue-600 dark:text-skyblue-400">
                    Qué exige el manual
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">{fila.manual}</p>

                  <div className="mt-4 grid grid-cols-1 gap-4 border-t border-border pt-4 sm:grid-cols-2">
                    <div>
                      <div className="mb-1.5 flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                          Bosquemar
                        </span>
                        <CompareBadge estado={fila.bosquemar} />
                      </div>
                      <p className="text-sm leading-relaxed text-muted">{fila.bosquemarNota}</p>
                    </div>
                    <div>
                      <div className="mb-1.5 flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                          Puerto Montt
                        </span>
                        <CompareBadge estado={fila.puertoMontt} />
                      </div>
                      <p className="text-sm leading-relaxed text-muted">{fila.puertoMonttNota}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="mb-4 section-title">Lo que cada colegio agregó, sin que el manual lo exigiera</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-skyblue-600 dark:text-skyblue-400">
              Colegio Bosquemar
            </p>
            <ExtrasList items={extrasBosquemar} />
          </Card>
          <Card>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-skyblue-600 dark:text-skyblue-400">
              Colegio Puerto Montt
            </p>
            <ExtrasList items={extrasPuertoMontt} />
          </Card>
        </div>
      </div>
    </div>
  );
}
