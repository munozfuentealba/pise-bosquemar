import { Card, PageHeader } from "@/components/Card";
import { IconCross } from "@/components/icons";
import { rcpPasos, heimlichPasos } from "@/data/pise";

function Pasos({ pasos }: { pasos: string[] }) {
  return (
    <ol className="space-y-4">
      {pasos.map((p, i) => (
        <li key={i} className="flex gap-3 text-sm">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-500 text-xs font-bold text-charcoal-900">
            {i + 1}
          </span>
          <span className="pt-0.5">{p}</span>
        </li>
      ))}
    </ol>
  );
}

export default function PrimerosAuxiliosPage() {
  return (
    <div>
      <PageHeader
        icon={IconCross}
        eyebrow="Procedimiento de primeros auxilios"
        title="Emergencias médicas"
        description="Técnica de reanimación cardiopulmonar (RCP) y maniobra de Heimlich."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="mb-4 font-display text-xl font-semibold">Reanimación cardiopulmonar (RCP)</h2>
          <Pasos pasos={rcpPasos} />
        </Card>
        <Card>
          <h2 className="mb-4 font-display text-xl font-semibold">Maniobra de Heimlich (ahogamiento)</h2>
          <Pasos pasos={heimlichPasos} />
        </Card>
      </div>
    </div>
  );
}
