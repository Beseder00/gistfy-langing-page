interface SectionHeaderProps {
  sectionTitle: string
  heading: {
    firstPart: string
    highlightedPart: string
  }
  subtitle: {
    text: string
    highlight: string
    suffix: string
  }
}

export function SectionHeader({ sectionTitle, heading, subtitle }: SectionHeaderProps) {
  return (
    <div className="relative mb-12">
      {/* Background elements */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/5 rounded-full blur-xl hidden md:block"></div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-indigo-500/5 rounded-full blur-xl hidden md:block"></div>

      {/* Section title badge */}
      <div className="mb-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#EFF6FF] to-[#F3E8FF] text-[#3B82F6] text-sm font-semibold border border-[#60A5FA]/20 shadow-sm">
          {sectionTitle}
        </span>
      </div>

      {/* Main heading */}
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-none">
        <span className="inline-block relative">
          <span className="relative z-10 text-[#1E3A8A]">{heading.firstPart} </span>
          <span className="absolute bottom-1 left-0 w-full h-3 bg-[#60A5FA]/30 opacity-70 -z-10 transform -rotate-1 rounded"></span>
        </span>
        <br className="md:hidden" />
        <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] text-transparent bg-clip-text">
          {heading.highlightedPart}
        </span>
      </h2>

      {/* Divider */}
      <div className="flex justify-center mb-8">
        <div className="w-32 h-1.5 bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] rounded-full relative overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
        </div>
      </div>

      {/* Subtitle */}
      <div className="max-w-3xl mx-auto mb-16 relative">
        <p className="text-lg md:text-2xl text-[#334155] leading-relaxed font-medium">
          {subtitle.text}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] font-semibold">
            {subtitle.highlight}
          </span>{" "}
          {subtitle.suffix}
        </p>

        {/* Decorative dots */}
        <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 hidden lg:flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
        </div>
        <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 hidden lg:flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
        </div>
      </div>
    </div>
  )
}

