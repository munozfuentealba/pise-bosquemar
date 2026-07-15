// Comparativa: Manual PISE Mineduc 2025 vs. Colegio Bosquemar vs. Colegio Puerto Montt
//
// Fuentes:
// - Manual: "Plan Integral de Seguridad Educativa (PISE) — Manual para su elaboración",
//   Actualización 2025 (enero 2025), Ministerio de Educación / SENAPRED.
// - Bosquemar: "PROTEGESS 2025.pdf" (PISE-SSO-001, v1.0, junio 2025) — ver piseDocumento.ts.
// - Puerto Montt: "PISE FINAL 2026 (1).docx" (Colegio Puerto Montt, RBD 22306,
//   aprobado 29-nov-2025, actualizado marzo/abril 2026).
//
// Ambos colegios pertenecen a la misma sostenedora (Corporación Educacional Futuro).
// Este comparativo es una lectura de qué tan alineado está cada documento fuente al
// manual vigente — no reemplaza una auditoría legal formal.

export type EstadoComparativo = "completo" | "parcial" | "falta";

export interface FilaComparativa {
  tema: string;
  manual: string;
  bosquemar: EstadoComparativo;
  bosquemarNota: string;
  puertoMontt: EstadoComparativo;
  puertoMonttNota: string;
}

export interface CategoriaComparativa {
  categoria: string;
  filas: FilaComparativa[];
}

