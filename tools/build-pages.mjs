/* Gera en/index.html e es/index.html a partir de index.html (PT, fonte) + tools/strings.mjs.
   Sem dependências: node tools/build-pages.mjs  (rodar sempre que mudar index.html ou strings.mjs).
   Por que páginas estáticas: robôs de prévia social (WhatsApp, Facebook, X…) não rodam JS,
   então título, descrição, og:locale e hreflang precisam estar no HTML de cada idioma. */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { EN, ES } from "./strings.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://rondonvitor.github.io/web-wakewalk/";
const LANGS = {
  en: { dict: EN, html: "en", og: "en_US" },
  es: { dict: ES, html: "es", og: "es_ES" },
};
const OG_ALL = { pt: "pt_BR", en: "en_US", es: "es_ES" };

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s) => esc(s).replace(/"/g, "&quot;");

function build(src, code) {
  const { dict, html: htmlLang, og } = LANGS[code];
  const missing = new Set();
  const t = (k) => { if (dict[k] == null) missing.add(k); return dict[k] ?? ""; };
  let out = src;

  // idioma da página
  out = out.replace('<html lang="pt-BR" data-page="pt">', `<html lang="${htmlLang}" data-page="${code}">`);
  // redirecionamento só existe na raiz
  out = out.replace(/\n<script data-root-only>[\s\S]*?<\/script>/, "");
  // textos
  out = out.replace(/(<(\w+)\b[^>]*\sdata-i18n="([^"]+)"[^>]*>)([^<]*)(<\/\2>)/g,
    (_, open, _tag, key, _text, close) => open + esc(t(key)) + close);
  out = out.replace(/data-i18n-content="([^"]+)" content="[^"]*"/g,
    (_, key) => `data-i18n-content="${key}" content="${escAttr(t(key))}"`);
  out = out.replace(/aria-label="[^"]*"(\s+data-i18n-aria="([^"]+)")/g,
    (_, rest, key) => `aria-label="${escAttr(t(key))}"${rest}`);
  // URL própria + prévia social
  out = out.replace(`<link rel="canonical" href="${BASE}" />`, `<link rel="canonical" href="${BASE}${code}/" />`);
  out = out.replace(`<meta property="og:url" content="${BASE}" />`, `<meta property="og:url" content="${BASE}${code}/" />`);
  out = out.replace(/<meta property="og:locale" content="[^"]*" \/>\n(<meta property="og:locale:alternate" content="[^"]*" \/>\n)+/,
    `<meta property="og:locale" content="${og}" />\n` +
    Object.values(OG_ALL).filter((l) => l !== og).map((l) => `<meta property="og:locale:alternate" content="${l}" />\n`).join(""));
  // seletor de idioma: marca a página atual
  out = out.replace(/ class="on" aria-current="page"/, "");
  out = out.replace(new RegExp(`(<a href="[^"]*" data-lang="${code}"[^>]*?)>`), '$1 class="on" aria-current="page">');
  // caminhos relativos sobem um nível (assets, css, js, páginas legais, outros idiomas)
  out = out.replace(/\b(href|src)="(?!https?:|mailto:|#|data:)([^"]+)"/g, (_, attr, path) => `${attr}="../${path === "./" ? "" : path}"`);
  // aviso de arquivo gerado
  out = out.replace("<!DOCTYPE html>\n", `<!DOCTYPE html>\n<!-- Gerado por tools/build-pages.mjs a partir de index.html + tools/strings.mjs. Não edite à mão. -->\n`);

  if (missing.size) throw new Error(`${code}: faltam chaves ${[...missing].join(", ")}`);
  return out;
}

const src = readFileSync(join(root, "index.html"), "utf8").replace(/\r\n/g, "\n");
for (const code of Object.keys(LANGS)) {
  const file = join(root, code, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, build(src, code));
  console.log("ok", code + "/index.html");
}
