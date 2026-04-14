// Internal linking audit — analyzes all built HTML pages
const fs = require("fs");
const path = require("path");

function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, files);
    else if (e.name.endsWith(".html") && !e.name.startsWith("_")) files.push(full);
  }
  return files;
}

function filePathToRoute(p) {
  let r = p
    .replace(/^\.next[\/\\]server[\/\\]app/, "")
    .replace(/\.html$/, "")
    .replace(/\\/g, "/");
  if (r === "/index") r = "/";
  return r;
}

function extractLinks(html) {
  const hrefs = new Set();
  const re = /href="([^"#][^"]*)"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    let url = m[1];
    url = url.split("#")[0];
    if (url.startsWith("/") && !url.startsWith("//") && !url.startsWith("/_next")) {
      if (url === "/sitemap.xml" || url === "/robots.txt" || url === "/llms.txt") continue;
      if (url.length > 1 && url.endsWith("/")) url = url.slice(0, -1);
      if (url) hrefs.add(url);
    }
  }
  return [...hrefs];
}

const htmlFiles = walk(".next/server/app");

const outbound = {};
const inbound = {};
const allRoutes = new Set();

for (const f of htmlFiles) {
  const route = filePathToRoute(f);
  allRoutes.add(route);
  const html = fs.readFileSync(f, "utf8");
  const links = extractLinks(html);
  const internal = links.filter((l) => l !== route);
  outbound[route] = new Set(internal);
  for (const target of internal) {
    if (!inbound[target]) inbound[target] = new Set();
    inbound[target].add(route);
  }
}

for (const r of allRoutes) {
  if (!inbound[r]) inbound[r] = new Set();
}

const sortedRoutes = [...allRoutes].sort();

console.log("Total pages audited: " + sortedRoutes.length);
console.log("");

const sections = [
  ["Home", (r) => r === "/"],
  ["Services", (r) => r.startsWith("/services")],
  ["Locations", (r) => r.startsWith("/locations")],
  ["Blog", (r) => r.startsWith("/blog")],
  ["Core", (r) => ["/about", "/contact", "/employers", "/how-it-works", "/privacy-policy", "/terms"].includes(r)],
  ["Tools", (r) => r.startsWith("/tools")],
  ["Other", (r) => true],
];

const classified = new Set();
for (const [name, match] of sections) {
  const pages = sortedRoutes.filter((r) => !classified.has(r) && match(r));
  pages.forEach((p) => classified.add(p));
  if (pages.length === 0) continue;
  console.log("=== " + name + " (" + pages.length + " pages) ===");
  for (const r of pages) {
    const out = outbound[r].size;
    const inb = inbound[r].size;
    const flags = [];
    if (out < 3) flags.push("LOW-OUT");
    if (inb === 0) flags.push("ORPHAN");
    const flagStr = flags.length ? " [" + flags.join(",") + "]" : "";
    console.log("  " + r.padEnd(58) + "| out:" + String(out).padStart(3) + " | in:" + String(inb).padStart(3) + flagStr);
  }
  console.log("");
}

// Summary
const orphans = sortedRoutes.filter((r) => inbound[r].size === 0 && r !== "/");
const lowOutbound = sortedRoutes.filter((r) => outbound[r].size < 3);
console.log("=== FLAGS ===");
console.log("Orphan pages (0 inbound links): " + orphans.length);
if (orphans.length) orphans.forEach((r) => console.log("  " + r));
console.log("");
console.log("Pages with <3 outbound internal links: " + lowOutbound.length);
if (lowOutbound.length) lowOutbound.forEach((r) => console.log("  " + r + " (out: " + outbound[r].size + ")"));
console.log("");

// Detail: for each page, what it links TO and what links TO it
// Save to a JSON file for reference
const detail = {};
for (const r of sortedRoutes) {
  detail[r] = {
    outboundCount: outbound[r].size,
    inboundCount: inbound[r].size,
    linksTo: [...outbound[r]].sort(),
    linkedFrom: [...inbound[r]].sort(),
  };
}
fs.writeFileSync("link-audit.json", JSON.stringify(detail, null, 2));
console.log("Full detail saved to link-audit.json");
