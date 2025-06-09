import Link from "next/link"
import type { Post } from "@/lib/types"
import { formatSlug } from "@/lib/utils"

interface PostCardProps {
  post: Post
  index: number
}

export default function PostCard({ post, index }: PostCardProps) {
  const slug = formatSlug(post.title)

  return (
    <Link href={`/blog/${formatSlug(post.title)}`} className="group flex flex-col gap-2">
      <h2 className="text-lg font-semibold transition-colors group-hover:text-primary">{post.title}</h2>
      <p className="text-sm text-muted-foreground">{post.description}</p>
      <time dateTime={post.date} className="text-sm text-muted-foreground">
        {post.date}
      </time>
    </Link>
  )
}
