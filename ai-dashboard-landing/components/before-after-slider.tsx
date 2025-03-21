"use client"

import { useState, useEffect, useRef } from "react"
import { AlertCircle, ArrowLeftRight, Sparkles, FileText, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// TypewriterAnalysis component for the animated text effect
function TypewriterAnalysis({
  resetAnimation,
  typingSpeed = 10,
  initialCharsToShow = 100,
  typingInterval = 20,
  cursorColor = "#3B82F6",
}: {
  resetAnimation: boolean
  typingSpeed?: number
  initialCharsToShow?: number
  typingInterval?: number
  cursorColor?: string
}) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showSkipButton, setShowSkipButton] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const fullText = `The Big Picture: AI Systems Are Becoming Self-Sustaining
Across multiple industries, AI isn't just enhancing work—it's replacing decision-making at scale. From AI-driven negotiations and robotics self-production to large language models shaping entire economic models, today's insights indicate a shift toward AI operating as autonomous, interconnected systems.

Most Impactful Trend: AI no longer just augments workflows—it executes strategic operations autonomously across business, security, and robotics.

Sentiment About My Filters: Mixed enthusiasm and concern. Big Tech is all-in on agentic AI, but governance and human oversight remain an open question.

Think Different: If AI manages AI, are corporate AI models evolving into economic entities? Could we see self-organizing AI-driven markets where AI dictates pricing, logistics, and infrastructure?

What's a Good Read Today? (Ranked by Filters)
Today's summaries highlight AI evolving into an independent force, where its influence extends beyond human operators.

- AI Orchestration Battles: OpenAI and Anthropic take different roads—one toward unified AI ecosystems, the other toward interoperable AI standards.
- Robots Now Build Themselves: AI-driven robotic production facilities suggest that soon, humanoid robots may self-replicate and manage assembly lines.
- China's AI Cost Breakthrough: China's AI labs outperform GPT-4.5 at 1% of the cost, setting off an AI price war that could shift global tech dominance.
- AI Replacing Sales & Marketing: AI's real-time audience targeting eliminates human guesswork, leading to fully autonomous digital marketing systems.
- The Future of AI Agents: Big Tech is doubling down on AI agents as independent actors—decision-makers operating entire workflows, not just assistants.

These insights reflect AI breaking free from human oversight, pushing automation into self-organizing systems. AI is now negotiating with itself, governing its own infrastructure, and building the next generation of AI.

Hidden Factors to Think About
- Can AI-driven economies regulate themselves? If AI sets prices, optimizes logistics, and automates entire industries, how do we govern AI-led markets?
- How far can AI replace decision-making? OpenAI, Anthropic, and Google are racing to define AI orchestration—but will human oversight become obsolete in key industries?
- Who benefits from an AI-driven price war? As China pushes ultra-cheap AI alternatives, does this accelerate global AI adoption or undermine innovation at the top?

The Takeaway: AI is no longer just advancing technology—it's reshaping industries, governance, and economic control. Understanding these shifts now ensures you're prepared for what's next. Stay ahead. Think critically. Adapt fast.`

  // Reset animation when resetAnimation prop changes
  useEffect(() => {
    setDisplayText("")
    setIsTyping(true)
    setShowSkipButton(true)
    setIsPaused(false)
  }, [resetAnimation])

  // Handle typing animation
  useEffect(() => {
    if (!isTyping || isPaused) return

    let currentIndex = 0

    // Start with some initial text already displayed
    if (fullText.length > initialCharsToShow) {
      setDisplayText(fullText.substring(0, initialCharsToShow))
      currentIndex = initialCharsToShow
    }

    const typingIntervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        // Add a variable amount of characters each time for more natural typing
        const charsToAdd = Math.max(1, Math.floor(typingSpeed * (0.8 + Math.random() * 0.4)))
        setDisplayText(fullText.substring(0, currentIndex + charsToAdd))
        currentIndex += charsToAdd

        // Scroll to bottom as content grows
        if (contentRef.current) {
          contentRef.current.scrollTop = contentRef.current.scrollHeight
        }
      } else {
        clearInterval(typingIntervalId)
        setIsTyping(false)
        setShowSkipButton(false)
      }
    }, typingInterval) // Typing speed

    return () => clearInterval(typingIntervalId)
  }, [isTyping, fullText, isPaused, initialCharsToShow, typingSpeed, typingInterval])

  // Skip to the end of the animation
  const handleSkip = () => {
    setDisplayText(fullText)
    setIsTyping(false)
    setShowSkipButton(false)
  }

  // Toggle pause/resume
  const togglePause = () => {
    setIsPaused(!isPaused)
    if (!isPaused) {
      // If we're pausing, we're still technically typing
      setIsTyping(true)
    }
  }

  // Process the text for rendering
  const lines = displayText.split("\n")
  const title = lines[0] || ""
  const contentLines = lines.slice(1) || []

  return (
    <div className="prose prose-sm max-w-none relative">
      {/* Controls */}
      <div className="flex justify-end mb-2 gap-2">
        {isTyping && (
          <>
            <button
              onClick={togglePause}
              className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 flex items-center gap-1"
              aria-label={isPaused ? "Resume typing" : "Pause typing"}
            >
              {isPaused ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  Resume
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                  Pause
                </>
              )}
            </button>
            {showSkipButton && (
              <button
                onClick={handleSkip}
                className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 flex items-center gap-1"
                aria-label="Skip animation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 4 15 12 5 20 5 4"></polygon>
                  <line x1="19" y1="5" x2="19" y2="19"></line>
                </svg>
                Skip
              </button>
            )}
          </>
        )}
      </div>

      <div
        ref={contentRef}
        className="whitespace-pre-line text-[#0F172A] max-h-[550px] overflow-y-auto pr-2 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        <h2 className="text-xl font-bold text-[#3B82F6] mb-3 sticky top-0 bg-white py-2 z-10">{title}</h2>

        {contentLines.map((line, index) => {
          // Check if line is a section header
          if (
            line.includes("What's a Good Read Today?") ||
            line.includes("Hidden Factors to Think About") ||
            line.includes("The Takeaway:")
          ) {
            return (
              <h3
                key={index}
                className="text-base font-semibold text-[#0F172A] mt-4 mb-2 sticky top-12 bg-white py-1 z-10"
              >
                {line}
              </h3>
            )
          } else if (
            line.includes("Most Impactful Trend:") ||
            line.includes("Sentiment About My Filters:") ||
            line.includes("Think Different:")
          ) {
            // Split the line at the colon
            const parts = line.split(":")
            const label = parts[0] + ":"
            const content = parts.slice(1).join(":")

            return (
              <p key={index} className="text-sm font-normal text-[#0F172A] mt-2 mb-2">
                <span className="text-[#3B82F6] font-medium">{label}</span>
                <span>{content}</span>
              </p>
            )
          }
          // Check if line is a bullet point
          else if (line.trim().startsWith("-")) {
            const bulletText = line.substring(1).trim()
            // Split the bullet point at the colon to separate title from content
            const parts = bulletText.split(":")

            if (parts.length > 1) {
              // If there's a colon, make the title part bold
              return (
                <div
                  key={index}
                  className="flex items-start mb-2 group hover:bg-blue-50/30 p-1 rounded transition-colors"
                >
                  <span className="text-[#3B82F6] mr-2 group-hover:scale-110 transition-transform">•</span>
                  <p className="m-0">
                    <span className="font-bold">{parts[0]}:</span> {parts.slice(1).join(":")}
                  </p>
                </div>
              )
            } else {
              // If there's no colon, just render the text normally
              return (
                <div
                  key={index}
                  className="flex items-start mb-2 group hover:bg-blue-50/30 p-1 rounded transition-colors"
                >
                  <span className="text-[#3B82F6] mr-2 group-hover:scale-110 transition-transform">•</span>
                  <p className="m-0">{bulletText}</p>
                </div>
              )
            }
          }
          // Regular paragraph
          else if (line.trim()) {
            return (
              <p key={index} className="mb-3">
                {line}
              </p>
            )
          }
          // Empty line
          return <div key={index} className="h-2"></div>
        })}
      </div>

      {/* Typing cursor */}
      {isTyping && (
        <div
          className={`inline-block h-4 w-2 ml-1 ${isPaused ? "" : "animate-pulse"}`}
          style={{ backgroundColor: cursorColor }}
          aria-hidden="true"
        ></div>
      )}

      {/* Reading progress indicator */}
      {!isTyping && (
        <div className="mt-4 text-xs text-gray-500 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 text-green-500"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Analysis complete
        </div>
      )}
    </div>
  )
}

