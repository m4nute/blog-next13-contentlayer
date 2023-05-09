import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypePrettyCode from "rehype-pretty-code"
import readingTime from "reading-time"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import GithubSlugger from "github-slugger"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const slugger = new GithubSlugger()
      const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g
      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(({ groups }) => {
        const flag = groups?.flag
        const content = groups?.content
        return {
          heading: flag?.length,
          text: content,
          slug: content ? slugger.slug(content) : undefined
        }
      })
      return headings
    }
  }
}

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    }
  },
  computedFields
}))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"]
          }
        }
      ],
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro"
        }
      ]
    ]
  }
})
