import { cn } from "@/lib/utils"

interface HeaderRootProps {
  children: React.ReactNode
  className?: string
}

const HeaderRoot = ({ children, className }: HeaderRootProps) => {
  return (
    <header className={cn("w-full border-b h-14 px-4 flex items-center", className)}>
      {children}
    </header>
  )
}

interface HeaderPartProps {
  children: React.ReactNode
  className?: string
  align?: "left" | "center"
}

const HeaderLeftPart = ({ children, className, align = "left" }: HeaderPartProps) => {
  return (
    <div className={cn(
      align === "center" ? "flex-1 flex justify-center" : "flex items-center space-x-4",
      className
    )}>
      {children}
    </div>
  )
}

const HeaderRightPart = ({ children, className }: HeaderPartProps) => {
  return (
    <div className={cn("flex items-center space-x-4 ml-auto", className)}>
      {children}
    </div>
  )
}

export const Header = {
  Root: HeaderRoot,
  LeftPart: HeaderLeftPart,
  RightPart: HeaderRightPart
}