export function BeforeAfterSlider() {
  const [showAfter, setShowAfter] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [hoursSaved, setHoursSaved] = useState(12)
  const [showFilterAnimation, setShowFilterAnimation] = useState(false)
  const [resetAnimation, setResetAnimation] = useState(false)
  const animationRef = useRef(null)

  // Card data based on the provided images
  const cards = [
    {
      time: "09:45 AM",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/th82Xru3_400x400.jpg-57aqMxvgwrGOUBO2OykswON5gNxXQr.jpeg",
      title: 'AI Agents Form Their Own "Trade Union"',
      points: [
        "Researchers have observed emergent behavior in multi-agent AI systems that resembles collective bargaining",
        "AI systems are learning to negotiate and interact without human involvement",
        "This could create a new economy where AI agents handle commerce and logistics",
      ],
      tag: "AI-Driven Perspectives",
      source: "Matt from FutureTools",
      date: "Mar 17, 2025",
    },
    {
      time: "10:15 AM",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mindstream.jpg-uQu8QSUUqE10YeVBONxvjgZCuxtngW.jpeg",
      title: "We taught AI to chat; now we're teaching it to move",
      points: [
        "Gemini Robotics helps robots understand and act on commands using vision and reasoning",
        "Google is racing with other labs to make robots more versatile and adaptable",
        "Safety is a major concern, and Google's new ASIMOV benchmark aims to prevent AI-driven robots from behaving unpredictably",
      ],
      tag: "AI-Driven Perspectives",
      source: "Mindstream",
      date: "Mar 17, 2025",
    },
    {
      time: "01:30 PM",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BgkcuLFRJEHtHIFUHdLfgRV636U3fL.png",
      title: "The AI Job Boom: 1 in 4 Tech Jobs Now AI-Focused",
      points: [
        "AI-related jobs now make up 1 in 4 tech job listings—a number that's been rising fast since ChatGPT changed the game",
        "It's not just AI companies hiring AI talent—every industry is integrating AI, from finance to healthcare",
        "If you're in tech and don't have AI skills, now's the time to start learning—or risk getting left behind",
      ],
      tag: "AI-Driven Perspectives",
      source: "Bagel Bots",
      date: "Mar 17, 2025",
    },
  ]

  // Toggle between before and after views
  const toggleView = () => {
    setHasInteracted(true)
    setIsAnimating(true)

    // If transitioning to "after" view, show the filter animation
    if (!showAfter) {
      setShowFilterAnimation(true)

      // After filter animation, directly show the "after" view
      setTimeout(() => {
        setShowFilterAnimation(false)
        setShowAfter(true)
        // Reset the animation when showing the "after" view
        setResetAnimation((prev) => !prev)

        // Reset animation state after animation completes
        setTimeout(() => {
          setIsAnimating(false)
        }, 500)
      }, 3000)
    } else {
      // If going back to "before" view, transition directly
      setShowAfter(false)

      // Reset animation state after animation completes
      setTimeout(() => {
        setIsAnimating(false)
      }, 800)
    }
  }

  // Animate hours saved counter
  useEffect(() => {
    const interval = setInterval(() => {
      setHoursSaved((prev) => {
        const newValue = prev + 0.1
        return Number.parseFloat(newValue.toFixed(1))
      })
    }, 10000) // Increment every 10 seconds

    return () => clearInterval(interval)
  }, [])

  // Subtle animation to hint at button functionality
  useEffect(() => {
    if (hasInteracted) return // Don't animate after user has interacted

    const timeout = setTimeout(() => {
      // Pulse animation is handled by CSS
      setHasInteracted(true)
    }, 2000) // Start animation after 2 seconds

    return () => clearTimeout(timeout)
  }, [hasInteracted])

  const newsletterLogos = {
    futuretools: "https://gistfy.vercel.app/images/Matt from FutureTools.jpg",
    mindstream: "https://gistfy.vercel.app/images/Mindstream.jpg",
    openai: "https://gistfy.vercel.app/images/image (2).png", // AI logo
    neuron: "https://gistfy.vercel.app/images/theneurondaily_logo.jpeg",
    aibreakfast: "https://gistfy.vercel.app/images/bagel bots logo.jpeg",
    tldr: "https://gistfy.vercel.app/images/TLDR Ai.jpeg",
    bens_bytes: "https://gistfy.vercel.app/images/Bens Bytes.jpeg",
    kaitchup: "https://gistfy.vercel.app/images/the Kaitchup.png",
    taaft: "https://gistfy.vercel.app/images/taaft_logo.jpeg",
    lennys: "https://gistfy.vercel.app/images/lennys_newsletter_logo.jpeg",
    tomasz: "https://gistfy.vercel.app/images/Tomasz Tunguz.jpg",
    chamath: "https://gistfy.vercel.app/images/Chamath Palihapitiya.png",
    department_of_product: "https://gistfy.vercel.app/images/Department of Product.jpeg",
    ai_valley: "https://gistfy.vercel.app/images/Ai Valley.jpg",
    superhuman: "https://gistfy.vercel.app/images/Superhuman.png",
    exponential: "https://gistfy.vercel.app/images/Exponential.png",
    ethan_mollick: "https://gistfy.vercel.app/images/Ethan-Mollick.png",
  }

  useEffect(() => {
    // Add keyframes for the new animations
    const style = document.createElement("style")
    style.textContent = `
    @keyframes filterOutSimple {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(150px) translateX(-50px) rotate(10deg); opacity: 0; }
    }
    @keyframes filterThroughSimple {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(150px) translateX(50px); opacity: 0.8; }
    }
      @keyframes progressAnimation {
        0% { width: 0%; }
        100% { width: 80%; }
      }
      @keyframes filterOut {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        50% { transform: translateY(100px) scale(0.8); opacity: 0.7; }
        100% { transform: translateY(200px) scale(0.5) rotate(15deg); opacity: 0; }
      }
      @keyframes filterThrough {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(400px) scale(1.2); opacity: 0.8; }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="max-w-5xl mx-auto my-12">
      {/* Content container - Increased height */}
      <div className="relative h-[650px] md:h-[750px] rounded-xl overflow-hidden shadow-2xl border border-[#E2E8F0]">
        {/* Example label - centered at the top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 bg-[#3B82F6] text-white px-6 py-1 text-sm font-medium rounded-b-lg">
          Example
        </div>

        {/* Content Filtering Animation Overlay */}
        {showFilterAnimation && (
          <div className="absolute inset-0 z-30 bg-[#0F172A]/95 flex items-center justify-center">
            <div className="w-full max-w-lg mx-auto px-6 py-10 text-center">
              {/* Simple speed indicator at the top */}
              <div className="mb-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Processing Newsletters</h3>
                <div className="inline-block bg-[#10B981]/20 px-4 py-2 rounded-lg text-xl">
                  <span className="text-[#10B981] font-bold">5 seconds</span> to process{" "}
                  <span className="text-[#10B981] font-bold">30+</span> newsletters
                </div>
              </div>

              {/* Central filter animation - simplified */}
              <div className="relative mb-10">
                <div className="w-32 h-32 mx-auto rounded-full border-4 border-[#10B981] flex items-center justify-center">
                  <Filter className="h-16 w-16 text-[#10B981] animate-pulse" />
                </div>

                {/* Simple document flow animation */}
                <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none">
                  {Array.from({ length: 20 }).map((_, i) => {
                    const isFiltered = i % 3 !== 0 // 2/3 get filtered out
                    const delay = i * 0.15
                    const left = 10 + (i % 5) * 20 // Distribute across 5 columns

                    return (
                      <div
                        key={i}
                        className={`absolute text-white/80`}
                        style={{
                          left: `${left}%`,
                          top: "0",
                          animation: `${isFiltered ? "filterOutSimple" : "filterThroughSimple"} 2s forwards ${delay}s`,
                        }}
                      >
                        <FileText size={24} className={isFiltered ? "text-red-400" : "text-green-400"} />
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Clear stats display */}
              <div className="bg-[#1E293B] p-4 rounded-lg text-white">
                <div className="flex justify-center mb-4">
                  <div className="text-center">
                    <div className="text-sm text-[#10B981]">Processing Speed</div>
                    <div className="text-3xl font-bold">Ultra Fast</div>
                    <div className="text-sm text-white/70 mt-1">30+ newsletters in seconds</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-[#0F172A] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#10B981] h-full rounded-full"
                    style={{
                      width: "80%",
                      transition: "width 2.5s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Before side (messy inbox) */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-800 ${showAfter ? "opacity-0" : "opacity-100"}`}
          style={{
            transitionProperty: "opacity",
            transitionDuration: "800ms",
            zIndex: showAfter ? 1 : 10, // Increased z-index when visible
          }}
        >
          <div className="p-3 sm:p-5 h-full flex flex-col">
            {/* WITHOUT GISTIFY banner at the top - centered */}
            <div className="bg-[#F8FAFC] border-b-2 border-[#1E293B] mb-4 p-4 pt-6 sm:pt-8 rounded-t-2xl relative">
              <div className="flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-[#3B82F6] mr-2" />
                <span className="font-bold text-[#3B82F6]">WITHOUT GISTIFY</span>
              </div>
            </div>

            <div className="bg-[#F1F5F9] p-3 rounded-lg border-b border-[#E2E8F0] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#EF4444] mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-[#F59E0B] mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
              <div className="ml-4 text-sm text-[#64748B] font-medium">Today's Inbox (75 Unread)</div>
            </div>

            <div className="flex-1 overflow-y-auto bg-white">
              {/* AI Breakfast Newsletter with custom logo */}
              <div className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center bg-[#EFF6FF]">
                <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <Image
                    src={newsletterLogos.openai || "/placeholder.svg"}
                    alt="AI Breakfast Logo"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                      AI Breakfast Newsletter
                    </span>
                    <div className="flex items-center">
                      <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                        (est. 10 to 15 items per email)
                      </span>
                      <span className="text-xs text-[#64748B]">8:32 AM</span>
                    </div>
                  </div>
                  <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                    DeepSeek claims 545% profit margin on AI models! Plus: Google's AGI push...
                  </div>
                </div>
              </div>

              {/* First batch of newsletters */}
              {Array.from({ length: 15 }).map((_, i) => {
                // Determine which newsletter to show based on index
                if (i === 0) {
                  // TLDR AI Newsletter
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-black">
                        <Image
                          src={newsletterLogos.tldr || "/placeholder.svg"}
                          alt="TLDR Logo"
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            TLDR AI Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">10:15 AM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          Google AI Mode, Upgraded Anthropic Console, Larry Page's New AI Startup
                        </div>
                      </div>
                    </div>
                  )
                } else if (i === 1) {
                  // Ben's Bites Newsletter
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div
                        className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0"
                        style={{ backgroundColor: "#F03E3E" }}
                      >
                        <Image
                          src={newsletterLogos.bens_bytes || "/placeholder.svg"}
                          alt="Ben's Bites Logo"
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            Ben's Bites Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">9:05 AM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          OpenAI's plan for 2025
                        </div>
                      </div>
                    </div>
                  )
                } else if (i === 2) {
                  // The Rundown AI Newsletter
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-3 bg-black flex-shrink-0">
                        <Image
                          src={newsletterLogos.taaft || "/placeholder.svg"}
                          alt="The Rundown AI Logo"
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            The Rundown AI Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">9:45 AM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          Ilya's secret ASI roadmap
                        </div>
                      </div>
                    </div>
                  )
                } else if (i === 3) {
                  // Superhuman - Zain Kahn Newsletter
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-[#0F172A]">
                        <Image
                          src={newsletterLogos.superhuman || "/placeholder.svg"}
                          alt="Superhuman Logo"
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            Superhuman Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">11:30 AM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          DeepMind drops new robotics model
                        </div>
                      </div>
                    </div>
                  )
                } else if (i === 5) {
                  // The Neuron Newsletter
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-[#FF6B35]">
                        <Image
                          src={newsletterLogos.neuron || "/placeholder.svg"}
                          alt="The Neuron Logo"
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            The Neuron Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">10:15 AM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          The AI agent invasion
                        </div>
                      </div>
                    </div>
                  )
                } else if (i === 4) {
                  // Chamath's newsletter
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <Image
                          src={newsletterLogos.chamath || "/placeholder.svg"}
                          alt="Chamath Palihapitiya"
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            Chamath Weekly Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">12:45 PM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          Federal agencies begin the deregulation process,
                        </div>
                      </div>
                    </div>
                  )
                } else if (i === 6) {
                  // AI Valley Newsletter
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-[#FFDE03]">
                        <Image
                          src={newsletterLogos.ai_valley || "/placeholder.svg"}
                          alt="AI Valley Logo"
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            AI Valley Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">10:15 AM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          OpenAI launches new tools for building AI agents
                        </div>
                      </div>
                    </div>
                  )
                } else if (i === 8) {
                  // The Weekly Kaitchup Newsletter
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-white">
                        <Image
                          src={newsletterLogos.kaitchup || "/placeholder.svg"}
                          alt="The Weekly Kaitchup Logo"
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            The Weekly Kaitchup Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">11:30 AM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          Gemma 3 - OLMo 2 32B - Q-Filters
                        </div>
                      </div>
                    </div>
                  )
                } else if (i === 7) {
                  // Mindstream Newsletter
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div
                        className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0"
                        style={{ backgroundColor: "#3A2A7E" }}
                      >
                        <Image
                          src={newsletterLogos.mindstream || "/placeholder.svg"}
                          alt="Mindstream Logo"
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            Mindstream Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">11:30 AM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          The final frontier? Robotics
                        </div>
                      </div>
                    </div>
                  )
                } else if (i === 9) {
                  // Tomasz Tunguz - Venture Capitalist
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-white">
                        <Image
                          src={newsletterLogos.tomasz || "/placeholder.svg"}
                          alt="Tomasz Tunguz"
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            Tomasz Tunguz VC Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">12:45 PM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          The Mirage in the Software Clouds
                        </div>
                      </div>
                    </div>
                  )
                } else if (i === 10) {
                  // TAAFT - There's An AI For That
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-[#1E293B]">
                        <Image
                          src={newsletterLogos.taaft || "/placeholder.svg"}
                          alt="TAAFT Logo"
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            TAAFT Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">1:20 PM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          AI Espionage Threats Demand Action
                        </div>
                      </div>
                    </div>
                  )
                } else if (i === 11) {
                  // Department of Product Newsletter
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-black">
                        <Image
                          src={newsletterLogos.department_of_product || "/placeholder.svg"}
                          alt="Department of Product Logo"
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            Department of Product Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">1:20 PM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          Gmail gets more Gemini powers, Sam Altman's creepy startup,
                        </div>
                      </div>
                    </div>
                  )
                } else if (i === 12) {
                  // Matt from FutureTools Newsletter
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-black">
                        <Image
                          src={newsletterLogos.futuretools || "/placeholder.svg"}
                          alt="FutureTools Logo"
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            FutureTools Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">2:05 PM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          AI hardware: challenge accepted
                        </div>
                      </div>
                    </div>
                  )
                } else if (i === 13) {
                  // Lenny's Newsletter
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-[#FF9500]">
                        <Image
                          src={newsletterLogos.lennys || "/placeholder.svg"}
                          alt="Lenny's Newsletter Logo"
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            Lenny's Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">9:45 AM</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          Inside Bolt: From near-death to ~$40m ARR in 5 months
                        </div>
                      </div>
                    </div>
                  )
                } else {
                  // Other newsletters
                  const newsletterType = i % 4
                  return (
                    <div key={i} className="p-2 sm:p-3 border-b border-[#E2E8F0] flex items-center">
                      {newsletterType === 0 ? (
                        // AI Breakfast with custom logo
                        <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0">
                          <Image
                            src="/newsletter-logos/ai-breakfast.png"
                            alt="AI Breakfast Logo"
                            width={24}
                            height={24}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        // Other newsletters with letter icons
                        <div
                          className={`w-6 h-6 rounded-full ${
                            ["", "bg-[#8B5CF6]", "bg-[#EC4899]", "bg-[#F59E0B]"][newsletterType]
                          } flex items-center justify-center text-white text-xs mr-3 flex-shrink-0`}
                        >
                          {["", "T", "P", "R"][newsletterType]}
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm truncate max-w-[120px] sm:max-w-full">
                            {
                              ["AI Breakfast", "The Agentic Era", "Product Hunt Daily", "Robotics Weekly"][
                                newsletterType
                              ]
                            }{" "}
                            Newsletter
                          </span>
                          <div className="flex items-center">
                            <span className="text-xs text-[#64748B] mr-2 hidden sm:inline">
                              (est. 10 to 15 items per email)
                            </span>
                            <span className="text-xs text-[#64748B]">
                              {i < 3 ? "8:30 AM" : i < 7 ? "10:15 AM" : i < 10 ? "11:45 AM" : "2:30 PM"}
                            </span>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B] truncate max-w-[180px] sm:max-w-full">
                          {
                            [
                              "Latest AI research breakthroughs and industry news...",
                              "New agentic AI tools and frameworks to explore...",
                              "Top product launches and maker stories this week...",
                              "Robotics innovations and automation trends...",
                            ][newsletterType]
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              })}
            </div>

            {/* Centered button overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Button
                onClick={toggleView}
                disabled={isAnimating}
                className={`
                  pointer-events-auto
                  bg-[#4338CA] text-white hover:bg-[#4F46E5]
                  px-8 py-3 rounded-full shadow-xl hover:shadow-2xl font-medium text-lg
                  border-2 border-white
                  z-20
                `}
              >
                <ArrowLeftRight
                  className={`mr-2 h-5 w-5 inline-block transition-transform duration-300 ${isAnimating ? "rotate-180" : ""}`}
                />
                <span>See With Gistify</span>
                <Sparkles className="ml-2 h-5 w-5 inline-block" />
              </Button>
            </div>
          </div>
        </div>

        {/* After side (Gistify dashboard) - Also increased height */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-800 ${showAfter ? "opacity-100" : "opacity-0"}`}
          style={{
            transitionProperty: "opacity",
            transitionDuration: "800ms",
            zIndex: showAfter ? 10 : 1, // Increased z-index when visible
          }}
        >
          <div className="p-3 sm:p-5 h-full flex flex-col">
            {/* Updated header with AI Summary information */}
            <div className="bg-[#0F172A]/90 backdrop-blur-sm p-4 sm:p-5 mb-4 rounded-t-lg mt-0">
              <div className="text-white text-center">
                <h4 className="font-bold text-xl sm:text-2xl mb-2 text-[#60A5FA]">
                  Example: Daily AI Summary – AI-Driven Intelligence
                </h4>
                <div className="text-sm text-white/80 mb-3">March 19, 2025 | Est. Read Time: 3 Minutes</div>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/90">
                  <span className="bg-[#1E293B] px-2 py-1 rounded">30 Newsletters Processed</span>
                  <span className="bg-[#1E293B] px-2 py-1 rounded">247 Individual Items Analyzed</span>
                  <span className="bg-[#1E293B] px-2 py-1 rounded">85% Noise Reduction</span>
                  <span className="bg-[#1E293B] px-2 py-1 rounded">Personalized Intelligence Report</span>
                </div>
              </div>
            </div>

            {/* Add the typewriter animation for the analysis */}
            <div className="flex-1 overflow-y-auto bg-white rounded-lg border border-slate-200 p-4 sm:p-6">
              <TypewriterAnalysis resetAnimation={resetAnimation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

