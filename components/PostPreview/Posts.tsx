import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { parseISO, format } from "date-fns"
import PostTags from "./PostTags"

export default function Posts() {
  allPosts.sort((a: any, b: any) => {
    return b.date - a.date
  })

  return (
    <div className="flex flex-col gap-4 mb-20">
      {allPosts.map((post) => (
        <section key={post._id} className="p-5 hover:bg-[#f6f6f6] dark:hover:bg-[#111111] transition-all duration-200 rounded-lg hover:shadow-md">
          <Link href={post.slug} className="no-underline">
            <div className="flex gap-2">
              <PostTags text={format(parseISO(post.date), "MMM dd, yyyy")} />
              <PostTags text={post.readingTime.text} />
            </div>
            <h2 className="mt-2 mb-0 text-lg">{post.title}</h2>
            {post.description && <p className="my-0">{post.description}</p>}
          </Link>
        </section>
      ))}
    </div>
  )
}
