"use client"

import { useState, useEffect, useRef } from "react"
import {
  AlertCircle,
  CheckCircle,
  ArrowLeftRight,
  Sparkles,
  FileText,
  Filter,
  BookmarkIcon,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TypewriterAnalysis } from "@/components/typewriter-analysis"

export function BeforeAfterSlider() {
  const [showAfter, setShowAfter] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [hoursSaved, setHoursSaved] = useState(12)
  const [showFilterAnimation, setShowFilterAnimation] = useState(false)
  const [showCardFormation, setShowCardFormation] = useState(false)
  const [cardStage, setCardStage] = useState(0)
  const animationRef = useRef(null)

  // Card data based on the provided images
  const cards = [
    {
      time: "09:45 AM",
      logo: "/images/Matt from FutureTools.jpg",
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
      logo: "/images/Mindstream.jpg",
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
      logo: "/images/bagel bots logo.jpeg",
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
    console.log("Toggle view clicked, current showAfter:", showAfter)

    // If transitioning to "after" view, show the filter animation
    if (!showAfter) {
      setShowFilterAnimation(true)
      console.log("Showing filter animation")

      // After filter animation, show card formation
      setTimeout(() => {
        setShowFilterAnimation(false)
        setShowCardFormation(false) // Changed to false so we skip card formation
        setCardStage(5) // Set to final stage

        // Skip the card formation animation and show TypewriterAnalysis directly
        setIsAnimating(false)
        setShowAfter(true) // Mark that we're in the "after" view
        console.log("Showing after view with TypewriterAnalysis")

      }, 2000)
    } else {
      // If going back to "before" view, transition directly
      setShowCardFormation(false)
      setShowAfter(false)
      setCardStage(0)
      console.log("Showing before view")

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

  return (
    <div className="max-w-5xl mx-auto my-12">
      {/* Content container - Increased height */}
      <div className="relative h-[650px] md:h-[750px] rounded-xl overflow-hidden shadow-2xl border border-[#E2E8F0]">
        {/* Example label - centered at the top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 bg-[#3B82F6] text-white px-6 py-1 text-sm font-medium rounded-b-lg">
          Example
        </div>

        {/* Center Button - Always visible */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center">
          <Button
            onClick={toggleView}
            disabled={isAnimating}
            className={`
              relative overflow-hidden group transition-all duration-300 transform hover:scale-105
              bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] text-white
              px-6 py-4 rounded-xl shadow-xl hover:shadow-2xl
              ${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity
              flex flex-col items-center justify-center gap-1
              min-w-[220px] h-[72px] border border-white/20
              ${showAfter ? 'hidden' : 'flex'}
            `}
            style={{
              backgroundSize: '200% 100%',
              animation: 'gradient-x 3s ease infinite',
            }}
          >
            {showAfter ? (
              <div className="flex items-center justify-center">
                <ArrowLeftRight className="mr-2 h-5 w-5 inline-block" />
                <span className="relative z-10 font-bold text-base whitespace-nowrap">See Without Gistify</span>
                <Sparkles className="ml-2 h-5 w-5 inline-block animate-pulse" />
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center">
                  <span className="relative z-10 font-bold text-lg whitespace-nowrap">See A Daily Summary</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="relative z-10 font-medium text-base whitespace-nowrap">With Gistify</span>
                  <Sparkles className="ml-2 h-4 w-4 inline-block animate-pulse" />
                </div>
              </>
            )}

            {/* Add subtle glow effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>

          {/* Add animation keyframes */}
          <style jsx global>{`
            @keyframes gradient-x {
              0%, 100% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
            }

            @keyframes filterOut {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              50% {
                transform: translateY(100px) scale(0.8);
                opacity: 0.6;
              }
              100% {
                transform: translateY(150px) scale(0.5);
                opacity: 0;
              }
            }

            @keyframes filterThrough {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              100% {
                transform: translateY(300px) scale(1.1);
                opacity: 1;
              }
            }
            
            @keyframes glow {
              0%, 100% {
                box-shadow: 0 0 20px 10px rgba(16, 185, 129, 0.3);
              }
              50% {
                box-shadow: 0 0 40px 15px rgba(16, 185, 129, 0.5);
              }
            }
            
            .glow-effect {
              animation: glow 2s ease-in-out infinite;
            }
          `}</style>
        </div>

        {/* Content Filtering Animation Overlay */}
        {showFilterAnimation && (
          <div className="absolute inset-0 z-30 bg-[#0F172A]/95 flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-md h-80">
              {/* Filter graphic in the middle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border-8 border-[#10B981] flex items-center justify-center z-20 glow-effect">
                <Filter className="h-20 w-20 text-[#10B981] animate-pulse" />
              </div>

              {/* Document icons flowing from top */}
              <div className="absolute inset-0">
                {/* Generate 30 document icons */}
                {Array.from({ length: 30 }).map((_, i) => {
                  // Randomize starting positions, speeds, and whether they get filtered
                  const startLeft = Math.random() * 100
                  const startDelay = Math.random() * 0.5
                  const duration = 0.8 + Math.random() * 1
                  const isFiltered = Math.random() < 0.65 // 65% get filtered out
                  const size = 16 + Math.floor(Math.random() * 10)

                  return (
                    <div
                      key={i}
                      className={`absolute top-0 text-white/80 ${isFiltered ? "filtered" : "kept"}`}
                      style={{
                        left: `${startLeft}%`,
                        animation: `${isFiltered ? "filterOut" : "filterThrough"} ${duration}s forwards ${startDelay}s`,
                        zIndex: isFiltered ? 10 : 30,
                      }}
                    >
                      <FileText
                        style={{ width: size, height: size }}
                        className={isFiltered ? "text-red-500" : "text-green-400"}
                      />
                    </div>
                  )
                })}
              </div>

              {/* Stats counter */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white">
                <div className="text-3xl font-bold text-[#10B981] animate-pulse">Save Hours each Day</div>
                <div className="text-sm text-white font-medium mt-2">AI-Powered Newsletter Summarization</div>
              </div>
            </div>
          </div>
        )}

        {/* Card Formation Animation */}
        {showCardFormation && (
          <div className="absolute inset-0 z-30 bg-[#0F172A]/90 flex flex-col items-center pt-6 px-4 pb-4">
            {/* Card formation animation header - Improved with responsive text sizes */}
            <div className="w-full bg-[#4338CA] text-white p-3 sm:p-4 mb-4 sm:mb-6 flex flex-col md:flex-row justify-between items-center rounded-xl shadow-[0_0_15px_rgba(67,56,202,0.3)]">
              <div className="flex flex-col items-start mb-3 md:mb-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                  Find What Matters to YOU Fast, Ignore the Rest
                </h3>
                <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                  <div className="flex items-center">
                    <div className="text-lg sm:text-xl font-bold text-white mr-1 sm:mr-2">30+</div>
                    <div className="text-xs sm:text-sm text-white">Newsletters</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg sm:text-xl font-bold text-white mr-1 sm:mr-2">85%</div>
                    <div className="text-xs sm:text-sm text-white">Less Noise</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg sm:text-xl font-bold text-white mr-1 sm:mr-2">1-2</div>
                    <div className="text-xs sm:text-sm text-white">Hours Saved Daily</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card container with horizontal carousel on mobile and grid on desktop */}
            <div className="w-full max-w-5xl px-2 sm:px-6 pb-20 mt-2 overflow-x-auto md:overflow-y-auto md:overflow-x-hidden max-h-[calc(100%-120px)]">
              <div className="flex flex-row md:grid md:grid-cols-2 gap-4 md:gap-4 md:flex-wrap snap-x snap-mandatory">
                {/* First row - 2 cards side by side */}
                <div
                  className={`
                    bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 flex-shrink-0
                    min-w-[90%] w-[90%] sm:min-w-[350px] md:min-w-0 md:w-full mx-auto md:mx-0 snap-center
                    ${cardStage >= 1 ? "opacity-100" : "opacity-0"} 
                    ${cardStage >= 1 ? "transform-none" : "translate-y-10"}
                  `}
                  style={{ transitionDelay: "0.2s" }}
                >
                  {/* Card Header - Styled to match the provided images */}
                  <div
                    className={`px-3 sm:px-4 pt-4 pb-2 transition-opacity duration-300 ${cardStage >= 2 ? "opacity-100" : "opacity-0"}`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 mr-3 flex-shrink-0">
                        <Image
                          src={cards[0].logo || "/placeholder.svg"}
                          alt={cards[0].source}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-sm text-[#64748B]">{cards[0].time} • Neutral • Free</div>
                      <div className="ml-auto flex space-x-2">
                        <button className="text-[#64748B]">
                          <BookmarkIcon size={16} />
                        </button>
                        <button className="text-[#64748B]">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>
                    <h3 className="font-bold text-[#0F172A] text-base sm:text-lg mb-2 sm:mb-3">{cards[0].title}</h3>
                  </div>

                  {/* Card Content - Bullet points styled to match the provided images */}
                  <div
                    className={`px-3 sm:px-4 pb-3 transition-opacity duration-500 ${cardStage >= 3 ? "opacity-100" : "opacity-0"}`}
                  >
                    <ul className="space-y-2 sm:space-y-3">
                      {cards[0].points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start transition-opacity duration-300"
                          style={{ transitionDelay: `${i * 0.15}s` }}
                        >
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                          <span className="text-[#0F172A] text-sm sm:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer - Styled to match the provided images */}
                  <div
                    className={`px-3 sm:px-4 py-3 flex justify-between items-center transition-opacity duration-300 border-t border-gray-100 ${cardStage >= 4 ? "opacity-100" : "opacity-0"}`}
                  >
                    <div>
                      <span
                        className="inline-flex items-center gap-1 bg-[#EFF6FF] text-[#3B82F6] px-3 py-1 rounded-full text-sm"
                        title="Get thought-provoking arguments, counterpoints, and questions to deepen your understanding any contents impact."
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
                          className="flex-shrink-0"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="9" y1="15" x2="15" y2="15" />
                        </svg>
                        {cards[0].tag}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <a href="#" className="text-[#3B82F6] text-sm hover:underline flex items-center">
                        Read full article
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>

                  {/* Source and date */}
                  <div
                    className={`px-3 sm:px-4 py-2 flex justify-between items-center text-[#64748B] text-sm ${cardStage >= 4 ? "opacity-100" : "opacity-0"}`}
                  >
                    <span>{cards[0].source}</span>
                    <span>{cards[0].date}</span>
                  </div>
                </div>

                <div
                  className={`
                    bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 flex-shrink-0
                    min-w-[90%] w-[90%] sm:min-w-[350px] md:min-w-0 md:w-full mx-auto md:mx-0 snap-center
                    ${cardStage >= 1 ? "opacity-100" : "opacity-0"} 
                    ${cardStage >= 1 ? "transform-none" : "translate-y-10"}
                  `}
                  style={{ transitionDelay: "0.4s" }}
                >
                  {/* Card Header - Styled to match the provided images */}
                  <div
                    className={`px-3 sm:px-4 pt-4 pb-2 transition-opacity duration-300 ${cardStage >= 2 ? "opacity-100" : "opacity-0"}`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 mr-3 flex-shrink-0">
                        <Image
                          src={cards[1].logo || "/placeholder.svg"}
                          alt={cards[1].source}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-sm text-[#64748B]">{cards[1].time} • Neutral • Free</div>
                      <div className="ml-auto flex space-x-2">
                        <button className="text-[#64748B]">
                          <BookmarkIcon size={16} />
                        </button>
                        <button className="text-[#64748B]">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>
                    <h3 className="font-bold text-[#0F172A] text-base sm:text-lg mb-2 sm:mb-3">{cards[1].title}</h3>
                  </div>

                  {/* Card Content - Bullet points styled to match the provided images */}
                  <div
                    className={`px-3 sm:px-4 pb-3 transition-opacity duration-500 ${cardStage >= 3 ? "opacity-100" : "opacity-0"}`}
                  >
                    <ul className="space-y-2 sm:space-y-3">
                      {cards[1].points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start transition-opacity duration-300"
                          style={{ transitionDelay: `${i * 0.15}s` }}
                        >
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                          <span className="text-[#0F172A] text-sm sm:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer - Styled to match the provided images */}
                  <div
                    className={`px-3 sm:px-4 py-3 flex justify-between items-center transition-opacity duration-300 border-t border-gray-100 ${cardStage >= 4 ? "opacity-100" : "opacity-0"}`}
                  >
                    <div>
                      <span
                        className="inline-flex items-center gap-1 bg-[#EFF6FF] text-[#3B82F6] px-3 py-1 rounded-full text-sm"
                        title="Get thought-provoking arguments, counterpoints, and questions to deepen your understanding any contents impact."
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
                          className="flex-shrink-0"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="9" y1="15" x2="15" y2="15" />
                        </svg>
                        {cards[1].tag}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <a href="#" className="text-[#3B82F6] text-sm hover:underline flex items-center">
                        Read full article
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>

                  {/* Source and date */}
                  <div
                    className={`px-3 sm:px-4 py-2 flex justify-between items-center text-[#64748B] text-sm ${cardStage >= 4 ? "opacity-100" : "opacity-0"}`}
                  >
                    <span>{cards[1].source}</span>
                    <span>{cards[1].date}</span>
                  </div>
                </div>

                {/* Second row - 1 card centered */}
                <div
                  className={`
                    bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 flex-shrink-0
                    min-w-[90%] w-[90%] sm:min-w-[350px] md:min-w-0 md:w-full md:col-span-2 md:max-w-md md:mx-auto mx-auto md:mx-0 snap-center
                    ${cardStage >= 1 ? "opacity-100" : "opacity-0"} 
                    ${cardStage >= 1 ? "transform-none" : "translate-y-10"}
                  `}
                  style={{ transitionDelay: "0.6s" }}
                >
                  {/* Card Header - Styled to match the provided images */}
                  <div
                    className={`px-3 sm:px-4 pt-4 pb-2 transition-opacity duration-300 ${cardStage >= 2 ? "opacity-100" : "opacity-0"}`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 mr-3 flex-shrink-0">
                        <Image
                          src={cards[2].logo || "/placeholder.svg"}
                          alt={cards[2].source}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-sm text-[#64748B]">{cards[2].time} • Neutral • Free</div>
                      <div className="ml-auto flex space-x-2">
                        <button className="text-[#64748B]">
                          <BookmarkIcon size={16} />
                        </button>
                        <button className="text-[#64748B]">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>
                    <h3 className="font-bold text-[#0F172A] text-base sm:text-lg mb-2 sm:mb-3">{cards[2].title}</h3>
                  </div>

                  {/* Card Content - Bullet points styled to match the provided images */}
                  <div
                    className={`px-3 sm:px-4 pb-3 transition-opacity duration-500 ${cardStage >= 3 ? "opacity-100" : "opacity-0"}`}
                  >
                    <ul className="space-y-2 sm:space-y-3">
                      {cards[2].points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start transition-opacity duration-300"
                          style={{ transitionDelay: `${i * 0.15}s` }}
                        >
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                          <span className="text-[#0F172A] text-sm sm:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer - Styled to match the provided images */}
                  <div
                    className={`px-3 sm:px-4 py-3 flex justify-between items-center transition-opacity duration-300 border-t border-gray-100 ${cardStage >= 4 ? "opacity-100" : "opacity-0"}`}
                  >
                    <div>
                      <span
                        className="inline-flex items-center gap-1 bg-[#EFF6FF] text-[#3B82F6] px-3 py-1 rounded-full text-sm"
                        title="Get thought-provoking arguments, counterpoints, and questions to deepen your understanding any contents impact."
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
                          className="flex-shrink-0"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="9" y1="15" x2="15" y2="15" />
                        </svg>
                        {cards[2].tag}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <a href="#" className="text-[#3B82F6] text-sm hover:underline flex items-center">
                        Read full article
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>

                  {/* Source and date */}
                  <div
                    className={`px-3 sm:px-4 py-2 flex justify-between items-center text-[#64748B] text-sm ${cardStage >= 4 ? "opacity-100" : "opacity-0"}`}
                  >
                    <span>{cards[2].source}</span>
                    <span>{cards[2].date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile scroll indicators */}
            {/* Mobile navigation indicators */}
            <div className="md:hidden flex flex-col items-center mt-4 mb-4">
              <div className="flex space-x-3">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const container = document.querySelector(".snap-x")
                      if (container) {
                        const cards = container.querySelectorAll(".snap-center")
                        if (cards[index]) {
                          cards[index].scrollIntoView({ behavior: "smooth", inline: "center" })
                        }
                      }
                    }}
                    className={`w-${index === 0 ? "8" : "3"} h-2 rounded-full transition-all duration-300 ${
                      index === 0 ? "bg-[#10B981]" : "bg-[#10B981]/30 hover:bg-[#10B981]/50"
                    }`}
                    aria-label={`View card ${index + 1}`}
                  />
                ))}
              </div>
              <div className="text-xs text-white/80 mt-2 text-center font-medium">Swipe to navigate</div>
            </div>

            {/* Progress indicator */}
            {/*
            <div className="absolute bottom-44 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[1, 2, 3, 4, 5].map((stage) => (
                <div
                  key={stage}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${cardStage >= stage ? "bg-[#10B981]" : "bg-white/30"}`}
                ></div>
              ))}
            </div>
            */}

            {/* Updated metrics display */}
          </div>
        )}

        {/* Before side (messy inbox) */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-800 ${showAfter ? "opacity-0" : "opacity-100"}`}
          style={{
            transitionProperty: "opacity",
            transitionDuration: "800ms",
            zIndex: showAfter ? 1 : 2,
          }}
        >
          <div className="p-3 sm:p-5 h-full flex flex-col">
            {/* WITHOUT GISTIFY banner at the top */}
            <div className="bg-[#F8FAFC] border-b-2 border-[#1E293B] mb-4 p-4 pt-6 sm:pt-8 rounded-t-2xl relative">
              <div className="flex items-center">
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-73daIPkH7ItPnl1SLtNKfrHi41F0bv.png"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-AzzCfHLfZx8HyQFKxlBjwY4I7Bvkqy.jpeg"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1680533179533-VhBJ2reyaPi1OAeEW85IlSirJGmDpb.jpeg"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the_rundown_ai_logo-Dob3vBX0lfTcXQLOMfjqUohJugo1dV.jpeg"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chamath%20Palihapitiya%281%29-FBvjpWt3AJ4shBcypc2GuyWPdAIsWH.png"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/theneurondaily_logo-EMaT3iZ3SbcA04EkKA4tdtYANyguzg.jpeg"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chamath%20Palihapitiya-tMhl9MRFZxowiicTdGJEmJh1xIacm9.png"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amRZmuSc_400x400.jpg-ZcWqI3OzAQOrHXOdztPmbccYIgSLB9.jpeg"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/892a3b50-51e5-4552-8f5e-09689ea4e7a3_1024x1024-D6RRZuP8ETP9H1CNGTtQEKALwpEPzn.png"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mindstream.jpg-uQu8QSUUqE10YeVBONxvjgZCuxtngW.jpeg"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H7Cv4MIirEa7IdsvbgnKANVOJCal1E.png"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qatvALjhMQN32rAWKO93kt48McvrSu.png"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rm7Hncxu9pihHDix4b7PW64ybPXsk3.png"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/th82Xru3_400x400.jpg-57aqMxvgwrGOUBO2OykswON5gNxXQr.jpeg"
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
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Pw4zrjnk1SbV959xClfeaARw0M5BE4.png"
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
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-73daIPkH7ItPnl1SLtNKfrHi41F0bv.png"
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
          </div>
        </div>

        {/* After side (Gistify dashboard) */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-800 ${showAfter ? "opacity-100 z-30" : "opacity-0 -z-10"}`}
          style={{
            transitionProperty: "opacity",
            transitionDuration: "800ms",
          }}
        >
          <div className="p-3 sm:p-5 h-full flex flex-col">
            {/* Remove the purple gradient header completely */}
            
            {/* TypewriterAnalysis - Make sure it takes up the full space */}
            <div className="flex-1 overflow-hidden">
              {showAfter && <TypewriterAnalysis />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

