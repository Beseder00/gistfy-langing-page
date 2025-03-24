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

export function SectionHeader({
  sectionTitle,
  heading,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <h3 className="uppercase tracking-wider text-xs font-semibold text-[var(--muted-foreground)] mb-3 relative inline-block">
        <span className="bg-gradient-to-r from-blue-200/10 via-blue-500/10 to-blue-200/10 absolute inset-0 w-full h-full blur-sm -z-10 rounded-full"></span>
        {sectionTitle}
      </h3>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
        <span className="text-[var(--foreground)]">{heading.firstPart}</span>
        <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent">
          {heading.highlightedPart}
        </span>
      </h2>
      <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
        {subtitle.text}{" "}
        <span className="font-semibold bg-gradient-to-r from-[#3B82F6] to-[#4F46E5] bg-clip-text text-transparent">
          {subtitle.highlight}
        </span>
        {subtitle.suffix}
      </p>
    </div>
  )
}

