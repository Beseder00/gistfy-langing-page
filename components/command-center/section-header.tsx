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
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        {heading.firstPart}{" "}
        <span className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] bg-clip-text text-transparent">
          {heading.highlightedPart}
        </span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {subtitle.text}{" "}
        <span className="font-semibold text-[#3B82F6]">{subtitle.highlight}</span>
        {subtitle.suffix}
      </p>
    </div>
  )
}

