import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypePrettyCode from 'rehype-pretty-code';

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: doc => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    coverImage: { type: 'string', required: false },
    summary: { type: 'string', required: true },
    category: { type: 'json', required: true }
  },
  computedFields
}));

const Projects = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    category: { type: 'string', required: true },
    percentage: { type: 'number', required: true },
    status: { type: 'string', required: true }
  },
  computedFields
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog, Projects],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          grid: false,
          theme: 'github-light',
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: any) {
            const nodeClass = node.properties.className;
            if (nodeClass && nodeClass.length > 0) {
              node.properties.className.push('highlighted');
            } else {
              node.properties.className = ['highlighted'];
            }
          },

          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word'];
          }
        }
      ],
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism
    ]
  }
});
