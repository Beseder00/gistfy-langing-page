"use client"

import React, { useState, useEffect, useRef } from "react"

// Define type for color options
type ColorType = "blue" | "green" | "purple" | "red" | "orange";

// Separate header component for better configurability
function BriefingHeader({ 
  title = "Daily Personalized Briefing",
  date = "March 19, 2025",
  readTime = "3 Min Read",
  metrics = [
    { label: "30 Newsletters", color: "blue" as ColorType },
    { label: "85% filtered", color: "green" as ColorType },
    { label: "247 items", color: "purple" as ColorType }
  ]
}: {
  title?: string;
  date?: string;
  readTime?: string;
  metrics?: Array<{label: string; color: ColorType}>;
}) {
  // Map color names to Tailwind classes
  const colorMap: Record<ColorType, string> = {
    blue: "bg-blue-900/80 text-blue-200",
    green: "bg-green-900/80 text-green-200", 
    purple: "bg-purple-900/80 text-purple-200",
    red: "bg-red-900/80 text-red-200",
    orange: "bg-orange-900/80 text-orange-200"
  };
  
  return (
    <div className="bg-[#0F172A]/90 backdrop-blur-sm p-1 rounded-t-lg">
      {/* Title with customized responsive sizing */}
      <h1 className="text-[6px] font-bold text-white mb-1 text-center leading-none
        max-w-full overflow-hidden
        sm:text-lg 
        md:text-xl
        lg:text-2xl
        sm:text-left">
        {title}
      </h1>
      
      {/* Metadata and badges - centered layout on mobile */}
      <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-0.5 sm:gap-0">
        <div className="text-gray-300 text-[10px] sm:text-xs text-center sm:text-left">
          {date} | {readTime}
        </div>
        
        {/* Tags with readable size - centered on mobile */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-1">
          {metrics.map((metric, index) => (
            <span 
              key={index}
              className={`inline-flex items-center gap-0.5 ${colorMap[metric.color as ColorType] || "bg-gray-900/80 text-gray-200"} px-1.5 py-0.5 rounded-full text-[10px] sm:text-xs`}
            >
              {metric.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function TypewriterAnalysis() {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Improved and corrected content
  const fullText = `
## The Big Picture: AI Systems Are Becoming Self-Sustaining
Across multiple industries, AI isn't just enhancing work—it's replacing decision-making at scale. From AI-driven negotiations and robotics self-production to large language models shaping entire economic models, today's insights indicate a shift toward AI operating as autonomous, interconnected systems.

**Most Impactful Trend:** AI no longer just augments workflows—it executes strategic operations autonomously across business, security, and robotics.

**Sentiment About My Filters:** Mixed enthusiasm and concern. Big Tech is all-in on agentic AI, but governance and human oversight remain an open question.

**Think Different:** If AI manages AI, are corporate AI models evolving into economic entities? Could we see self-organizing AI-driven markets where AI dictates pricing, logistics, and infrastructure?

## What's a Good Read Today?
Today's summaries highlight AI evolving into an independent force, where its influence extends beyond human operators.

• AI Orchestration Battles: OpenAI and Anthropic take different roads—one toward unified AI ecosystems, the other toward interoperable AI standards.

• Robots Now Build Themselves: AI-driven robotic production facilities suggest that soon, humanoid robots may self-replicate and manage assembly lines.

• China's AI Cost Breakthrough: China's AI labs outperform GPT-4.5 at 1% of the cost, setting off an AI price war that could shift global tech dominance.

• AI Replacing Sales & Marketing: AI's real-time audience targeting eliminates human guesswork, leading to fully autonomous digital marketing systems.

• The Future of AI Agents: Big Tech is doubling down on AI agents as independent actors—decision-makers operating entire workflows, not just assistants.

These insights reflect AI breaking free from human oversight, pushing automation into self-organizing systems. AI is now negotiating with itself, governing its own infrastructure, and building the next generation of AI.

## Hidden Factors to Think About
• Can AI-driven economies regulate themselves? If AI sets prices, optimizes logistics, and automates entire industries, how do we govern AI-led markets?

• How far can AI replace decision-making? OpenAI, Anthropic, and Google are racing to define AI orchestration—but will human oversight become obsolete in key industries?

• Who benefits from an AI-driven price war? As China pushes ultra-cheap AI alternatives, does this accelerate global AI adoption or undermine innovation at the top?

## The Takeaway
AI is no longer just advancing technology—it's reshaping industries, governance, and economic control. Understanding these shifts now ensures you're prepared for what's next. Stay ahead. Think critically. Adapt fast.`

  useEffect(() => {
    if (!isTyping) return

    // Start with a clean initial chunk
    const initialChunk = fullText.substring(0, 150)
    setDisplayedText(initialChunk)

    // Remaining text to type out character by character
    const remaining = fullText.substring(150)
    let index = 0

    // Function to simulate typing with variable speed
    const typeNextCharacter = () => {
      if (index < remaining.length) {
        setDisplayedText(prev => prev + remaining.charAt(index))
        index++

        // Vary typing speed based on character
        let delay = 5 // Faster base speed
        const currentChar = remaining.charAt(index)
        
        // Slow down at punctuation
        if (['.', '!', '?', '\n'].includes(currentChar)) {
          delay = 50
        } else if ([',', ';', ':'].includes(currentChar)) {
          delay = 25
        }
        
        // Add small random variation
        delay += Math.random() * 10

        // Schedule next character
        setTimeout(typeNextCharacter, delay)

        // Auto-scroll as new content appears
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight - containerRef.current.clientHeight - 100;
        }
      } else {
        // Typing complete
        setIsTyping(false)
        setIsComplete(true)
      }
    }

    // Start typing after a short delay
    const timeout = setTimeout(typeNextCharacter, 800)
    
    return () => clearTimeout(timeout)
  }, [isTyping, fullText])

  // Process displayed text to include formatting
  const formatText = (text: string) => {
    // Track if we're in specific sections
    let inHiddenFactorsSection = false;
    let inGoodReadSection = false;
    
    // Split by lines and filter out empty lines at the start/end
    return text.trim().split('\n').map((line, i) => {
      // Clean the line of any special characters that might cause display issues
      const cleanLine = line.trim();
      
      if (!cleanLine) return <div key={i} className="h-2" />;
      
      // Check if we're entering sections
      if (cleanLine.startsWith('## Hidden Factors')) {
        inHiddenFactorsSection = true;
        inGoodReadSection = false;
      } else if (cleanLine.startsWith("## What's a Good Read Today?")) {
        inGoodReadSection = true;
        inHiddenFactorsSection = false;
      } else if (cleanLine.startsWith('## ') && (inHiddenFactorsSection || inGoodReadSection)) {
        inHiddenFactorsSection = false;
        inGoodReadSection = false;
      }
      
      // Headers (## and ###)
      if (cleanLine.startsWith('## ')) {
        if (cleanLine.startsWith('## The Big Picture')) {
          return (
            <h2 key={i} className="text-2xl font-bold text-[var(--foreground)] mt-6 mb-4">
              {cleanLine.replace('## ', '')}
            </h2>
          )
        }
        return (
          <h2 key={i} className="text-xl font-bold text-[var(--foreground)] mt-6 mb-3">
            {cleanLine.replace('## ', '')}
          </h2>
        )
      }
      
      // Bullet points
      if (cleanLine.startsWith('• ')) {
        const colonIndex = cleanLine.indexOf(':');
        const questionMarkIndex = cleanLine.indexOf('?');
        
        // Special handling for Hidden Factors section
        if (inHiddenFactorsSection && questionMarkIndex > 0) {
          const [beforeQuestion, ...afterQuestion] = cleanLine.substring(2).split('?');
          return (
            <div key={i} className="flex items-start py-1 px-2 my-1 rounded hover:bg-[var(--muted-background)]/50 transition-colors">
              <span className="mr-2 text-[var(--muted-foreground)]">•</span>
              <span className="text-[var(--muted-foreground)]">
                <span className="font-semibold text-gray-800 dark:text-gray-300">{beforeQuestion.trim()}</span>
                {'?'}
                <span className="text-[var(--muted-foreground)]">{afterQuestion.join('?')}</span>
              </span>
            </div>
          );
        }
        
        // Regular bullet points with colons
        if (colonIndex > 0) {
          const beforeColon = cleanLine.substring(2, colonIndex + 1);
          const afterColon = cleanLine.substring(colonIndex + 1);
          
          return (
            <div key={i} className="flex items-start py-1 px-2 my-1 rounded hover:bg-[var(--muted-background)]/50 transition-colors">
              <span className="mr-2 text-[var(--muted-foreground)]">•</span>
              <span>
                <span className="text-[var(--foreground)] font-semibold">{beforeColon}</span>
                <span className="text-[var(--muted-foreground)]">
                  {afterColon.split('**').map((part, j) => 
                    j % 2 === 1 ? <span key={j} className="text-[var(--foreground)] font-semibold">{part.trim()}</span> : part
                  )}
                </span>
                {inGoodReadSection && (
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline text-sm font-medium ml-1">
                    the Gist →
                  </a>
                )}
              </span>
            </div>
          );
        }
        
        // Regular bullet points
        return (
          <div key={i} className="flex items-start py-1 px-2 my-1 rounded hover:bg-[var(--muted-background)]/50 transition-colors">
            <span className="mr-2 text-[var(--muted-foreground)]">•</span>
            <span className="text-[var(--muted-foreground)]">
              {cleanLine.substring(2).split('**').map((part, j) => 
                j % 2 === 1 ? 
                  <span key={j} className={`font-semibold ${inHiddenFactorsSection ? 'text-gray-800 dark:text-gray-300' : 'text-[var(--foreground)]'}`}>
                    {part.trim()}
                  </span> 
                : part
              )}
            </span>
          </div>
        );
      }
      
      // Regular paragraphs and bold sections
      return (
        <p key={i} className="my-2 text-[var(--muted-foreground)]">
          {cleanLine.split('**').map((part, j) => {
            if (j % 2 === 1) {
              // Bold text
              return <span key={j} className="text-[var(--foreground)] font-semibold">{part.trim()}</span>;
            }
            // Regular text with possible italic sections
            return part.split('_').map((italicPart, k) => 
              k % 2 === 1 ? <em key={k}>{italicPart.trim()}</em> : italicPart
            );
          })}
        </p>
      );
    });
  }

  return (
    <div className="flex flex-col h-full">
      {/* Using the new header component */}
      <BriefingHeader />
      
      {/* Content area */}
      <div 
        ref={containerRef}
        className="flex-1 bg-[var(--card-background)] p-4 px-6 sm:px-8 rounded-b-lg overflow-y-auto custom-scrollbar"
        style={{ 
          scrollBehavior: 'smooth',
          maxHeight: 'calc(100% - 90px)',
        }}
      >
        <div className="relative">
          {formatText(displayedText)}
          
          {/* Typing cursor */}
          {isTyping && (
            <span 
              className="absolute inline-block w-2 h-5 bg-blue-600 ml-1"
              style={{ 
                animation: 'blink 0.7s step-end infinite',
                boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)'
              }}
            ></span>
          )}
          
          {/* Completion indicator */}
          {isComplete && (
            <div className="flex items-center justify-center mt-4 pt-2 border-t border-[var(--border)] animate-fade-in">
              <span className="text-sm text-[var(--muted-foreground)]">Analysis complete</span>
              <div className="w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></div>
            </div>
          )}
        </div>
      </div>
      
      {/* Add animation for blinking cursor */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--muted-background);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--muted-foreground);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--foreground);
        }
      `}</style>
    </div>
  )
} 