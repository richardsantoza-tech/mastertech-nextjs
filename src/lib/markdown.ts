/**
 * Minimal markdown-to-HTML converter for blog posts.
 * Handles: headings, paragraphs, bold, italic, links, lists, blockquotes, tables, hr.
 * No external dependencies — keeps the bundle small.
 */

export function markdownToHtml(md: string): string {
  let html = md;

  // Normalize line endings
  html = html.replace(/\r\n/g, "\n");

  // Tables (must come before paragraph processing)
  html = html.replace(
    /(?:^|\n)(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g,
    (_, header: string, _sep: string, body: string) => {
      const heads = header
        .split("|")
        .filter((c: string) => c.trim())
        .map((c: string) => `<th class="px-4 py-2 text-left text-sm font-semibold text-zinc-900">${c.trim()}</th>`)
        .join("");
      const rows = body
        .trim()
        .split("\n")
        .map((row: string) => {
          const cells = row
            .split("|")
            .filter((c: string) => c.trim())
            .map((c: string) => `<td class="px-4 py-2 text-sm text-zinc-600">${c.trim()}</td>`)
            .join("");
          return `<tr class="border-t border-zinc-200">${cells}</tr>`;
        })
        .join("");
      return `<div class="mt-6 overflow-x-auto"><table class="w-full border-collapse rounded-lg border border-zinc-200"><thead><tr class="bg-zinc-50">${heads}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }
  );

  // Blockquotes
  html = html.replace(
    /(?:^|\n)(?:> (.+)\n?)+/g,
    (match) => {
      const text = match.replace(/^> ?/gm, "").trim();
      return `<blockquote class="mt-6 border-l-4 border-blue-600 bg-zinc-50 py-4 pl-6 pr-4 text-sm italic text-zinc-700">${text}</blockquote>`;
    }
  );

  // Horizontal rules
  html = html.replace(/\n---\n/g, '<hr class="my-8 border-zinc-200" />');

  // Headings
  html = html.replace(/^#### (.+)$/gm, '<h4 class="mt-8 text-base font-semibold text-zinc-900">$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3 class="mt-10 text-lg font-semibold text-zinc-900">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="mt-12 text-xl font-bold tracking-tight text-zinc-900">$1</h2>');

  // Unordered lists
  html = html.replace(
    /(?:^|\n)((?:- .+\n?)+)/g,
    (_, list: string) => {
      const items = list
        .trim()
        .split("\n")
        .map((line: string) => {
          const text = line.replace(/^- /, "");
          return `<li>${text}</li>`;
        })
        .join("");
      return `<ul class="mt-4 space-y-2 list-disc pl-6 text-sm text-zinc-600">${items}</ul>`;
    }
  );

  // Ordered lists
  html = html.replace(
    /(?:^|\n)((?:\d+\. .+\n?)+)/g,
    (_, list: string) => {
      const items = list
        .trim()
        .split("\n")
        .map((line: string) => {
          const text = line.replace(/^\d+\. /, "");
          return `<li>${text}</li>`;
        })
        .join("");
      return `<ol class="mt-4 space-y-2 list-decimal pl-6 text-sm text-zinc-600">${items}</ol>`;
    }
  );

  // Bold and italic (inline)
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-blue-600 hover:underline">$1</a>'
  );

  // Paragraphs — wrap remaining loose text lines
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      // Skip if already wrapped in an HTML tag
      if (/^</.test(trimmed)) return trimmed;
      return `<p class="mt-4 text-base leading-7 text-zinc-600">${trimmed}</p>`;
    })
    .join("\n");

  return html;
}
