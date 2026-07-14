import Link from "next/link";
import { Card, PageHeader } from "@/components/Card";
import StatusBadge from "@/components/StatusBadge";
import {
  establecimiento,
  documentoInfo,
  directorioEmergencia,
  protocolos,
  brechasNormativas,
} from "@/data/pise";

const estadoCounts = protocolos.reduce(
  (acc, p) => {
    acc[p.estado]++;
    return acc;
  },
  { vigente: 0, revisar: 0, pendiente: 0 }
);

const contactosDestacados = directorioEmergencia.filter((c) => c.destacado);

const secciones = [
  { href: "/comite", label: "Comité de Seguridad", desc: "Roles, responsables y suplentes" },
  { href: "/diagnostico", label: "Diagnóstico AIDEP", desc: "Análisis histórico, riesgos y plan de brechas" },
  { href: "/protocolos", label: "Protocolos de emergencia", desc: `${protocolos.length} protocolos por tipo de evento` },
  { href: "/directorio", label: "Directorio de emergencia", desc: `${directorioEmergencia.length} contactos locales` },
  { href: "/primeros-auxilios", label: "Primeros auxilios", desc: "RCP y maniobra de Heimlich paso a paso" },
  { href: "/simulacros", label: "Simulacros y carta Gantt", desc: "Calendario y cumplimiento" },
];

export default function Home() {
  return (
    <div>
      <PageHeader
        eyebrow={`${documentoInfo.codigo} · v${documentoInfo.versionActual}`}
        title={`PISE — ${establecimiento.nombre}`}
        description="Plan Integral de Seguridad Educativa. Esta aplicación es la versión 1 de diseño: el contenido corresponde al documento vigente del colegio y se irá completando hasta alinearlo al 100% con el manual Mineduc / SENAPRED 2025."
      />

      <div className="mb-6 rounded-xl border border-skyblue-400/40 bg-skyblue-50 p-4 text-sm text-skyblue-700 dark:border-skyblue-500/30 dark:bg-skyblue-500/10 dark:text-skyblue-200">
        <strong>Versión de diseño 1.</strong> Los datos que ves aquí vienen del documento{" "}
        <span className="font-mono text-xs">PROTEGESS 2025.pdf</span> tal como está hoy. Revisa la sección{" "}
        <Link href="/actualizacion" className="underline underline-offset-2">
          Plan de actualización 2025
        </Link>{" "}
        para ver qué falta corregir antes de la versión final.
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card>
          <p className="text-xs text-muted">Estudiantes</p>
          <p className="mt-1 text-2xl font-bold">{establecimiento.totalEstudiantes.toLocaleString("es-CL")}</p>
        </Card>
        <Card>
          <p className="text-xs text-muted">Funcionarios</p>
          <p className="mt-1 text-2xl font-bold">{establecimiento.totalFuncionarios}</p>
        </Card>
        <Card>
          <p className="text-xs text-muted">Personas totales</p>
          <p className="mt-1 text-2xl font-bold">{establecimiento.totalPersonas.toLocaleString("es-CL")}</p>
        </Card>
        <Card>
          <p className="text-xs text-muted">Protocolos activos</p>
          <p className="mt-1 text-2xl font-bold">{protocolos.length}</p>
        </Card>
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">Establecimiento</h2>
          <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-muted">Dirección</dt>
              <dd className="font-medium">{establecimiento.direccion}, {establecimiento.comuna}</dd>
            </div>
            <div>
              <dt className="text-muted">RBD</dt>
              <dd className="font-medium">{establecimiento.rbd}</dd>
            </div>
            <div>
              <dt className="text-muted">Directora</dt>
              <dd className="font-medium">{establecimiento.director}</dd>
            </div>
            <div>
              <dt className="text-muted">Coordinador de Seguridad</dt>
              <dd className="font-medium">{establecimiento.coordinadorSeguridad}</dd>
            </div>
            <div>
              <dt className="text-muted">Sostenedor</dt>
              <dd className="font-medium">{establecimiento.sostenedor}</dd>
            </div>
            <div>
              <dt className="text-muted">Web</dt>
              <dd className="font-medium">{establecimiento.web}</dd>
            </div>
          </dl>
        </Card>

        <Card>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">Contactos clave</h2>
          <ul className="space-y-3 text-sm">
            {contactosDestacados.map((c) => (
              <li key={c.institucion} className="flex items-start justify-between gap-3">
                <span className="text-muted">{c.institucion}</span>
                <span className="text-right font-semibold">{c.numero}</span>
              </li>
            ))}
          </ul>
          <Link href="/directorio" className="mt-4 inline-block text-sm font-medium text-skyblue-600 hover:underline dark:text-skyblue-400">
            Ver directorio completo →
          </Link>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">Estado de actualización normativa</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card className="flex items-center justify-between">
            <div>
              <StatusBadge estado="vigente" />
              <p className="mt-2 text-2xl font-bold">{estadoCounts.vigente}</p>
              <p className="text-xs text-muted">protocolos al día</p>
            </div>
          </Card>
          <Card className="flex items-center justify-between">
            <div>
              <StatusBadge estado="revisar" />
              <p className="mt-2 text-2xl font-bold">{estadoCounts.revisar}</p>
              <p className="text-xs text-muted">por revisar</p>
            </div>
          </Card>
          <Card className="flex items-center justify-between">
            <div>
              <StatusBadge estado="pendiente" />
              <p className="mt-2 text-2xl font-bold">{estadoCounts.pendiente}</p>
              <p className="text-xs text-muted">pendientes</p>
            </div>
          </Card>
        </div>
        <p className="mt-3 text-xs text-muted">
          {brechasNormativas.length} brechas normativas identificadas en total. Ver detalle en{" "}
          <Link href="/actualizacion" className="text-skyblue-600 underline underline-offset-2 dark:text-skyblue-400">
            Plan de actualización 2025
          </Link>.
        </p>
      </div>

      <div>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">Secciones del PISE</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {secciones.map((s) => (
            <Link key={s.href} href={s.href}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <p className="font-semibold">{s.label}</p>
                <p className="mt-1 text-sm text-muted">{s.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
