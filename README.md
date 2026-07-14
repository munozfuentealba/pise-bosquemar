# PISE Bosquemar

Aplicación web del **Plan Integral de Seguridad Educativa (PISE)** de Colegio Bosquemar
(Corporación Educacional Futuro, Puerto Montt).

## Estado del proyecto

**Versión de diseño 1.** El objetivo de esta primera versión es validar la estructura,
navegación y diseño de la aplicación. El contenido cargado corresponde al documento
vigente del colegio (`PROTEGESS 2025.pdf`, código `PISE-SSO-001`) tal como está hoy —
**todavía no está alineado al 100% con el manual Mineduc / SENAPRED 2025**. Las brechas
identificadas quedan documentadas y visibles dentro de la propia app, en
**"Plan de actualización 2025"**.

Todo el contenido vive en un único archivo tipado, fácil de editar a medida que
avancemos con la actualización normativa: [`src/data/pise.ts`](src/data/pise.ts).

## Secciones

- **Inicio** — resumen del establecimiento, contactos clave y estado general.
- **Comité de Seguridad** — roles, responsables y suplentes.
- **Diagnóstico AIDEP** — análisis histórico, investigación en terreno, plan de brechas
  e inventario de infraestructura.
- **Protocolos de emergencia** — procedimientos de alerta / alarma / intervención por
  tipo de evento (incendio, sismo, fuga de gas, amenaza de bomba, incendio forestal,
  erupción volcánica, accidente escolar, tiroteo/atentado, contaminación del aire).
- **Directorio de emergencia** — contactos locales (Puerto Montt / Los Lagos).
- **Primeros auxilios** — RCP y maniobra de Heimlich paso a paso.
- **Simulacros y carta Gantt** — calendario y cumplimiento del ciclo 2025–2026.
- **Plan de actualización 2025** — brechas normativas priorizadas frente al manual
  Mineduc/SENAPRED vigente, para guiar la versión final del documento.

## Stack técnico

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Próximos pasos

1. Cerrar las brechas normativas listadas en "Plan de actualización 2025" junto al colegio.
2. Reemplazar el contenido estático de `src/data/pise.ts` por la versión final del PISE.
3. Evaluar backend/CMS si se necesita edición de contenido sin tocar código.
4. Despliegue (Vercel u otro hosting) cuando el contenido esté validado por el sostenedor.
