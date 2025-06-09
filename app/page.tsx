import { getPosts } from "@/lib/data"
import PostCard from "@/components/post-card"
import Header from "@/components/header"

export default function Home() {
  const posts = getPosts()

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/images/world-map.png')",
            height: "100%",
            zIndex: 0,
          }}
        />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="mr-2">✈️</span> 최근 여행 이야기
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <PostCard key={index} post={post} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
