// Datos del PISE — Colegio Bosquemar
//
// Fuente v1: "PROTEGESS 2025.pdf" (PISE-SSO-001), documento vigente del colegio.
// Este archivo es la "fuente de verdad" editable del contenido del PISE.
// Iremos actualizando estos datos progresivamente hasta alinearlos al 100%
// con el manual Mineduc 2025 (Ley 21.364 / SENAPRED / AIDEP-ACCEDER completo).
// Cada bloque marcado con estado "pendiente" es una brecha identificada en la
// auditoría normativa y debe revisarse antes de publicar la versión final.

export type EstadoActualizacion = "vigente" | "revisar" | "pendiente";

export interface Establecimiento {
  nombre: string;
  region: string;
  provincia: string;
  comuna: string;
  direccion: string;
  sostenedor: string;
  director: string;
  subrogante: string;
  coordinadorSeguridad: string;
  rbd: string;
  web: string;
  instagram: string;
  facebook: string;
  niveles: string[];
  totalFuncionarios: number;
  totalEstudiantes: number;
  totalPersonas: number;
}

export const establecimiento: Establecimiento = {
  nombre: "Colegio Bosquemar",
  region: "Los Lagos",
  provincia: "Llanquihue",
  comuna: "Puerto Montt",
  direccion: "Avenida Los Notros 1561",
  sostenedor: "Gabriel Toledo Brintrup — Corporación Educacional Futuro",
  director: "Jenifer Gallardo Santana",
  subrogante: "Constanza Ule Mancilla",
  coordinadorSeguridad: "Dionisio Godoy Oyarzun",
  rbd: "40351-2",
  web: "https://www.colegiobosquemar.cl",
  instagram: "@colegiobosquemaroficial",
  facebook: "Colegio Bosquemar Oficial",
  niveles: [
    "Transición I y II (prekínder y kínder)",
    "Educación Básica",
    "Educación Media (Científico/Humanista)",
  ],
  totalFuncionarios: 78,
  totalEstudiantes: 1080,
  totalPersonas: 1107,
};

export interface DocumentoInfo {
  codigo: string;
  versionActual: string;
  fechaVersion: string;
  preparadoPor: string;
  revisadoPor: string;
  aprobadoPor: string;
  notaInconsistencia: string;
}

export const documentoInfo: DocumentoInfo = {
  codigo: "PISE-SSO-001",
  versionActual: "1.0",
  fechaVersion: "Junio 2025 (portada indica Marzo 2025 v1.2 — inconsistencia a corregir en la próxima revisión)",
  preparadoPor: "Silvana Méndez Albarracín — Prevención de Riesgos",
  revisadoPor: "Jenifer Gallardo Santana — Directora",
  aprobadoPor: "Gabriel Toledo Brintrup — Sostenedor",
  notaInconsistencia:
    "La portada del PDF fuente (PROTEGESS 2025) indica \"Marzo 2025, versión 1.2\" mientras el resto del documento indica \"Junio 2025, versión 1.0\". Corregir en la próxima actualización formal.",
};

export interface MiembroComite {
  cargo: string;
  responsable: string;
  suplente?: string;
  funciones: string[];
}

