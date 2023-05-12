import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { parseISO, format } from "date-fns"
import PostTags from "./PostTags"

export default function Posts() {
  return (
    <div className="flex flex-col gap-4">
      {allPosts.map((post) => (
        <section key={post._id} className="p-5 hover:bg-[#171717] rounded-lg transition-all">
          <Link href={post.slug} className="no-underline">
            <div className="flex gap-2">
              <PostTags text={format(parseISO(post.date), "MMM dd, yyyy")} />
              <PostTags text={post.readingTime.text} />
            </div>
            <h4 className="mt-2 mb-0 text-lg">{post.title}</h4>
            {post.description && <p className="my-0">{post.description}</p>}
          </Link>
        </section>
      ))}
    </div>
  )
}