export const comparativa: CategoriaComparativa[] = [
  {
    categoria: "Marco legal y forma",
    filas: [
      {
        tema: "Nombre del documento",
        manual: "Debe llamarse \"Plan Integral de Seguridad Educativa (PISE)\" (nombre vigente desde 2025).",
        bosquemar: "falta",
        bosquemarNota: "Se titula \"Plan Integral de Seguridad Escolar\" (nombre 2017/ONEMI).",
        puertoMontt: "falta",
        puertoMonttNota: "También se titula \"Plan Integral de Seguridad Escolar (PISE)\" — mismo nombre desactualizado.",
      },
      {
        tema: "Cita la Ley N°21.364/2021 (SINAPRED/SENAPRED)",
        manual: "El manual entero se fundamenta explícitamente en esta ley (pág. 4, 10).",
        bosquemar: "falta",
        bosquemarNota: "No se menciona en ningún lugar del documento ni en la bibliografía.",
        puertoMontt: "parcial",
        puertoMonttNota: "Se cita 2 veces (homologación a \"Comité GRD\" y en la sección de apoyo psicológico), pero el resto del documento sigue con base legal antigua.",
      },
      {
        tema: "Cita D.S. N°315/2010 (mod. 108/2017) y D.S. N°128/2017",
        manual: "Son la base legal que hace obligatorio el PISE para el reconocimiento oficial del Estado (pág. 8-9).",
        bosquemar: "falta",
        bosquemarNota: "No citados. Bibliografía se queda en Res. 51/2001 y Res. 2515/2018.",
        puertoMontt: "falta",
        puertoMonttNota: "No citados. Cita en su lugar la Res. Exenta N°51/2001 (2001, ya derogada/superada) como base de fiscalización.",
      },
      {
        tema: "11 principios rectores del manual",
        manual: "Prevención, Apoyo mutuo, Coordinación, Participación, Oportunidad, Interés superior del niño/a, Autonomía progresiva, Inclusión, Difusión, Sustentabilidad, Movilidad segura (pág. 10-11).",
        bosquemar: "falta",
        bosquemarNota: "No se nombran explícitamente como marco de principios.",
        puertoMontt: "falta",
        puertoMonttNota: "No se nombran explícitamente, aunque el espíritu de varios (participación, inclusión) está presente en el texto.",
      },
      {
        tema: "Clasificación de severidad (emergencia menor/mayor → desastre → catástrofe)",
        manual: "Tabla 1 (pág. 13), según capacidad de gestión: comunal/regional/nacional/internacional.",
        bosquemar: "falta",
        bosquemarNota: "No se usa esta clasificación en ningún protocolo.",
        puertoMontt: "falta",
        puertoMonttNota: "No se usa esta clasificación en ningún protocolo.",
      },
      {
        tema: "Difusión (sitio web o disponible físicamente)",
        manual: "Principio 9: el PISE debe estar publicado en el sitio web del establecimiento o disponible físicamente en el recinto (pág. 11).",
        bosquemar: "completo",
        bosquemarNota: "Ahora publicado en una app web pública — cumple y excede el mínimo exigido.",
        puertoMontt: "parcial",
        puertoMonttNota: "Documento Word interno; no consta que esté publicado en el sitio web del colegio o disponible físicamente de forma verificable.",
      },
    ],
  },
  {
    categoria: "Comité y gobernanza",
    filas: [
      {
        tema: "Constitución del Comité con cargos y responsables",
        manual: "Planilla N°1 del Anexo 1 (pág. 39-40): establecimiento, elaborado por, revisado por, fecha de aprobación.",
        bosquemar: "parcial",
        bosquemarNota: "Comité nombrado en el cuerpo del documento (8 roles), pero el Acta de Constitución formal (pág. 68) está en blanco y sin firmar.",
        puertoMontt: "parcial",
        puertoMonttNota: "Portada con \"Elaborado por / Revisado por / Fecha de aprobación\" nombrados, pero con línea de firma en blanco (\"Firma y timbre\").",
      },
      {
        tema: "Roles operativos con titular y suplente",
        manual: "Recomendado para continuidad operativa ante ausencias.",
        bosquemar: "parcial",
        bosquemarNota: "Solo el Director tiene subrogante nombrada; el resto de los roles no tiene suplente.",
        puertoMontt: "completo",
        puertoMonttNota: "Jefe de Emergencia y 7 Coordinadores de piso/área tienen reemplazante nombrado explícitamente.",
      },
      {
        tema: "Reuniones periódicas del Comité con actas",
        manual: "Se espera evidencia de funcionamiento continuo, no solo documento de papel.",
        bosquemar: "parcial",
        bosquemarNota: "Carta Gantt indica \"reuniones mensuales\" pero sin evidencia de actas levantadas.",
        puertoMontt: "completo",
        puertoMonttNota: "Reunión ordinaria mensual + extraordinaria ante riesgo inminente, con obligación explícita de levantar acta cada vez.",
      },
    ],
  },
  {
    categoria: "Inclusión y accesibilidad",
    filas: [
      {
        tema: "Registro de estudiantes/funcionarios con discapacidad o necesidad de apoyo",
        manual: "Tabla 4 (pág. 16) y Anexo 2 sección 3 \"Acciones inclusivas de preparación\" exigen registro y planificación por tipo de necesidad.",
        bosquemar: "falta",
        bosquemarNota: "Solo 2 personas nombradas como \"personal de apoyo\", sin registro ni clasificación por tipo de necesidad.",
        puertoMontt: "completo",
        puertoMonttNota: "Sección dedicada con tabla de registro por tipo (visual/táctil, auditivo, movilidad, TEA) y curso — el más alineado al manual en este punto.",
      },
      {
        tema: "Vínculo con equipo PIE",
        manual: "El manual sugiere coordinar con el PIE del establecimiento (pág. 19).",
        bosquemar: "falta",
        bosquemarNota: "Se sugiere en el documento pero no se concreta un vínculo ejecutado.",
        puertoMontt: "parcial",
        puertoMonttNota: "Menciona \"Equipo Programa de Integración Escolar: Sí\" en antecedentes, pero sin desarrollo operativo dentro de los protocolos.",
      },
    ],
  },
  {
    categoria: "Diagnóstico — Metodología AIDEP",
    filas: [
      {
        tema: "Análisis histórico con datos reales del establecimiento",
        manual: "Planilla N°2 (pág. 24): fecha, qué ocurrió, consecuencias, por qué, cómo se actuó.",
        bosquemar: "completo",
        bosquemarNota: "3 eventos reales y específicos (incendio 2015, COVID 2021, robo 2025).",
        puertoMontt: "completo",
        puertoMonttNota: "4 eventos reales y específicos (alerta tsunami 2010, erupción 2015, amago incendio 2018, caída de apoderada 2025).",
      },
      {
        tema: "Investigación en terreno",
        manual: "Planilla N°3 (pág. 25-26): condición de riesgo, ubicación, impacto, encargado, plazo.",
        bosquemar: "completo",
        bosquemarNota: "Riesgos de entorno e instalaciones documentados con encargado, sin plazos explícitos en todas las filas.",
        puertoMontt: "completo",
        puertoMonttNota: "Riesgos documentados con encargado y plazo sugerido en cada fila (ej. \"1-2 semanas\", \"3 días a 1 semana\").",
      },
      {
        tema: "Matriz probabilidad × consecuencia",
        manual: "Tabla cruzada (pág. 25) con niveles Muy Alto/Alto/Moderado/Bajo/Muy Bajo.",
        bosquemar: "falta",
        bosquemarNota: "Solo columna simple Alto/Medio/Bajo, sin cruzar probabilidad y consecuencia.",
        puertoMontt: "falta",
        puertoMonttNota: "Igual limitación: usa \"Riesgo Alto/Moderado\" simple, sin matriz cruzada formal.",
      },
      {
        tema: "Mapa de riesgo (interno y externo)",
        manual: "Dos mapas: externo (amenazas del entorno: industrias, bomberos, sitios eriazos) e interno (pág. 28-29).",
        bosquemar: "parcial",
        bosquemarNota: "Solo plano de vías de evacuación interno; no hay mapa externo con amenazas del entorno.",
        puertoMontt: "parcial",
        puertoMonttNota: "Planos de evacuación por piso incluidos como anexos de imagen; no hay mapa externo tipo el ejemplo del manual.",
      },
      {
        tema: "Plan de brechas con seguimiento (% cumplimiento)",
        manual: "No exigido explícitamente, pero coherente con \"Discusión de prioridades\" y \"Readecuación\".",
        bosquemar: "completo",
        bosquemarNota: "Tabla \"Plan de brechas 2026\" con % de cumplimiento por medida — buena práctica no exigida por el manual.",
        puertoMontt: "parcial",
        puertoMonttNota: "Tiene tabla de priorización con plazos, pero sin seguimiento porcentual de cumplimiento.",
      },
    ],
  },
  {
    categoria: "Planes de respuesta — Metodología ACCEDER",
    filas: [
      {
        tema: "Alerta y alarma definidas",
        manual: "Debe especificarse el medio (timbre, campana, megáfono) y quién la activa (pág. 33).",
        bosquemar: "completo",
        bosquemarNota: "Timbre + megáfono + radios, con encargado nombrado (Dionisio Godoy).",
        puertoMontt: "completo",
        puertoMonttNota: "Códigos diferenciados por tipo de emergencia (timbre continuo = incendio, intermitente = sismo, etc.) — más granular que Bosquemar.",
      },
      {
        tema: "Mínimo obligatorio: sismo de alta magnitud, incendio, emanación de gas",
        manual: "Objetivo específico 2 del manual (pág. 11): exige cubrir al menos estas 3 amenazas.",
        bosquemar: "completo",
        bosquemarNota: "Los 3 desarrollados en detalle.",
        puertoMontt: "completo",
        puertoMonttNota: "Los 3 desarrollados en detalle, con roles diferenciados (Coordinador de área/piso/general).",
      },
      {
        tema: "Vinculación con sistema ABC (Ambulancia 131, Bomberos 132, Carabineros 133)",
        manual: "Objetivo específico 4 del manual (pág. 11).",
        bosquemar: "completo",
        bosquemarNota: "Directorio de emergencia completo con estos y otros contactos.",
        puertoMontt: "completo",
        puertoMonttNota: "Directorio de emergencia con contactos nombrados (Carabineros Plan Cuadrante, Bomberos, SAMU vía Mutual).",
      },
      {
        tema: "Evaluación primaria y secundaria + readecuación del protocolo",
        manual: "Pasos explícitos de la metodología ACCEDER (pág. 35-36).",
        bosquemar: "parcial",
        bosquemarNota: "Mencionado brevemente como \"evaluación secundaria del proceso\", sin desarrollo de readecuación.",
        puertoMontt: "completo",
        puertoMonttNota: "Desarrolla evaluación primaria, decisiones, evaluación secundaria y readecuación del plan casi calcando la estructura del manual.",
      },
    ],
  },
  {
    categoria: "Anexos y cumplimiento normativo específico",
    filas: [
      {
        tema: "Anexo 2 — Pauta de autoevaluación de simulacro",
        manual: "Checklist Sí/No/NA sobre comportamiento, inclusión, respuesta y tiempos de evacuación (pág. 58-63).",
        bosquemar: "falta",
        bosquemarNota: "No incluida como formato propio.",
        puertoMontt: "falta",
        puertoMonttNota: "No incluida como formato propio, aunque menciona una \"ficha sencilla de evaluación\" genérica como recomendación.",
      },
      {
        tema: "Anexo 3 — Normativas consolidadas",
        manual: "Listado de decretos/leyes de infraestructura y seguridad en un anexo dedicado (pág. 64-65).",
        bosquemar: "parcial",
        bosquemarNota: "Tiene bibliografía, pero con normativa desactualizada (Res. 51/2001, Res. 2515/2018) y sin los decretos de infraestructura (desfibriladores, Sello Verde, etc.).",
        puertoMontt: "parcial",
        puertoMonttNota: "Cita normativa relevante dispersa en el texto (Ley 21.364, 16.744, 21.156, D.S. 338/2023), pero no consolidada en un anexo dedicado.",
      },
      {
        tema: "Anexo 4 — Diagrama de flujo ante situación constitutiva de delito",
        manual: "Diagrama formal que deriva a Carabineros/PDI y Sostenedor/SLEP si es constitutivo de delito, con denuncia a Fiscalía en 24h (pág. 66-67).",
        bosquemar: "falta",
        bosquemarNota: "No existe diagrama de flujo ni distinción formal \"constitutivo de delito / no constitutivo\".",
        puertoMontt: "parcial",
        puertoMonttNota: "Tiene protocolos muy detallados de balacera y asalto con aviso a Carabineros, pero sin el diagrama de flujo formal ni el plazo de 24h explícito.",
      },
      {
        tema: "Desfibrilador (DEA) — obligatorio con matrícula ≥500 alumnos (Ley 21.156/2019 + D.S. 56/2020)",
        manual: "Anexo 3 (pág. 64): obligación legal explícita para establecimientos con matrícula ≥500.",
        bosquemar: "falta",
        bosquemarNota: "1.080 alumnos — supera ampliamente el umbral legal. El documento no menciona DEA ni desfibrilador en ningún lugar. Brecha legal clara.",
        puertoMontt: "parcial",
        puertoMonttNota: "488 alumnos — bajo el umbral legal, por lo que no es obligatorio. Aun así, la Carta Gantt menciona capacitación DEA y desfibrilador ya gestionado con la Mutual.",
      },
      {
        tema: "Seguro escolar (D.S. 313/1973, Ley 16.744)",
        manual: "Anexo 3 lo referencia como normativa de fondo aplicable (pág. 65).",
        bosquemar: "completo",
        bosquemarNota: "Sección propia desarrollada: a quiénes protege, cobertura, declaración individual de accidente.",
        puertoMontt: "parcial",
        puertoMonttNota: "Mencionado solo tangencialmente dentro del protocolo de accidente escolar, sin desarrollo de cobertura ni declaración individual.",
      },
      {
        tema: "Glosario",
        manual: "Sección completa con más de 20 términos técnicos definidos (pág. 68-71).",
        bosquemar: "falta",
        bosquemarNota: "No incluye glosario.",
        puertoMontt: "completo",
        puertoMonttNota: "Glosario extenso (20+ términos), varios calcados casi textualmente del manual 2025.",
      },
    ],
  },
];

