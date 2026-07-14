import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, PageHeader } from "@/components/Card";
import StatusBadge from "@/components/StatusBadge";
import { protocolos } from "@/data/pise";

export function generateStaticParams() {
  return protocolos.map((p) => ({ slug: p.slug }));
}

export default async function ProtocoloDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const protocolo = protocolos.find((p) => p.slug === slug);
  if (!protocolo) notFound();

  return (
    <div>
      <Link href="/protocolos" className="mb-4 inline-block text-sm text-skyblue-600 hover:underline dark:text-skyblue-400">
        ← Todos los protocolos
      </Link>

      <PageHeader eyebrow={protocolo.categoria} title={protocolo.titulo} />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <StatusBadge estado={protocolo.estado} />
        {protocolo.notaEstado && <p className="text-sm text-muted">{protocolo.notaEstado}</p>}
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">Alerta</p>
          <p className="mt-2 text-sm">{protocolo.alerta}</p>
        </Card>
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-red-600 dark:text-red-400">Alarma</p>
          <p className="mt-2 text-sm">{protocolo.alarma}</p>
        </Card>
      </div>

      <Card className="mb-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">Procedimiento</p>
        <ol className="space-y-4">
          {protocolo.pasos.map((paso, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-500 text-xs font-bold text-charcoal-900">
                {i + 1}
              </span>
              <span className="pt-0.5">{paso}</span>
            </li>
          ))}
        </ol>
      </Card>

      {protocolo.recomendaciones && protocolo.recomendaciones.length > 0 && (
        <Card>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Recomendaciones</p>
          <ul className="space-y-2 text-sm">
            {protocolo.recomendaciones.map((r, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-skyblue-600 dark:text-skyblue-400">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
