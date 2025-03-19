"use client"
import { BookmarkIcon, CalendarIcon, ChevronDown, ExternalLink, Filter, Settings, Sparkles } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Sample logos for newsletters
const newsletterLogos = {
  futuretools: "/images/Matt from FutureTools.jpg",
  mindstream: "/images/Mindstream.jpg",
  neuron: "/images/theneurondaily_logo.jpeg",
  aibreakfast: "/images/bagel bots logo.jpeg",
  kaitchup: "/images/the Kaitchup.png",
  aivalley: "/images/Ai Valley.jpg",
  rundown: "/images/the_rundown_ai_logo.jpeg",
  storm: "/images/Digital Storm.png",
}

interface FilteredContentItem {
  id: string
  time: string
  title: string
  source: string
  sourceLogo: string
  neutral: boolean
  free: boolean
}

export function AIFilteredContent() {
  const filteredContent: FilteredContentItem[] = [
    {
      id: "1",
      time: "09:45 AM",
      title: 'AI Agents Form Their Own "Trade Union"',
      source: "futuretools",
      sourceLogo: newsletterLogos.futuretools,
      neutral: true,
      free: true,
    },
    {
      id: "2",
      time: "10:15 AM",
      title: "We taught AI to chat; now we're teaching it to move",
      source: "mindstream",
      sourceLogo: newsletterLogos.mindstream,
      neutral: true,
      free: true,
    },
    {
      id: "3",
      time: "11:15 AM",
      title: "ChatGPT's Comeback – 400M Weekly Users",
      source: "neuron",
      sourceLogo: newsletterLogos.neuron,
      neutral: true,
      free: true,
    },
    {
      id: "4",
      time: "12:15 PM",
      title: "🧠 The age of reason(ing models)",
      source: "aibreakfast",
      sourceLogo: newsletterLogos.aibreakfast,
      neutral: true,
      free: true,
    },
    {
      id: "5",
      time: "01:30 PM",
      title: "The AI Job Boom: 1 in 4 Tech Jobs Now AI-Focused",
      source: "kaitchup",
      sourceLogo: newsletterLogos.kaitchup,
      neutral: true,
      free: true,
    },
  ]

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Main Dashboard Content */}
      <div className="flex-1 p-6 bg-[#F8FAFC] dark:bg-[#0F172A]">
        <div className="max-w-5xl mx-auto">
          {/* Header Tabs */}
          <div className="mb-6">
            <Tabs defaultValue="filtered" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="filtered" className="data-[state=active]:bg-primary">
                  <div className="flex items-center">
                    AI Filtered Content <Badge className="ml-2 bg-primary">7</Badge>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="summaries" className="data-[state=active]:bg-primary">
                  <div className="flex items-center">
                    All Summaries <Badge className="ml-2 bg-primary">9</Badge>
                  </div>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Content Filters
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              AI Summary Preferences
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              Newsletter Filter
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Meta Analysis Section */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm mb-6 overflow-hidden">
            <div className="border-b dark:border-slate-700 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold dark:text-white">Daily AI Meta-Analysis</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      March 16, 2025 • 30 newsletters analyzed
                    </p>
                  </div>
                </div>
                <ChevronDown className="h-5 w-5 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Today's Content */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <CalendarIcon className="h-5 w-5 text-slate-400" />
              <h3 className="text-lg font-semibold dark:text-white">Today</h3>
              <span className="text-slate-400">•</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">85% Noise Reduction</span>
            </div>

            <div className="space-y-3">
              {filteredContent.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <input type="radio" name={`read-${item.id}`} className="h-4 w-4 text-primary border-slate-300" />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-md overflow-hidden">
                            <Image
                              src={item.sourceLogo || "/placeholder.svg"}
                              alt={item.source}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-xs text-slate-500 flex items-center gap-1">
                              <span>{item.time}</span>
                              <span>•</span>
                              <span>Neutral</span>
                              <span>•</span>
                              <span>Free</span>
                            </div>
                            <h3 className="font-bold text-slate-800 dark:text-white">{item.title}</h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                            <BookmarkIcon size={18} />
                          </button>
                          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                            <ExternalLink size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

