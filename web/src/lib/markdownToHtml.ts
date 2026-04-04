import { remark } from "remark";
import html from "remark-html";

import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

// export default async function markdownToHtml(markdown: string) {
//   const result = await remark().use(html).process(markdown);
//   const htmlString = result.toString();
//   return htmlString;
// }

export default async function markdownToHtml(markdown: string) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify);

  const file = await processor.process(markdown);
  return String(file);
}
