import Image from "next/image"
import Link from "next/link"

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  imageUrl: string
  url: string
}

export default function BlogPost({ title, excerpt, date, imageUrl, url }: BlogPostProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 text-sm text-slate-400">{date}</div>
        <h3 className="mb-2 text-xl font-bold group-hover:text-purple-400">{title}</h3>
        <p className="mb-4 text-slate-300">{excerpt}</p>
        <Link
          href={url}
          className="inline-flex items-center text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-1 h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
