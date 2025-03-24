import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  iconBgColor: string
  iconColor: string
  title: string
  description: string
  progressColor: string
}

export function FeatureCard({
  icon: Icon,
  iconBgColor,
  iconColor,
  title,
  description,
  progressColor,
}: FeatureCardProps) {
  return (
    <div className="group bg-[var(--card-background)] rounded-lg p-4 border border-[var(--border)] shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100 dark:hover:border-blue-800/50">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <div
          className={`w-10 h-10 rounded-lg ${iconBgColor} flex items-center justify-center mb-3 sm:mb-0 sm:mr-3 flex-shrink-0`}
        >
          <Icon size={22} color={iconColor} strokeWidth={2} className="transform transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h4 className="font-semibold text-[var(--foreground)] mb-1 text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h4>
          <p className="text-[var(--muted-foreground)] text-xs mb-3">{description}</p>
          <div className="w-full max-w-[200px] mx-auto sm:mx-0 bg-[var(--muted-background)] rounded-full h-1.5 overflow-hidden">
            <div 
              className="h-1.5 rounded-full" 
              style={{ width: '100%', minWidth: '100%', display: 'block', backgroundColor: iconColor }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