export const comiteSeguridad: MiembroComite[] = [
  {
    cargo: "Director(a)",
    responsable: "Jenifer Gallardo Santana",
    suplente: "Constanza Ule Mancilla (subrogante)",
    funciones: [
      "Responsable de la seguridad en la unidad educativa.",
      "Preside el Comité de Seguridad Escolar.",
      "Dispone los recursos para implementar las medidas de seguridad requeridas.",
      "Asegura la difusión del PISE a toda la comunidad educativa.",
    ],
  },
  {
    cargo: "Comité de Emergencia Escolar",
    responsable: "Dionisio Godoy Oyarzun",
    funciones: [
      "Coordina las actividades del Comité de Seguridad Escolar.",
      "Asigna funciones a los integrantes de la comunidad educativa.",
      "Coordina el contacto con las Redes de Apoyo (Bomberos, Carabineros, etc.).",
    ],
  },
  {
    cargo: "Representante del Comité Paritario",
    responsable: "Maribel Ramírez Oyarzo",
    funciones: ["Cumple con las tareas que acuerde el Comité de Seguridad."],
  },
  {
    cargo: "Representante de profesores",
    responsable: "Carlos Barria Arzola",
    funciones: ["Comunica hacia sus representados la labor general del establecimiento en materia de seguridad escolar."],
  },
  {
    cargo: "Representante de Asistentes de aula",
    responsable: "Stefanie Gunther Shand",
    funciones: ["Coordina y transmite información desde el Comité hacia sus representados y viceversa."],
  },
  {
    cargo: "Representante de los Alumnos",
    responsable: "Laura Guentelican Valdés",
    funciones: ["Aporta su visión frente a la seguridad desde el ámbito de su rol como alumno(a)."],
  },
  {
    cargo: "Representante de Padres y Apoderados",
    responsable: "Valeria Valladares Varela",
    funciones: ["Colabora activamente en las actividades de carácter preventivo del colegio."],
  },
  {
    cargo: "Personal de Apoyo en la Emergencia",
    responsable: "Karen Maldonado",
    suplente: "Leonardo Barra",
    funciones: [
      "Guiar y orientar a estudiantes con necesidades educativas especiales hacia el punto de encuentro.",
    ],
  },
];

export const brigadaPrimerosAuxilios = [
  "Dionisio Godoy",
  "Fernanda Mancilla",
  "Juan Cárcamo",
];

export interface ContactoEmergencia {
  institucion: string;
  tipo: string;
  numero: string;
  horario?: string;
  destacado?: boolean;
  notaPendiente?: string;
}

export const directorioEmergencia: ContactoEmergencia[] = [
  { institucion: "Ambulancia (SAMU)", tipo: "Accidente", numero: "131", destacado: true },
  { institucion: "Bomberos", tipo: "Incendio", numero: "132", destacado: true },
  { institucion: "Carabineros", tipo: "Seguridad", numero: "133", destacado: true, notaPendiente: "Falta número directo de la comisaría del sector en el documento fuente." },
  { institucion: "SENAPRED", tipo: "Catástrofes", numero: "600 586 7700", destacado: true },
  { institucion: "Mutual de Seguridad", tipo: "Accidentes", numero: "1407 / 600 2000 555", horario: "Lunes a viernes 08:30–18:00 hrs" },
  { institucion: "Clínica Universitaria (Andes Salud)", tipo: "Accidentes", numero: "(65) 225 8360", horario: "Atención 24 hrs" },
  { institucion: "Hospital Base Puerto Montt", tipo: "Accidentes", numero: "(65) 2490000" },
  { institucion: "Bomberos — 2ª Cía. Materiales Peligrosos", tipo: "Incendio", numero: "(65) 2252888" },
  { institucion: "Bomberos — 4ª Cía. Rescate", tipo: "Incendio", numero: "(65) 2242444" },
  { institucion: "Bomberos — 8ª Cía. Puerto Montt", tipo: "Incendio", numero: "(65) 2253333" },
  { institucion: "PDI", tipo: "Seguridad", numero: "134 / (65) 2252398" },
  { institucion: "Centro Información Toxicológica UC (CITUC)", tipo: "Emergencias químicas", numero: "(65) 2247 3600 / (65) 2235 3800" },
  { institucion: "CRELL", tipo: "Corte de luz", numero: "800 100 080" },
  { institucion: "ESSAL / SURALIS", tipo: "Corte de agua", numero: "600 401 4000 / 600 401 400" },
  { institucion: "LIPIGAS", tipo: "Gas", numero: "600 600 9200" },
  { institucion: "ABASTIBLE", tipo: "Gas", numero: "600 200 9000" },
  { institucion: "GASCO", tipo: "Gas", numero: "600 600 7799" },
];

export interface EventoHistorico {
  fecha: string;
  evento: string;
  danoPersonas: string;
  comoSeActuo: string;
  danoInfraestructura: string;
  seguimiento: string;
}

