import RootLayout from "@/components/layout/root-layout"
import PostCard from "@/components/blog/post-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Filter } from "lucide-react"

// 예시 블로그 포스트 데이터
const posts = [
  {
    title: "Next.js 앱 라우터 완벽 가이드",
    excerpt:
      "Next.js 13에서 도입된 앱 라우터(App Router)의 주요 기능과 사용법을 상세히 알아봅니다. 서버 컴포넌트, 레이아웃, 로딩 상태 등을 다룹니다.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    date: "2024-05-15",
    tags: ["Next.js", "React", "Web Development"],
    slug: "nextjs-app-router-guide",
  },
  {
    title: "Python으로 시작하는 데이터 분석",
    excerpt: "Python과 주요 데이터 분석 라이브러리(Pandas, NumPy, Matplotlib)를 활용한 데이터 분석 기초를 알아봅니다.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    date: "2024-05-10",
    tags: ["Python", "Data Analysis", "Pandas"],
    slug: "python-data-analysis",
  },
  {
    title: "Tailwind CSS 실전 팁 10가지",
    excerpt:
      "Tailwind CSS를 더 효율적으로 사용할 수 있는 실전 팁 10가지를 소개합니다. 커스터마이징, 재사용성, 성능 최적화 등을 다룹니다.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    date: "2024-05-05",
    tags: ["CSS", "Tailwind", "Web Development"],
    slug: "tailwind-css-tips",
  },
  {
    title: "TypeScript 타입 시스템 마스터하기",
    excerpt:
      "TypeScript의 타입 시스템을 깊이 이해하고 활용하는 방법을 알아봅니다. 제네릭, 유니온 타입, 타입 가드 등 고급 기능을 다룹니다.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    date: "2024-04-28",
    tags: ["TypeScript", "JavaScript", "Programming"],
    slug: "typescript-type-system",
  },
  {
    title: "React 상태 관리 라이브러리 비교",
    excerpt: "Redux, Zustand, Jotai, Recoil 등 다양한 React 상태 관리 라이브러리의 특징과 사용 사례를 비교 분석합니다.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    date: "2024-04-20",
    tags: ["React", "State Management", "Web Development"],
    slug: "react-state-management",
  },
  {
    title: "Docker 컨테이너 기초부터 실전까지",
    excerpt: "Docker의 기본 개념부터 실전 활용법까지 단계별로 알아봅니다. 개발 환경 구성, 배포 자동화 등을 다룹니다.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    date: "2024-04-15",
    tags: ["Docker", "DevOps", "Containers"],
    slug: "docker-containers",
  },
]

export default function BlogPage() {
  return (
    <RootLayout>
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">블로그</h1>

        <div className="mb-8 flex justify-between items-center">
          <div className="text-gray-600">총 {posts.length}개의 게시글</div>

          <div className="relative">
            <Button variant="secondary" className="inline-flex items-center">
              <Filter className="mr-2 h-4 w-4" />
              필터
            </Button>
            {/* 필터 드롭다운 UI는 실제 구현 시 추가 */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="flex justify-center">
          <nav className="inline-flex rounded-md shadow-sm">
            <Button variant="secondary" className="rounded-l-md rounded-r-none">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="secondary" className="rounded-none border-l-0 border-r-0">
              1
            </Button>
            <Button variant="primary" className="rounded-none border-l-0 border-r-0">
              2
            </Button>
            <Button variant="secondary" className="rounded-none border-l-0 border-r-0">
              3
            </Button>
            <Button variant="secondary" className="rounded-r-md rounded-l-none">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      </div>
    </RootLayout>
  )
}