export interface ExtraAgregado {
  titulo: string;
  descripcion: string;
}

export const extrasBosquemar: ExtraAgregado[] = [
  {
    titulo: "Protocolo de prevención de incendios y resguardo de instalaciones",
    descripcion: "Reglas administrativas de gas, electricidad y trabajos en caliente (soldadura/corte) — el manual no exige este nivel de detalle preventivo-operativo.",
  },
  {
    titulo: "\"Cómo usar un extintor\" en 4 pasos ilustrados",
    descripcion: "Instructivo visual paso a paso no presente en el manual.",
  },
  {
    titulo: "RCP y maniobra de Heimlich paso a paso",
    descripcion: "Procedimiento médico de primeros auxilios detallado (reanimación cardiopulmonar, atragantamiento) — el manual no desarrolla primeros auxilios a este nivel clínico.",
  },
  {
    titulo: "Protocolo de contaminación del aire (episodios MP10)",
    descripcion: "Medidas específicas ante preemergencia/emergencia ambiental — razonable dado el contexto de Puerto Montt, pero no exigido por el manual.",
  },
  {
    titulo: "Plan de Brechas 2026 con % de cumplimiento",
    descripcion: "Tabla de seguimiento cuantitativo de brechas normativas — buena práctica de gestión propia, no exigida por el manual.",
  },
];

