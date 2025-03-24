import Image from "next/image"

interface DashboardMockupProps {
  url: string
  imageSrc: string
  imageAlt: string
}

export function DashboardMockup({ url, imageSrc, imageAlt }: DashboardMockupProps) {
  return (
    <div className="bg-[var(--card-background)] rounded-xl overflow-hidden border border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300 relative group">
      {/* Subtle glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3B82F6]/0 via-[#3B82F6]/0 to-[#6366F1]/0 group-hover:from-[#3B82F6]/10 group-hover:via-[#6366F1]/20 group-hover:to-[#3B82F6]/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
      
      {/* Browser header with URL bar */}
      <div className="bg-[var(--muted-background)] border-b border-[var(--border)] p-3 flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="ml-3 flex-1 bg-[var(--background)] rounded-md border border-[var(--border)] h-8 flex items-center px-3 text-xs text-[var(--muted-foreground)]">
          {url}
        </div>
      </div>
      
      {/* Dashboard content */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill 
          className="object-cover transform transition-transform duration-500 group-hover:scale-[1.02]" 
        />
      </div>
    </div>
  )
}

