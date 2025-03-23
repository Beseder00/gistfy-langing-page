"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'

// Add TypeScript declaration for Twitter widgets
declare global {
  interface Window {
    twttr: {
      widgets: {
        load: (element?: HTMLElement | null) => void;
      };
    };
  }
}

interface TwitterTweetProps {
  tweetId: string
}

export function TwitterTweet({ tweetId }: TwitterTweetProps) {
  const tweetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    
    // Only append script once
    if (document.querySelectorAll('script[src="https://platform.twitter.com/widgets.js"]').length === 0) {
      document.body.appendChild(script)
    }
    
    // Run the Twitter widgets load function when the script loads
    script.onload = () => {
      if (window.twttr) {
        window.twttr.widgets.load(tweetRef.current)
      }
    }
    
    // If Twitter script is already loaded, just load this specific widget
    if (window.twttr) {
      window.twttr.widgets.load(tweetRef.current)
    }

    return () => {
      // Don't remove the script on cleanup as other components might use it
    }
  }, [tweetId])

  // Fallback content in case tweet doesn't load
  const fallbackTweet = (
    <div className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
      <div className="flex-shrink-0">
        <Image
          src="/images/AdamDorfx.jpg"
          alt="Adam Dorfx"
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <p className="font-bold text-gray-900 mr-2">Adam Dorfx</p>
          <p className="text-gray-500 text-sm">@adamdorfx</p>
        </div>
        <p className="text-gray-800 mt-2">Just released the first version of Gistify - an AI-powered dashboard that scans all your newsletters to create a daily briefing custom-made for you.<br/><br/>No more endless scrolling through newsletters - get the gist of what matters in seconds!</p>
        <div className="mt-3 flex items-center text-gray-500 text-sm">
          <span>March 23, 2025</span>
        </div>
        <div className="mt-4 flex gap-4">
          <a 
            href="https://twitter.com/adamdorfx/status/1903663964904440234"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            View on Twitter
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Twitter embed (hidden while loading) */}
      <div 
        className="tweet-container w-full flex justify-center" 
        ref={tweetRef}
        style={{ minHeight: '200px' }}
      >
        <blockquote 
          className="twitter-tweet" 
          data-dnt="true"
          data-theme="light"
          data-align="center"
        >
          <a href={`https://twitter.com/adamdorfx/status/${tweetId}`}>Loading tweet...</a>
        </blockquote>
      </div>
      
      {/* Fallback tweet rendering */}
      <div className="fallback-tweet md:hidden">
        {fallbackTweet}
      </div>
    </>
  )
} 