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
      <span className="inline-block bg-gradient-to-r from-[#818CF8]/20 to-[#818CF8]/10 text-[#6366F1] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
        {sectionTitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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

