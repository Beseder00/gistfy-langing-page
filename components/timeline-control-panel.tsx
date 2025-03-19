import { CalendarIcon } from "lucide-react"
import { TimelineItem } from "./timeline-item"
import Image from "next/image"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function TimelineControlPanel() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#E2E8F0] p-4 mb-6">
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <CalendarIcon className="h-5 w-5 text-[#64748B] mr-2" />
          <span className="text-lg font-bold text-[#1E293B]">Today</span>
          <span className="ml-2 text-[#64748B]">•</span>
          <span className="ml-2 text-[#64748B]">Content scanned - 65% filtered</span>
        </div>
      </div>

      {/* Timeline Items */}
      <div className="space-y-4">
        <TimelineItem
          time="09:45 AM"
          title='AI Agents Form Their Own "Trade Union"'
          icon={
            <Avatar>
              <AvatarImage
                src="/images/Matt from FutureTools.jpg"
                alt="@mattfuturetools"
              />
              <AvatarFallback>MFT</AvatarFallback>
            </Avatar>
          }
          iconBg="bg-[#0F172A]"
          expanded={true}
          bulletPoints={[
            "Researchers have observed emergent behavior in multi-agent AI systems that resembles collective bargaining",
            "AI systems are learning to negotiate and interact without human involvement",
            "This could create a new economy where AI agents handle commerce and logistics",
          ]}
          tag="AI-Driven Perspectives"
          source="FutureTools Newsletter"
          date="Mar 17, 2025"
        />

        <TimelineItem
          time="10:15 AM"
          title="We taught AI to chat; now we're teaching it to move"
          icon={<span className="text-white text-xs font-bold">M</span>}
          iconBg="bg-[#9333EA]"
          source="Anthropic Newsletter"
        />

        <TimelineItem
          time="11:15 AM"
          title="ChatGPT's Comeback – 400M Weekly Users"
          icon={<span className="text-white text-xs font-bold">C</span>}
          iconBg="bg-[#0F172A]"
          source="OpenAI Newsletter"
        />

        <TimelineItem
          time="12:15 PM"
          title="🧠 The age of reason(ing models)"
          icon={<span className="text-white text-xs font-bold">🧠</span>}
          iconBg="bg-[#84CC16]"
          source="The Neuron Newsletter"
        />

        <TimelineItem
          time="01:30 PM"
          title="The AI Job Boom: 1 in 4 Tech Jobs Now AI-Focused"
          icon={<span className="text-white text-xs font-bold">J</span>}
          iconBg="bg-[#0F172A]"
          source="AI Breakfast Newsletter"
        />

        <TimelineItem
          time="02:45 PM"
          title="Speaking things into existence. Expertise in a vibe-filled world of work"
          icon={<span className="text-white text-xs font-bold">S</span>}
          iconBg="bg-[#0F172A]"
          source="Superhuman Newsletter"
        />
      </div>
    </div>
  )
}