export const analisisHistorico: EventoHistorico[] = [
  {
    fecha: "2015",
    evento: "Incendio declarado",
    danoPersonas: "No hubo",
    comoSeActuo: "Evacuación y suspensión de clases",
    danoInfraestructura: "Daño en bodega, cocinas JUNAEB y sala de educación parvularia",
    seguimiento: "Mantenimiento periódico, cierre de llaves de paso en área de cocina",
  },
  {
    fecha: "2021",
    evento: "Personal contagiado virus COVID-19",
    danoPersonas: "Ausencia laboral y sintomatología propia del contagio",
    comoSeActuo: "Se notifica a SEREMI de Salud y se interrumpe la jornada laboral",
    danoInfraestructura: "No existe daño a la infraestructura",
    seguimiento: "Activación procedimiento C-19",
  },
  {
    fecha: "2025",
    evento: "Robo",
    danoPersonas: "No hubo daños a las personas",
    comoSeActuo: "Se notificó a Carabineros",
    danoInfraestructura: "Daño en Laboratorio de computación y oficina de Dirección Académica",
    seguimiento: "Se refuerzan medidas de seguridad del recinto",
  },
];

export interface RiesgoTerreno {
  condicion: string;
  ubicacion: string;
  impacto: string;
  encargado: string;
}

export const investigacionTerreno: RiesgoTerreno[] = [
  {
    condicion: "Tráfico vehicular intenso",
    ubicacion: "Avenida Los Notros",
    impacto: "Ausentismo o deserción escolar; retrasos en los ingresos",
    encargado: "Municipio",
  },
  {
    condicion: "Delincuencia nocturna",
    ubicacion: "Sectores adyacentes (Mirasol)",
    impacto: "Pérdida de infraestructura escolar; aumento de vulnerabilidad emocional",
    encargado: "Organismos de seguridad",
  },
  {
    condicion: "Proximidad a recintos penitenciarios",
    ubicacion: "700–800 mts al noroeste",
    impacto: "Vulnerabilidad socioemocional de la comunidad educativa",
    encargado: "Municipio",
  },
  {
    condicion: "Tablero eléctrico sin bloqueo, sin señalética de peligro",
    ubicacion: "Básica",
    impacto: "Riesgo eléctrico",
    encargado: "Mantención / Prevención",
  },
  {
    condicion: "Red húmeda sin señalética",
    ubicacion: "Prebásica – Básica",
    impacto: "Demora en respuesta ante incendio",
    encargado: "Mantención / Prevención",
  },
  {
    condicion: "No existe punto de encuentro señalizado",
    ubicacion: "Básica",
    impacto: "Desorden en evacuación",
    encargado: "Mantención / Prevención",
  },
  {
    condicion: "No existe señalética de vías de evacuación",
    ubicacion: "Básica",
    impacto: "Demora / desorden en evacuación",
    encargado: "Mantención / Prevención",
  },
];

export interface ItemBrecha {
  requisito: string;
  medida: string;
  plazo: string;
  responsable: string;
  cumplimiento: number; // 0-100
}

export const planDeBrechas: ItemBrecha[] = [
  { requisito: "Personal sin capacitación GRD", medida: "Programar capacitación para todo el personal incluyendo asistentes", plazo: "01-06-2025 → 30-06-2025", responsable: "Prevención de Riesgos / Mantención", cumplimiento: 100 },
  { requisito: "Mantención de extintores", medida: "Programar mantención de todos los extintores y habilitados para uso", plazo: "01-06-2025 → 01-07-2025", responsable: "Prevención de Riesgos / Mantención", cumplimiento: 100 },
  { requisito: "Instalación señalética al interior del colegio", medida: "Solicitar señalética y colocar en lugares identificados con factores de riesgo", plazo: "01-06-2025 → 02-07-2025", responsable: "Prevención de Riesgos / Mantención", cumplimiento: 100 },
  { requisito: "Simulacros", medida: "Programar y planificar simulacros de emergencia en conjunto con las autoridades", plazo: "01-06-2026 → 30-06-2026", responsable: "Prevención de Riesgos / Mantención", cumplimiento: 0 },
  { requisito: "Instalación conos verticales en zona segura", medida: "Solicitar adquisición de señalética vertical para delimitar la zona segura", plazo: "01-06-2026 → 30-06-2026", responsable: "Prevención de Riesgos / Mantención", cumplimiento: 0 },
  { requisito: "Delimitación de punto de encuentro al interior del colegio", medida: "Solicitar señalética para definir punto de encuentro en hall prebásica-básica-media", plazo: "01-06-2026 → 30-06-2026", responsable: "Prevención de Riesgos / Mantención", cumplimiento: 0 },
];

