import Link from "next/link"
import { Search } from "lucide-react"

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-travel.png')",
          height: "100%",
          zIndex: 0,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-white text-2xl font-bold tracking-tight hover:text-sky-300 transition">
            여행의 발자국
          </Link>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="여행 이야기 검색..."
                className="bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-white/70" />
            </div>

            <nav className="flex space-x-4">
              <Link href="/" className="text-white hover:text-sky-300 transition">
                홈
              </Link>
              <Link href="#" className="text-white hover:text-sky-300 transition">
                카테고리
              </Link>
              <Link href="#" className="text-white hover:text-sky-300 transition">
                소개
              </Link>
            </nav>
          </div>
        </div>

        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 whitespace-nowrap">
            여행으로 만나는 새로운 세상
          </h1>
          <p className="text-xl text-white/90 mb-8">특별한 순간들을 기록하고 공유하는 여행 이야기 블로그</p>
        </div>
      </div>
    </header>
  )
}
