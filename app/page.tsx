import Posts from "@/components/PostPreview/Posts"

export default function Home() {
  return (
    <div className="prose dark:prose-invert max-w-[680px] mx-auto mb-14">
      <h2 className="px-2 mb-2 md:px-0">My Blog 📔</h2>
      <p className="px-2 mb-6 md:px-0">
        Welcome to my personal blog. Here, I&apos;ll be sharing my thoughts on various topics that I&apos;m passionate about. I also want to document
        my journey from now on, so this should work as a journal. Hop in!
      </p>
      <Posts />
    </div>
  )
}
