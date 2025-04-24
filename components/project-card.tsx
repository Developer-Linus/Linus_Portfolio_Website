import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  stack: string[]
  imageUrl: string
  projectUrl: string
}

export default function ProjectCard({ title, description, stack, imageUrl, projectUrl }: ProjectCardProps) {
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
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-slate-300">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-purple-300">
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={projectUrl}
          className="inline-flex items-center text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
        >
          View Project
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
