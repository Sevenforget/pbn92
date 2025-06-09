import Header from "@/components/header";
import PostDetail from "@/components/post-detail";
import { fetchPostFromApi } from "@/lib/api-service";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number.parseInt(id);

  if (isNaN(postId) || postId < 0) {
    notFound();
  }

  try {
    // 현재 프로젝트의 도메인 자동 감지
    const communityUrl = "https://kivinews.com"; // 하드코딩된 도메인 (pbn-domains.json 기반)

    // API에서 게시물 데이터 가져오기
    const post = await fetchPostFromApi(communityUrl, postId);

    return (
      <div>
        <Header />
        <Link
          href="/posts"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to posts
        </Link>
        <PostDetail post={post} />
      </div>
    );
  } catch (error) {
    console.error("게시물 로드 실패:", error);
    notFound();
  }
}
