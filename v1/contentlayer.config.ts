import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from 'contentlayer/source-files';

import readingTime from 'reading-time';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: doc => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.mdx`,
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    coverImage: { type: 'string', required: false },
    category: { type: 'json', required: true }
  },
  computedFields
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism
    ]
  }
});