export interface InfraestructuraItem {
  categoria: string;
  item: string;
  valor: string;
  alerta?: boolean;
}

export const infraestructura: InfraestructuraItem[] = [
  { categoria: "Edificio", item: "Superficie edificada", valor: "50.000 m² (dato a verificar con el colegio — parece alto para la matrícula)", alerta: true },
  { categoria: "Edificio", item: "Estructura principal", valor: "Hormigón armado" },
  { categoria: "Edificio", item: "Estacionamientos", valor: "50" },
  { categoria: "Alarmas", item: "Bocina de alarma de incendio", valor: "No", alerta: true },
  { categoria: "Alarmas", item: "Detectores de humo", valor: "Sí" },
  { categoria: "Alarmas", item: "Detectores de calor", valor: "No", alerta: true },
  { categoria: "Alarmas", item: "Palancas de alarma de incendio", valor: "No", alerta: true },
  { categoria: "Comunicación", item: "Teléfonos internos", valor: "No", alerta: true },
  { categoria: "Comunicación", item: "Citófonos", valor: "No", alerta: true },
  { categoria: "Comunicación", item: "Sistema de altavoces", valor: "Sí" },
  { categoria: "Combate de incendios", item: "Red seca", valor: "No", alerta: true },
  { categoria: "Combate de incendios", item: "Red húmeda", valor: "Sí" },
  { categoria: "Combate de incendios", item: "Estanque de almacenamiento de agua", valor: "No", alerta: true },
  { categoria: "Combate de incendios", item: "Extintores portátiles", valor: "Sí (18 unidades)" },
  { categoria: "Combate de incendios", item: "Red inerte de electricidad", valor: "No", alerta: true },
  { categoria: "Electricidad", item: "Grupo electrógeno", valor: "No", alerta: true },
  { categoria: "Vías de evacuación", item: "Vías de evacuación / punto de reunión / zona de seguridad", valor: "Sí" },
  { categoria: "Ascensores", item: "Ascensores", valor: "No aplica (edificio de 0 pisos sobre nivel de calle)" },
];

export interface Protocolo {
  slug: string;
  titulo: string;
  categoria: "Incendios" | "Fenómenos naturales" | "Amenazas y seguridad" | "Salud" | "Ambiental";
  estado: EstadoActualizacion;
  notaEstado?: string;
  alerta: string;
  alarma: string;
  pasos: string[];
  recomendaciones?: string[];
}

