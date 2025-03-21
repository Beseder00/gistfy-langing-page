import type React from "react"
import { BookmarkIcon, ExternalLinkIcon } from "lucide-react"

interface TimelineItemProps {
  time: string
  title: string
  icon: React.ReactNode
  iconBg: string
  expanded?: boolean
  bulletPoints?: string[]
  tag?: string
  source: string
  date?: string
}

export function TimelineItem({
  time,
  title,
  icon,
  iconBg,
  expanded = false,
  bulletPoints = [],
  tag,
  source,
  date,
}: TimelineItemProps) {
  return (
    <div className="border border-[#E2E8F0] rounded-lg p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-start">
        <div className="mt-1 mr-3">
          <div className="w-3 h-3 rounded-full border-2 border-[#E2E8F0]"></div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="flex items-center">
                <div className={`w-8 h-8 ${iconBg} rounded-md flex items-center justify-center mr-2`}>{icon}</div>
                <div>
                  <div className="text-xs text-[#64748B] flex items-center">
                    <span>{time}</span>
                    <span className="mx-1">•</span>
                    <span>Neutral</span>
                    <span className="mx-1">•</span>
                    <span>Free</span>
                  </div>
                  <h3 className="font-bold text-[#0F172A]">{title}</h3>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-[#64748B] hover:text-[#0F172A]">
                <BookmarkIcon size={18} />
              </button>
              <button className="text-[#64748B] hover:text-[#0F172A]">
                <ExternalLinkIcon size={18} />
              </button>
            </div>
          </div>

          {expanded && (
            <>
              <ul className="list-disc pl-5 mb-3 space-y-2 text-sm text-[#334155]">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <div>
                  {tag && (
                    <span
                      className="inline-block bg-[#EFF6FF] text-[#3B82F6] text-xs px-2 py-1 rounded"
                      title="Get thought-provoking arguments, counterpoints, and questions to deepen your understanding any contents impact."
                    >
                      {tag}
                    </span>
                  )}
                  <a href="#" className="text-[#3B82F6] text-xs ml-4 hover:underline flex items-center">
                    Read full article
                    <ExternalLinkIcon size={12} className="ml-1" />
                  </a>
                </div>
                <div className="flex items-center text-xs text-[#64748B]">
                  <span>{source}</span>
                  {date && <span className="ml-2">{date}</span>}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

