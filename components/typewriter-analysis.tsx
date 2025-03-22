"use client"

import React, { useState, useEffect, useRef } from "react"

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

## What's a Good Read Today? (Ranked by Filters)
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
AI is no longer just advancing technology—it's reshaping industries, governance, and economic control. Understanding these shifts now ensures you're prepared for what's next. Stay ahead. Think critically. Adapt fast.
`

  useEffect(() => {
    if (!isTyping) return

    // For debugging, display the full text immediately
    setDisplayedText(fullText)
    setIsTyping(false)
    setIsComplete(true)
    
    /* Normal animation code is commented out for debugging
    // Initial chunk to display immediately (first 150 characters)
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
        let delay = 10 // Base speed
        const currentChar = remaining.charAt(index)
        
        // Slow down at punctuation
        if (['.', '!', '?', '\n'].includes(currentChar)) {
          delay = 100
        } else if ([',', ';', ':'].includes(currentChar)) {
          delay = 50
        }
        
        // Add random variation
        delay += Math.random() * 20

        // Schedule next character
        setTimeout(typeNextCharacter, delay)

        // Auto-scroll as new content appears
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight
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
    */
  }, [isTyping])

  // Process displayed text to include formatting
  const formatText = (text: string) => {
    // Track if we're in the "Hidden Factors" section
    let inHiddenFactorsSection = false;
    
    // Split by lines
    return text.split('\n').map((line, i) => {
      // Check if we're entering the Hidden Factors section
      if (line.startsWith('## Hidden Factors')) {
        inHiddenFactorsSection = true;
      } else if (line.startsWith('## ') && inHiddenFactorsSection) {
        // If we encounter another main heading after Hidden Factors, we're out of that section
        inHiddenFactorsSection = false;
      }
      
      // Headers (## and ###)
      if (line.startsWith('## ')) {
        // Make "The Big Picture" heading larger than other section headings
        if (line.startsWith('## The Big Picture')) {
          return (
            <h2 key={i} className="text-2xl font-bold text-gray-900 mt-6 mb-4">
              {line.replace('## ', '')}
            </h2>
          )
        }
        return (
          <h2 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">
            {line.replace('## ', '')}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        return (
          <h3 key={i} className="text-lg font-bold text-gray-800 mt-4 mb-2">
            {line.replace('### ', '')}
          </h3>
        )
      } 
      // Numbered list items
      else if (/^\d+\.\s/.test(line)) {
        return (
          <div key={i} className="ml-4 my-2 font-medium">
            {line.split('**').map((part, j) => 
              j % 2 === 1 ? <span key={j} className="text-gray-800 font-semibold">{part}</span> : part
            )}
          </div>
        )
      }
      // Bullet points
      else if (line.startsWith('• ')) {
        // Check if the line contains a colon
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
          const beforeColon = line.substring(2, colonIndex + 1); // Include the colon
          const afterColon = line.substring(colonIndex + 1);
          
          return (
            <div 
              key={i} 
              className="flex items-start py-1 px-2 my-1 rounded hover:bg-gray-50 transition-colors"
            >
              <span className="mr-2 text-gray-600">•</span>
              <span>
                <span className="text-gray-800 font-semibold">{beforeColon}</span>
                {afterColon.split('**').map((part, j) => 
                  j % 2 === 1 ? <span key={j} className="text-gray-800 font-semibold">{part}</span> : part
                )}
                {/* Only add 'the Gist' link for Hidden Factors section */}
                {inHiddenFactorsSection && (
                  <>
                    {' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium ml-1">
                      the Gist →
                    </a>
                  </>
                )}
              </span>
            </div>
          );
        } else {
          // If no colon, process as before
          return (
            <div 
              key={i} 
              className="flex items-start py-1 px-2 my-1 rounded hover:bg-gray-50 transition-colors"
            >
              <span className="mr-2 text-gray-600">•</span>
              <span>
                {line.replace('• ', '').split('**').map((part, j) => 
                  j % 2 === 1 ? <span key={j} className="text-gray-800 font-semibold">{part}</span> : part
                )}
                {/* Only add 'the Gist' link for Hidden Factors section */}
                {inHiddenFactorsSection && (
                  <>
                    {' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium ml-1">
                      the Gist →
                    </a>
                  </>
                )}
              </span>
            </div>
          );
        }
      } 
      // Regular paragraph
      else if (line.trim() !== '') {
        return (
          <p key={i} className="my-2">
            {line.split('**').map((part, j) => 
              j % 2 === 1 ? <span key={j} className="text-gray-800 font-semibold">{part}</span> : 
              part.split('_').map((italicPart, k) => 
                k % 2 === 1 ? <em key={k}>{italicPart}</em> : italicPart
              )
            )}
          </p>
        )
      }
      // Empty line
      return <div key={i} className="h-2"></div>
    })
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header section - Keep dark blue background but remove title */}
      <div className="bg-[#0F172A]/90 backdrop-blur-sm p-4 rounded-t-lg">
        {/* Add back the title */}
        <h1 className="text-xl font-bold text-white mb-2">Daily AI Summary – AI-Driven Intelligence</h1>
        <div className="flex justify-between">
          <div className="text-gray-300 text-sm">March 19, 2025 | 3 Min Read</div>
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1 bg-blue-900/80 text-blue-200 px-2 py-0.5 rounded-full text-xs">
              30 Newsletters
            </span>
            <span className="inline-flex items-center gap-1 bg-green-900/80 text-green-200 px-2 py-0.5 rounded-full text-xs">
              85% filtered
            </span>
            <span className="inline-flex items-center gap-1 bg-purple-900/80 text-purple-200 px-2 py-0.5 rounded-full text-xs">
              247 items
            </span>
            <span className="inline-flex items-center gap-1 bg-orange-900/80 text-orange-200 px-2 py-0.5 rounded-full text-xs">
              Personalized Report
            </span>
          </div>
        </div>
      </div>
      
      {/* Content area */}
      <div 
        ref={containerRef}
        className="flex-1 bg-white p-4 px-6 sm:px-8 rounded-b-lg overflow-y-auto custom-scrollbar"
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
              className="absolute inline-block w-2 h-4 bg-blue-500 ml-1"
              style={{ 
                animation: 'blink 0.7s step-end infinite',
              }}
            ></span>
          )}
          
          {/* Completion indicator */}
          {isComplete && (
            <div className="flex items-center justify-center mt-4 pt-2 border-t border-gray-200">
              <span className="text-sm text-gray-500">Analysis complete</span>
              <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
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
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  )
} 