export const protocolos: Protocolo[] = [
  {
    slug: "incendio",
    titulo: "Incendio en las instalaciones",
    categoria: "Incendios",
    estado: "vigente",
    alerta:
      "Quien detecte fuego debe comunicarse verbalmente de inmediato con Portería, indicando lugar y características del siniestro. Portería avisa a Bomberos (132), al Encargado del Comité de Emergencia y a Dirección.",
    alarma: "El Encargado del Comité de Emergencia activa la evacuación mediante el sistema de timbres (sonido intermitente).",
    pasos: [
      "1ª Evacuación: los docentes piden a los estudiantes ponerse de pie y salen ordenadamente por filas hacia la zona de seguridad, fila más cercana al pasillo primero.",
      "El profesor recupera el libro de clases y es el último en abandonar la sala, verificando que no quede nadie dentro.",
      "Instrucciones permanentes: no correr, no detenerse ni devolverse, no dejar la fila, guardar silencio, no portar nada.",
      "2ª Intervención: el Encargado de Emergencia corta electricidad y gas, revisa áreas de materiales peligrosos y controla el siniestro si cuenta con los medios (red húmeda, extintores) sin exponer su integridad.",
      "3ª Primeros auxilios: en zona de seguridad se evalúa y asiste a lesionados.",
      "Apoyo: Bomberos coordina las actividades a realizar junto al Encargado de Emergencia.",
    ],
    recomendaciones: [
      "Si el fuego impide salir: no abrir puertas calientes, desplazarse gateando, proteger boca y nariz con paño mojado, acercarse a una ventana y avisar presencia.",
    ],
  },
  {
    slug: "sismo-terremoto",
    titulo: "Sismo y terremoto",
    categoria: "Fenómenos naturales",
    estado: "revisar",
    notaEstado: "Falta clasificación de severidad del manual 2025 (menor/mayor/desastre/catástrofe) y referencia explícita a Ley 21.364.",
    alerta: "No requiere alerta especial: todas las personas perciben el sismo directamente.",
    alarma: "El Encargado de Emergencia llama a evacuar mediante timbre sonoro continuo solo si el movimiento es de intensidad mayor (terremoto) o hay daños estructurales. Si el sismo es leve, se omite este paso.",
    pasos: [
      "Durante el sismo: alejarse de ventanas y elementos que puedan caer, protegerse debajo de las mesas en posición fetal. No es recomendable escapar durante el movimiento.",
      "El profesor toma el libro de clases y abre las puertas de la sala.",
      "Esperar la orden de evacuar (timbre intermitente).",
      "1ª Evacuación: mismo procedimiento fila por fila que en incendio.",
      "2ª Intervención: corte de suministros (electricidad, gas), revisión de áreas de materiales peligrosos.",
      "3ª Primeros auxilios en zona de seguridad. Apoyo de Bomberos (132) o paramédicos (131) si es necesario.",
      "Buscar 'triángulos de vida' junto a objetos grandes y sólidos si no es posible salir.",
    ],
    recomendaciones: [
      "No salir corriendo — el mayor peligro está al salir corriendo durante el sismo.",
      "Después: cortar suministros, no encender fósforos/encendedores, evacuar hacia zona de seguridad, no acercarse a zonas costeras (riesgo de tsunami), prepararse para réplicas.",
    ],
  },
  {
    slug: "fuga-gas-quimicos",
    titulo: "Fuga de gas o derrame de químicos",
    categoria: "Incendios",
    estado: "vigente",
    alerta: "Cortar el suministro de gas cerrando la llave de paso desde el estanque, evitando que la fuga continúe desde el origen.",
    alarma: "Emitir alarma de evacuación total o parcial según corresponda.",
    pasos: [
      "Eliminar cualquier fuente de ignición: cortar suministro eléctrico, no encender fósforos/luces/linternas, evitar uso de celulares.",
      "Evacuar a las personas a un espacio ventilado.",
      "Una vez cortado el gas y eliminada cualquier fuente de energía, abrir puertas y ventanas para ventilar.",
      "Llamar a Bomberos (132) y a la compañía de gas correspondiente (LIPIGAS / ABASTIBLE / GASCO).",
      "En caso de derrame de químicos: evaluar situación, determinar magnitud, reconocer el producto (envases/etiquetas/rombos), aplicar hojas de seguridad, contener con arena o paños absorbentes.",
    ],
  },
  {
    slug: "amenaza-bomba",
    titulo: "Amenaza de bomba",
    categoria: "Amenazas y seguridad",
    estado: "vigente",
    alerta: "Quien reciba una llamada, nota anónima o detecte un artefacto sospechoso informa de inmediato a Dirección (o su sustituto designado).",
    alarma: "Dirección avisa a Carabineros (133) entregando todos los antecedentes. Se convoca al Comité de Emergencia y se difunde la alerta de evacuación sin mencionar el motivo, mediante timbre sonoro intermitente.",
    pasos: [
      "Registrar: nombre y cargo de quien recibió la amenaza, hora exacta, palabras textuales, ruidos de fondo, tipo de acento.",
      "El Comité de Emergencia se despliega por las dependencias dando aviso de evacuación hacia la zona segura.",
      "En el punto de encuentro cada profesor(a) jefe toma a cargo a su curso y pasa lista.",
      "Esperar indicaciones de Carabineros. Entregar toda la información recopilada a las autoridades.",
      "Si se determina retiro anticipado: aviso por NotasNet, correo a CEGEPA y comunicado oficial; registro de firma por curso al momento del retiro.",
    ],
  },
  {
    slug: "contaminacion-aire",
    titulo: "Episodios de contaminación del aire",
    categoria: "Ambiental",
    estado: "vigente",
    alerta: "La autoridad competente informa mala calidad del aire (preemergencia o emergencia ambiental por MP10).",
    alarma: "No aplica evacuación — son medidas preventivas de permanencia bajo techo.",
    pasos: [
      "Actividades bajo techo; se suspenden actividades deportivas de toda índole (incluida educación física).",
      "Se recomienda a las familias que los niños no lleven balones, cuerdas u otros elementos de exigencia física.",
      "Reforzar temáticas de autocuidado y medioambiente; lavado frecuente de manos.",
      "Uso de mascarillas si los estudiantes están resfriados; el colegio mantiene stock de mascarillas desechables.",
      "El mismo procedimiento aplica ante erupción volcánica y presencia de cenizas.",
    ],
  },
  {
    slug: "incendio-forestal",
    titulo: "Incendio forestal",
    categoria: "Fenómenos naturales",
    estado: "vigente",
    alerta: "CONAF monitorea técnicamente y determina el nivel de alertamiento, que transmite a SENAPRED. Sistema de 3 niveles: Alerta Verde Temprana Preventiva, Alerta Amarilla, Alerta Roja.",
    alarma: "Aviso mediante megáfono; ante Alerta Roja el Coordinador de Emergencia activa la evacuación total externa hacia la zona de seguridad definida por las autoridades locales durante el desarrollo del evento.",
    pasos: [
      "Antes: mantener limpia la vegetación alrededor del colegio, crear franja de seguridad sin material combustible, asegurar extintores/hidrantes en buen estado.",
      "Durante: activar evacuación total externa, dirigir por vías y zonas de seguridad definidas por CONAF/Bomberos/Carabineros en terreno, usar paños húmedos para evitar inhalación de humo.",
      "Después: verificar seguridad del entorno (humo, brasas, árboles inestables), contabilizar estudiantes/personal, brindar apoyo emocional, no regresar al edificio hasta autorización oficial.",
    ],
  },
  {
    slug: "erupcion-volcanica",
    titulo: "Erupción volcánica",
    categoria: "Fenómenos naturales",
    estado: "vigente",
    alerta: "SERNAGEOMIN (OVDAS) monitorea y determina el nivel técnico, transmitido a SENAPRED. Mismo sistema de 3 niveles (Verde/Amarilla/Roja).",
    alarma: "Ante Alerta Roja, el Líder de respuesta activa el plan mediante timbre sonoro continuo: evacuación total externa a la zona definida por el municipio (terrenos altos, alejados de cursos de agua).",
    pasos: [
      "Cortar energía eléctrica, llaves de paso de agua y gas.",
      "Cubrir depósitos y fuentes de agua para evitar contaminación con cenizas.",
      "Evacuar por vías y zonas de seguridad definidas por el municipio; cubrirse nariz y boca durante la evacuación.",
      "Después: mantener a estudiantes y personal en lugar seguro lejos de ceniza y gases, evitar contacto directo con la ceniza, esperar autorización oficial antes de volver al establecimiento.",
    ],
  },
  {
    slug: "accidente-escolar",
    titulo: "Accidente escolar",
    categoria: "Salud",
    estado: "vigente",
    alerta: "Toda lesión que un/a estudiante sufra a causa o con ocasión de sus estudios (incluye trayecto directo casa–colegio).",
    alarma: "Clasificación por gravedad: leve, menos grave, grave.",
    pasos: [
      "Leves/malestares (hematomas, torceduras, contusiones leves): traslado a primeros auxilios; aviso al apoderado vía agenda o correo; registro en bitácora.",
      "Menos graves (contusiones menores, cortes leves, esguinces, sangrado de nariz): derivación a primeros auxilios para curación; aviso telefónico al apoderado si se requiere evaluación médica posterior.",
      "Graves (caídas de altura, golpes en cabeza/espalda, quemaduras, fracturas, pérdida de conciencia): NO mover al accidentado; llamar de inmediato a ambulancia (131); avisar al apoderado y entregar formulario de seguro escolar; un funcionario acompaña al centro asistencial hasta la llegada del apoderado.",
      "El colegio NO está autorizado para suministrar ningún tipo de medicamento a los alumnos.",
      "Toda atención debe quedar registrada en bitácora de primeros auxilios, incluidos accidentes graves con investigación correspondiente.",
    ],
  },
  {
    slug: "tiroteo-atentado",
    titulo: "Aviso de tiroteo, bomba u otro atentado",
    categoria: "Amenazas y seguridad",
    estado: "pendiente",
    notaEstado: "El manual 2025 exige un Anexo 4 (diagrama de flujo ante situación constitutiva de delito) con obligación de denuncia a Fiscalía dentro de 24 horas — no está presente en el documento fuente.",
    alerta: "Cualquier miembro de la comunidad que tome conocimiento de una amenaza (llamada, redes sociales, rayado, mensaje) debe comunicarse de inmediato con Dirección, aportando evidencias si es posible (pantallazos, fotos, grabaciones).",
    alarma: "Dirección suspende inmediatamente las actividades académicas y da aviso de emergencia de tiroteo/atentado.",
    pasos: [
      "Los estudiantes se trasladan caminando rápido (no corriendo) a zonas seguras alejadas de puertas y ventanas, dirigidos por docentes.",
      "Los asistentes de educación verifican estudiantes rezagados, desorientados o con crisis de pánico y los llevan a lugar seguro.",
      "Dirección da la orden de cierre del establecimiento y avisa de inmediato a Carabineros (133) o PDI (134), permaneciendo en contacto mientras dure la emergencia.",
      "Docentes a cargo de menores de 12 años realizan actividades lúdicas para mantener la calma mientras dure la emergencia.",
      "Nadie debe asomarse por puertas/ventanas ni tomar fotos o videos del suceso.",
      "Una vez que la autoridad policial da por terminada la emergencia, se avisa a los apoderados por correo electrónico para el retiro de estudiantes; luego se retiran docentes, asistentes y funcionarios.",
    ],
  },
];

