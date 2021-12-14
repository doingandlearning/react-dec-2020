import {
  js_yaml_default
} from "./chunk-A3KXTWJK.js";
import "./chunk-AW43RHKU.js";

// node_modules/@slidev/parser/dist/chunk-4LEQMYU6.mjs
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function toArray(array) {
  array = array || [];
  if (Array.isArray(array))
    return array;
  return [array];
}
function uniq(array) {
  return Array.from(new Set(array));
}
function range(...args) {
  let start, stop, step;
  if (args.length === 1) {
    start = 0;
    step = 1;
    [stop] = args;
  } else {
    [start, stop, step = 1] = args;
  }
  const arr = [];
  let current = start;
  while (current < stop) {
    arr.push(current);
    current += step || 1;
  }
  return arr;
}
function notNullish(v) {
  return v != null;
}
function isTruthy(v) {
  return Boolean(v);
}
var isNumber = (val) => typeof val === "number";
var isObject = (val) => toString.call(val) === "[object Object]";
function objectMap(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => fn(k, v)).filter(notNullish));
}
function parseRangeString(total, rangeStr) {
  if (!rangeStr || rangeStr === "all" || rangeStr === "*")
    return range(1, total + 1);
  const pages = [];
  for (const part of rangeStr.split(/[,;]/g)) {
    if (!part.includes("-")) {
      pages.push(+part);
    } else {
      const [start, end] = part.split("-", 2);
      pages.push(...range(+start, !end ? total + 1 : +end + 1));
    }
  }
  return uniq(pages).filter((i) => i <= total).sort((a, b) => a - b);
}
function parseAspectRatio(str) {
  if (isNumber(str))
    return str;
  if (!isNaN(+str))
    return +str;
  const [wStr = "", hStr = ""] = str.split(/[:\/x\|]/);
  const w = parseFloat(wStr.trim());
  const h = parseFloat(hStr.trim());
  if (isNaN(w) || isNaN(h) || h === 0)
    throw new Error(`Invalid aspect ratio "${str}"`);
  return w / h;
}
function resolveConfig(headmatter, themeMeta = {}) {
  var _a, _b;
  const themeHightlighter = ["prism", "shiki"].includes(themeMeta.highlighter || "") ? themeMeta.highlighter : void 0;
  const themeColorSchema = ["light", "dark"].includes(themeMeta.colorSchema || "") ? themeMeta.colorSchema : void 0;
  const defaultConfig = {
    theme: "default",
    title: "Slidev",
    titleTemplate: "%s - Slidev",
    remoteAssets: false,
    monaco: "dev",
    download: false,
    info: false,
    highlighter: themeHightlighter || "prism",
    lineNumbers: false,
    colorSchema: themeColorSchema || "auto",
    routerMode: "history",
    aspectRatio: 16 / 9,
    canvasWidth: 980,
    selectable: false,
    themeConfig: {},
    fonts: {},
    favicon: "https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",
    drawings: {},
    plantUmlServer: "https://www.plantuml.com/plantuml"
  };
  const config = __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, defaultConfig), themeMeta.defaults), headmatter.config), headmatter), {
    fonts: resolveFonts(__spreadValues(__spreadValues(__spreadValues({}, (_a = themeMeta.defaults) == null ? void 0 : _a.fonts), (_b = headmatter.config) == null ? void 0 : _b.fonts), headmatter == null ? void 0 : headmatter.fonts)),
    drawings: resolveDarwings(headmatter.drawings)
  });
  if (config.colorSchema !== "dark" && config.colorSchema !== "light")
    config.colorSchema = "auto";
  if (themeColorSchema && config.colorSchema === "auto")
    config.colorSchema = themeColorSchema;
  config.aspectRatio = parseAspectRatio(config.aspectRatio);
  if (themeColorSchema && config.colorSchema !== themeColorSchema)
    console.warn(`[slidev] Color schema "${config.colorSchema}" does not supported by the theme`);
  if (themeHightlighter && config.highlighter !== themeHightlighter)
    console.warn(`[slidev] Syntax highlighter "${config.highlighter}" does not supported by the theme`);
  return config;
}
function resolveFonts(fonts = {}) {
  const {
    fallbacks = true,
    italic = false,
    provider = "google"
  } = fonts;
  let sans = toArray(fonts.sans).flatMap((i) => i.split(/,\s*/g)).map((i) => i.trim());
  let serif = toArray(fonts.serif).flatMap((i) => i.split(/,\s*/g)).map((i) => i.trim());
  let mono = toArray(fonts.mono).flatMap((i) => i.split(/,\s*/g)).map((i) => i.trim());
  const weights = toArray(fonts.weights || "200,400,600").flatMap((i) => i.toString().split(/,\s*/g)).map((i) => i.trim());
  const custom = toArray(fonts.custom).flatMap((i) => i.split(/,\s*/g)).map((i) => i.trim());
  const local = toArray(fonts.local).flatMap((i) => i.split(/,\s*/g)).map((i) => i.trim());
  const webfonts = fonts.webfonts ? fonts.webfonts : fallbacks ? uniq([...sans, ...serif, ...mono, ...custom]) : [];
  webfonts.filter((i) => local.includes(i));
  function toQuoted(font) {
    if (/^(['"]).*\1$/.test(font))
      return font;
    return `"${font}"`;
  }
  if (fallbacks) {
    sans = uniq([
      ...sans.map(toQuoted),
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"'
    ]);
    serif = uniq([
      ...serif.map(toQuoted),
      "ui-serif",
      "Georgia",
      "Cambria",
      '"Times New Roman"',
      "Times",
      "serif"
    ]);
    mono = uniq([
      ...mono.map(toQuoted),
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace"
    ]);
  }
  return {
    sans,
    serif,
    mono,
    webfonts,
    provider,
    local,
    italic,
    weights
  };
}
function resolveDarwings(options = {}) {
  const {
    enabled = true,
    persist = false,
    presenterOnly = false,
    syncAll = true
  } = options;
  const persistPath = typeof persist === "string" ? persist : persist ? ".slidev/drawings" : false;
  return {
    enabled,
    persist: persistPath,
    presenterOnly,
    syncAll
  };
}
function stringify(data) {
  return `${data.slides.map((slide, idx) => stringifySlide(slide.inline || slide, idx)).join("\n").trim()}
`;
}
function filterDisabled(data) {
  data.slides = data.slides.filter((i) => {
    var _a;
    return !((_a = i.frontmatter) == null ? void 0 : _a.disabled);
  });
  return data;
}
function stringifySlide(data, idx = 0) {
  if (data.raw == null)
    prettifySlide(data);
  return data.raw.startsWith("---") || idx === 0 ? data.raw : `---
${data.raw.startsWith("\n") ? data.raw : `
${data.raw}`}`;
}
function prettifySlide(data) {
  data.content = `
${data.content.trim()}
`;
  data.raw = Object.keys(data.frontmatter || {}).length ? `---
${js_yaml_default.dump(data.frontmatter).trim()}
---
${data.content}` : data.content;
  if (data.note)
    data.raw += `
<!--
${data.note.trim()}
-->
`;
  else
    data.raw += "\n";
  return data;
}
function prettify(data) {
  data.slides.forEach(prettifySlide);
  return data;
}
function matter(code) {
  let data = {};
  const content = code.replace(/^---.*\r?\n([\s\S]*?)---/, (_, d) => {
    data = js_yaml_default.load(d);
    if (!isObject(data))
      data = {};
    return "";
  });
  return { data, content };
}
function detectFeatures(code) {
  return {
    katex: !!code.match(/\$.*?\$/) || !!code.match(/$\$\$/),
    monaco: !!code.match(/{monaco.*}/),
    tweet: !!code.match(/<Tweet\b/),
    mermaid: !!code.match(/^```mermaid/m)
  };
}
function parseSlide(raw) {
  var _a, _b;
  const result = matter(raw);
  let note;
  const frontmatter = result.data || {};
  let content = result.content.trim();
  const comments = Array.from(content.matchAll(/<!--([\s\S]*?)-->/g));
  if (comments.length) {
    const last = comments[comments.length - 1];
    if (last.index && last.index + last[0].length >= content.length) {
      note = last[1].trim();
      content = content.slice(0, last.index).trim();
    }
  }
  const title = frontmatter.title || frontmatter.name || ((_b = (_a = content.match(/^#+ (.*)$/m)) == null ? void 0 : _a[1]) == null ? void 0 : _b.trim());
  return {
    raw,
    title,
    content,
    frontmatter,
    note
  };
}
function parse(markdown, filepath, themeMeta) {
  var _a, _b;
  const lines = markdown.split(/\r?\n/g);
  const slides = [];
  let start = 0;
  function slice(end) {
    if (start === end)
      return;
    const raw = lines.slice(start, end).join("\n");
    slides.push(__spreadProps(__spreadValues({}, parseSlide(raw)), {
      index: slides.length,
      start,
      end
    }));
    start = end + 1;
  }
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trimRight();
    if (line.match(/^---+/)) {
      slice(i);
      const next = lines[i + 1];
      if (line.match(/^---([^-].*)?$/) && !(next == null ? void 0 : next.match(/^\s*$/))) {
        start = i;
        for (i += 1; i < lines.length; i++) {
          if (lines[i].trimRight().match(/^---$/))
            break;
        }
      }
    } else if (line.startsWith("```")) {
      for (i += 1; i < lines.length; i++) {
        if (lines[i].startsWith("```"))
          break;
      }
    }
  }
  if (start <= lines.length - 1)
    slice(lines.length);
  const headmatter = ((_a = slides[0]) == null ? void 0 : _a.frontmatter) || {};
  headmatter.title = headmatter.title || ((_b = slides[0]) == null ? void 0 : _b.title);
  const config = resolveConfig(headmatter, themeMeta);
  const features = detectFeatures(markdown);
  return {
    raw: markdown,
    filepath,
    slides,
    config,
    features,
    headmatter,
    themeMeta
  };
}
function mergeFeatureFlags(a, b) {
  return objectMap(a, (k, v) => [k, v || b[k]]);
}
function scanMonacoModules(md) {
  const typeModules = new Set();
  md.replace(/^```(\w+?)\s*{monaco([\w:,-]*)}[\s\n]*([\s\S]+?)^```/mg, (full, lang = "ts", options, code) => {
    options = options || "";
    lang = lang.trim();
    if (lang === "ts" || lang === "typescript") {
      Array.from(code.matchAll(/\s+from\s+(["'])([\/\w@-]+)\1/g)).map((i) => i[2]).filter(isTruthy).map((i) => typeModules.add(i));
    }
    return "";
  });
  return Array.from(typeModules);
}
export {
  detectFeatures,
  filterDisabled,
  mergeFeatureFlags,
  parse,
  parseAspectRatio,
  parseRangeString,
  parseSlide,
  prettify,
  prettifySlide,
  resolveConfig,
  resolveFonts,
  scanMonacoModules,
  stringify,
  stringifySlide
};
//# sourceMappingURL=@slidev_parser.js.map