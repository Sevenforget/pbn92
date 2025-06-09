import type { Post } from "@/lib/types";
import Image from "next/image";

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-96 w-full">
        <Image
          src="/images/post-detail-bg.png"
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-8 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {post.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold mr-3">
                  {(post.author || "관리자").charAt(0)}
                </div>
                <div>
                  <p className="text-white">{post.author || "관리자"}</p>
                  <p className="text-white/70 text-sm">여행 작가</p>
                </div>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex space-x-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div
          className="prose prose-sky max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            이 여행 이야기는 어떠셨나요?
          </h3>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition">
              👍 좋아요
            </button>
            <button className="px-4 py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition">
              💬 댓글 남기기
            </button>
            <button className="px-4 py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition">
              🔖 저장하기
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
