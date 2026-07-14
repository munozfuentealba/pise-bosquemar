import {
  comiteSeguridad,
  directorioEmergencia,
  establecimiento,
  heimlichPasos,
  protocolos,
  rcpPasos,
} from "@/data/pise";

export interface ChatAnswer {
  text: string;
  linkHref?: string;
  linkLabel?: string;
}

interface KbEntry {
  keywords: Set<string>;
  /** Specific lookups (a phone number, a name) outrank long protocol text
   * that merely mentions the same word in passing. */
  weight: number;
  answer: ChatAnswer;
}

// Words too generic to carry meaning on their own (kept out of scoring so
// they don't create false matches against unrelated long text blocks).
const STOPWORDS = new Set([
  "que", "cual", "cuales", "como", "donde", "quien", "quienes", "para", "por",
  "con", "los", "las", "del", "una", "uno", "hay", "esta", "este", "esa",
  "ese", "sobre", "cuando", "tiene", "tengo", "hago", "puedo", "debe",
]);

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string): Set<string> {
  return new Set(
    normalize(text)
      .split(" ")
      .filter((t) => t.length > 2 && !STOPWORDS.has(t))
  );
}

function buildKb(): KbEntry[] {
  const kb: KbEntry[] = [];

  for (const p of protocolos) {
    kb.push({
      keywords: tokenize(`${p.titulo} ${p.categoria} ${p.alerta}`),
      weight: 1,
      answer: {
        text: `${p.titulo}: ${p.alerta} ${p.pasos[0] ?? ""}`,
        linkHref: `/protocolos/${p.slug}`,
        linkLabel: "Ver protocolo completo",
      },
    });
  }

  for (const c of directorioEmergencia) {
    kb.push({
      keywords: tokenize(`telefono numero contacto llamar ${c.institucion} ${c.tipo}`),
      weight: 2,
      answer: {
        text: `El número de ${c.institucion} (${c.tipo}) es ${c.numero}.`,
        linkHref: "/directorio",
        linkLabel: "Ver directorio completo",
      },
    });
  }

  for (const m of comiteSeguridad) {
    kb.push({
      keywords: tokenize(`quien es ${m.cargo} ${m.responsable}`),
      weight: 2,
      answer: {
        text: `${m.cargo}: ${m.responsable}.${m.suplente ? ` Suplente: ${m.suplente}.` : ""}`,
        linkHref: "/comite",
        linkLabel: "Ver Comité de Seguridad",
      },
    });
  }

  kb.push({
    keywords: tokenize("rcp reanimacion cardiopulmonar paro cardiaco compresiones pecho"),
    weight: 2,
    answer: {
      text: `Reanimación cardiopulmonar (RCP): ${rcpPasos[0]} ${rcpPasos[1]}`,
      linkHref: "/primeros-auxilios",
      linkLabel: "Ver pasos completos de RCP",
    },
  });

  kb.push({
    keywords: tokenize("ahogamiento atragantamiento heimlich asfixia atoro"),
    weight: 2,
    answer: {
      text: `Maniobra de Heimlich: ${heimlichPasos[0]} ${heimlichPasos[2]}`,
      linkHref: "/primeros-auxilios",
      linkLabel: "Ver pasos completos",
    },
  });

  kb.push({
    keywords: tokenize("director directora dirige colegio"),
    weight: 2,
    answer: { text: `La Directora de ${establecimiento.nombre} es ${establecimiento.director}.` },
  });

  kb.push({
    keywords: tokenize("coordinador coordinadora seguridad escolar coordina"),
    weight: 2,
    answer: { text: `El Coordinador de Seguridad es ${establecimiento.coordinadorSeguridad}.` },
  });

  kb.push({
    keywords: tokenize("direccion ubicacion queda direccion colegio"),
    weight: 2,
    answer: { text: `${establecimiento.nombre} está en ${establecimiento.direccion}, ${establecimiento.comuna}.` },
  });

  kb.push({
    keywords: tokenize("sostenedor corporacion futuro dueno"),
    weight: 2,
    answer: { text: `El sostenedor es ${establecimiento.sostenedor}.` },
  });

  return kb;
}

let kbCache: KbEntry[] | null = null;

export function searchChat(query: string): ChatAnswer | null {
  if (!kbCache) kbCache = buildKb();
  const qTokens = [...tokenize(query)];
  if (qTokens.length === 0) return null;

  let best: { score: number; answer: ChatAnswer } | null = null;
  for (const entry of kbCache) {
    let matches = 0;
    for (const token of qTokens) {
      if (entry.keywords.has(token)) matches += 1;
    }
    if (matches === 0) continue;
    const score = matches * entry.weight;
    if (!best || score > best.score) {
      best = { score, answer: entry.answer };
    }
  }

  if (!best) return null;
  return best.answer;
}