export interface Simulacro {
  tipo: string;
  fecha: string;
  cumplimiento: string;
}

export const simulacros: Simulacro[] = [
  { tipo: "Simulacro de Incendio", fecha: "5 de diciembre de 2025", cumplimiento: "100%" },
  { tipo: "Simulacro de Sismo", fecha: "Junio 2026", cumplimiento: "0%" },
  { tipo: "Simulacro Bomba", fecha: "Octubre 2026", cumplimiento: "0%" },
];

export const cartaGantt = [
  { actividad: "Constitución Comité de Seguridad", plazo: "Octubre 2025", responsable: "Prevención – Mutual de Seguridad" },
  { actividad: "Capacitación GRD", plazo: "Octubre 2025", responsable: "Prevención – Mutual de Seguridad" },
  { actividad: "Modificaciones PROTEGESS", plazo: "Noviembre 2025", responsable: "Prevención – Mutual de Seguridad" },
  { actividad: "Difusión PISE 2026", plazo: "Marzo 2026", responsable: "Prevención – Dirección" },
  { actividad: "Reuniones Comité de Seguridad", plazo: "Mensual", responsable: "Comité de Seguridad" },
  { actividad: "Simulacros", plazo: "Junio 2026 / Septiembre 2026", responsable: "Prevención – Comité de Seguridad" },
];

