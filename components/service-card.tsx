import { Code, Database, Headset, Palette, Search, Smartphone } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Code":
        return <Code className="h-10 w-10 text-purple-400" />
      case "Smartphone":
        return <Smartphone className="h-10 w-10 text-purple-400" />
      case "Palette":
        return <Palette className="h-10 w-10 text-purple-400" />
      case "Database":
        return <Database className="h-10 w-10 text-purple-400" />
      case "HeadsetMic":
        return <Headset className="h-10 w-10 text-purple-400" />
      case "Search":
        return <Search className="h-10 w-10 text-purple-400" />
      default:
        return <Code className="h-10 w-10 text-purple-400" />
    }
  }

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 text-center transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="mb-4 flex justify-center">{getIcon()}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  )
}
