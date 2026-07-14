import Link from "next/link";
import { Card, PageHeader } from "@/components/Card";
import StatusBadge from "@/components/StatusBadge";
import { IconCross, IconFlame, IconLeaf, IconShield, IconSiren } from "@/components/icons";
import { protocolos, type Protocolo } from "@/data/pise";

const CATEGORIAS = Array.from(new Set(protocolos.map((p) => p.categoria)));

const CATEGORIA_ICON: Record<string, typeof IconSiren> = {
  Incendios: IconFlame,
  "Fenómenos naturales": IconSiren,
  "Amenazas y seguridad": IconShield,
  Salud: IconCross,
  Ambiental: IconLeaf,
};

function groupBy(list: Protocolo[], categoria: string) {
  return list.filter((p) => p.categoria === categoria);
}

export default function ProtocolosPage() {
  return (
    <div>
      <PageHeader
        icon={IconSiren}
        eyebrow="Metodología ACCEDER"
        title="Protocolos de emergencia"
        description="Procedimientos de alerta, alarma, intervención y recomendaciones para cada tipo de evento."
      />

      {CATEGORIAS.map((cat) => {
        const CatIcon = CATEGORIA_ICON[cat] ?? IconSiren;
        return (
          <section key={cat} className="mb-10">
            <h2 className="mb-4 section-title">{cat}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {groupBy(protocolos, cat).map((p) => (
                <Link key={p.slug} href={`/protocolos/${p.slug}`}>
                  <Card interactive className="h-full" watermark={CatIcon}>
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-semibold">{p.titulo}</p>
                    </div>
                    <StatusBadge estado={p.estado} className="mt-3" />
                    <p className="mt-3 line-clamp-2 text-sm text-muted">{p.alerta}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