export const rcpPasos: string[] = [
  "Si la persona está inconsciente: colóquela cuidadosamente boca arriba. Si existe posibilidad de lesión en la columna, dos personas deben moverla para evitar torcerle la cabeza y el cuello.",
  "Abra la vía respiratoria: levante la barbilla con dos dedos mientras empuja hacia abajo la frente con la otra mano.",
  "Verifique si respira: observe, escuche y sienta si hay respiración durante unos segundos.",
  "Si no respira o tiene dificultad: cubra firmemente con su boca la boca de la persona, cierre la nariz apretando con los dedos, mantenga la barbilla levantada y dé 2 insuflaciones (cada una de ~1 segundo, haciendo que el pecho se levante).",
  "Si no tiene pulso, inicie compresiones: coloque la base de una mano en el esternón (justo debajo de los pezones) y la otra mano sobre la primera, con el cuerpo directamente sobre las manos.",
  "Aplique 30 compresiones rápidas y fuertes, sin pausa, permitiendo que el pecho se levante completamente entre cada una.",
  "Dé 2 insuflaciones más. Continúe el ciclo (30 compresiones + 2 insuflaciones) hasta que la persona se recupere o llegue ayuda. Use un DEA si está disponible.",
  "Si la persona vuelve a respirar por sí misma, colóquela en posición de recuperación y controle periódicamente su respiración hasta que llegue la ayuda.",
];

