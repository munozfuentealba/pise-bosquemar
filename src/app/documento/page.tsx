import { Card, PageHeader } from "@/components/Card";
import { IconBook } from "@/components/icons";
import { documentoCompleto, type DocBlock } from "@/data/piseDocumento";

function Block({ block }: { block: DocBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-sm leading-relaxed text-muted">{block.text}</p>;
    case "subheading":
      return <h3 className="mt-2 text-base font-semibold text-foreground">{block.text}</h3>;
    case "note":
      return (
        <div className="rounded-lg border border-skyblue-400/30 bg-skyblue-500/[0.06] px-4 py-3 text-xs leading-relaxed text-skyblue-900 dark:text-skyblue-100">
          {block.text}
        </div>
      );
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag className={`space-y-1.5 text-sm leading-relaxed text-muted ${block.ordered ? "list-decimal pl-5" : ""}`}>
          {block.items.map((item, i) => (
            <li key={i} className={block.ordered ? "" : "flex gap-2"}>
              {!block.ordered && <span className="text-lime-600 dark:text-lime-400">•</span>}
              <span>{item}</span>
            </li>
          ))}
        </Tag>
      );
    }
    case "table":
      return (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[480px] border-collapse text-left text-xs">
            <thead>
              <tr className="bg-background">
                {block.headers.map((h, i) => (
                  <th key={i} className="border-b border-border px-3 py-2 font-semibold text-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="odd:bg-background/50">
                  {row.map((cell, ci) => (
                    <td key={ci} className="border-b border-border px-3 py-2 align-top text-muted">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function DocumentoCompletoPage() {
  return (
    <div>
      <PageHeader
        icon={IconBook}
        eyebrow="Fuente completa"
        title="Documento PISE completo"
        description={`Transcripción íntegra del documento fuente "PROTEGESS 2025.pdf" (PISE-SSO-001, v1.0, junio 2025), tal como está hoy en el colegio — sin resumir ni corregir. Las demás secciones de esta app son una versión curada de esta misma información para consulta rápida.`}
      />

      <Card className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-skyblue-600 dark:text-skyblue-400">
          Índice del documento
        </p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
          {documentoCompleto.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="truncate text-sm text-muted transition-colors hover:text-lime-600 dark:hover:text-lime-400"
            >
              <span className="mr-1.5 text-xs text-foreground/40">{s.numero}.</span>
              {s.titulo}
            </a>
          ))}
        </div>
      </Card>

      <div className="space-y-10">
        {documentoCompleto.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <Card>
              <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-border pb-3">
                <h2 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                  <span className="mr-2 text-skyblue-600 dark:text-skyblue-400">{section.numero}.</span>
                  {section.titulo}
                </h2>
                <span className="shrink-0 text-xs text-muted">{section.paginaFuente}</span>
              </div>
              <div className="space-y-3">
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            </Card>
          </section>
        ))}
      </div>
    </div>
  );
}
