import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  asLink?: boolean
}

export function Logo({
  className,
  asLink = true,
}: LogoProps) {

  const content = (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-primary size-6 rounded-md flex items-center justify-center text-white font-bold text-xs">
        T
      </div>
      <span className="font-bold text-lg tracking-tight group-data-[collapsible=icon]:hidden">
        Testing App
      </span>
    </div>
  )

  if (!asLink) {
    return content
  }

  return <Link to="/">{content}</Link>
}