export const heimlichPasos: string[] = [
  "Pregunte a la persona: '¿Se está ahogando? ¿Puede hablar?'. No administre primeros auxilios si tose vigorosamente y puede hablar — una tos fuerte puede desalojar el objeto espontáneamente.",
  "La señal universal de ahogamiento es tomarse la garganta con una o ambas manos.",
  "Párese detrás de la persona y rodéela con los brazos por la cintura.",
  "Cierre un puño y colóquelo del lado del pulgar justo por arriba del ombligo de la persona, bien abajo del esternón.",
  "Tome el puño con la otra mano.",
  "Efectúe compresiones rápidas hacia arriba y hacia adentro con los puños.",
  "Continúe con las compresiones hasta que el objeto sea desalojado o la persona pierda el conocimiento. Si queda inconsciente, colóquela en el piso, llame al 131 y comience RCP.",
];

export interface Brecha {
  titulo: string;
  descripcion: string;
  prioridad: "alta" | "media" | "baja";
}

export const brechasNormativas: Brecha[] = [
  {
    titulo: "Nombre y fundamento legal desactualizados",
    descripcion:
      "El documento se titula \"Plan Integral de Seguridad Escolar\" (nombre 2017/ONEMI) en vez de \"Seguridad Educativa\" (nombre vigente 2025). No cita la Ley 21.364/2021 ni el D.S. 338/2023. La bibliografía se queda en normativa ONEMI-era y no cita el manual Mineduc 2025 vigente.",
    prioridad: "alta",
  },
  {
    titulo: "Faltan piezas estructurales del manual 2025",
    descripcion:
      "Clasificación de severidad (emergencia menor/mayor → desastre → catástrofe), los 11 principios rectores, Anexo 2 (pauta de autoevaluación de simulacro) y Anexo 4 (diagrama de flujo ante situación constitutiva de delito, con obligación de denuncia a Fiscalía en 24h).",
    prioridad: "alta",
  },
  {
    titulo: "Inclusión y discapacidad muy débil",
    descripcion:
      "Solo 2 personas nombradas como apoyo, sin instructivo por tipo de discapacidad ni vínculo ejecutado con el equipo PIE del colegio (el documento lo sugiere pero no lo concreta).",
    prioridad: "alta",
  },
  {
    titulo: "Infraestructura de seguridad contra incendios incompleta",
    descripcion:
      "No hay bocina de alarma de incendio, detectores de calor, palancas de alarma, red seca, red inerte ni grupo electrógeno. Solo timbre + megáfono. Requiere gestión con el sostenedor, no solo redacción.",
    prioridad: "alta",
  },
  {
    titulo: "Organigrama de emergencia sin suplentes",
    descripcion:
      "Solo el Director tiene subrogante nombrada. Los roles operativos críticos (líder de evacuación, primeros auxilios, etc.) deberían tener titular + suplente, como en los colegios de referencia.",
    prioridad: "media",
  },
  {
    titulo: "Brigada de primeros auxilios reducida",
    descripcion:
      "Solo 3 personas capacitadas para 1.107 personas totales, sin desglose por ciclo/edificio.",
    prioridad: "media",
  },
  {
    titulo: "Actas anexas incompletas y sin firmar",
    descripcion:
      "El Acta de Constitución del Comité y la tabla de nómina de miembros están en blanco en el documento fuente, pese a que el cuerpo del PISE sí nombra al comité real. Pendiente de cierre administrativo formal.",
    prioridad: "alta",
  },
  {
    titulo: "Falta mapa de riesgos gráfico y matriz probabilidad × consecuencia",
    descripcion:
      "El manual 2025 pide un mapa con simbología visual (tipo Google Maps) y una matriz semáforo de probabilidad × consecuencia para priorizar riesgos. Actualmente solo hay tablas de texto con nivel Alto/Medio/Bajo.",
    prioridad: "media",
  },
];