export const extrasPuertoMontt: ExtraAgregado[] = [
  {
    titulo: "Protocolo de emergencia por ciberataque",
    descripcion: "Amenaza no contemplada en absoluto por el manual 2025 (que solo cubre origen natural, antrópico y biológico) — adición propia del colegio.",
  },
  {
    titulo: "Protocolo de asalto (diferenciado de bomba/balacera)",
    descripcion: "Procedimiento específico ante robo con enfrentamiento a la víctima, no desarrollado como categoría propia en el manual.",
  },
  {
    titulo: "Protocolo de corte de energías (eléctrica y agua)",
    descripcion: "Metodología de alerta/alarma/comunicación ante corte de suministros — no es un protocolo exigido por el manual.",
  },
  {
    titulo: "Protocolo de inundación por anegamiento de aguas lluvia",
    descripcion: "Distinto del \"inundación\" genérico del manual — enfocado en filtraciones de la propia infraestructura (edificio de madera antiguo).",
  },
  {
    titulo: "Protocolo de temporal / vientos intensos",
    descripcion: "Categoría propia, separada de sismo/tsunami.",
  },
  {
    titulo: "Protocolo de tsunami separado del sismo",
    descripcion: "Con evacuación específica a zonas altas (cerros) — más desarrollado que la nota genérica de \"zona sobre cota de inundación\" típica de otros PISE.",
  },
  {
    titulo: "Protocolo de balaceras con sub-casos por ubicación",
    descripcion: "Distingue explícitamente qué hacer en sala de clases, en patio/recreo, en la salida y dentro del establecimiento durante clases — nivel de detalle no exigido por el manual.",
  },
  {
    titulo: "Apoyo psicológico frente a desastres (equipo CEFI + PAP)",
    descripcion: "Sección propia citando Ley 21.364 y D.S. 338/2023, con Primeros Auxilios Psicológicos (PAP) y derivación a Mutual — desarrolla la \"Fase de recuperación\" del ciclo de riesgo con más profundidad que el manual.",
  },
  {
    titulo: "Monitores estudiantiles para medir tiempos de reacción",
    descripcion: "Estudiantes de 4° medio designados como monitores de evaluación de simulacros — rol no sugerido por el manual.",
  },
  {
    titulo: "Homologación explícita del Comité de Seguridad al \"Comité GRD\"",
    descripcion: "Vincula formalmente su comité con la figura de Comité de Gestión del Riesgo de Desastres de la Ley 21.364, y menciona la posibilidad de integrarse a Mesas de Trabajo Comunales de GRD — articulación con el sistema territorial que el manual sugiere pero que Bosquemar no concreta.",
  },
];
