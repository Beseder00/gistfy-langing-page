"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Script from 'next/script'

interface TwitterEmbedProps {
  tweetId: string
}

export function TwitterEmbed({ tweetId }: TwitterEmbedProps) {
  const tweetRef = useRef<HTMLDivElement>(null)
  
  // Load the tweet when the Twitter script is ready
  const onTwitterScriptLoad = () => {
    if (tweetRef.current && window.twttr) {
      tweetRef.current.innerHTML = ''
      window.twttr.widgets.createTweet(
        tweetId, 
        tweetRef.current, 
        { theme: 'light' }
      )
    }
  }

  // Mobile fallback tweet content
  const fallbackTweet = (
    <div className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
      <div className="flex-shrink-0">
        <Image
          src="/images/AdamDorfx.jpg"
          alt="Adam Dorf"
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-1">
          <p className="font-medium text-gray-900">Adam Dorfx</p>
          <span className="text-gray-500">@adamdorfx</span>
        </div>
        <p className="text-gray-700 mt-1">
          Just released the first version of Gistify - an AI-powered dashboard that scans all your newsletters to create a daily briefing custom-made for you.
        </p>
        <p className="text-gray-700 mt-1">
          No more endless scrolling through newsletters - get the gist of what matters in seconds!
        </p>
        <p className="text-sm text-gray-500 mt-2">March 23, 2025</p>
      </div>
    </div>
  )

  return (
    <>
      <Script
        id="twitter-widgets-js"
        src="https://platform.twitter.com/widgets.js"
        onLoad={onTwitterScriptLoad}
        strategy="afterInteractive"
      />
      
      {/* Desktop version (hidden on mobile) */}
      <div className="hidden md:block min-h-[250px]">
        <div ref={tweetRef} className="twitter-tweet-container" />
      </div>
      
      {/* Mobile version (hidden on desktop) */}
      <div className="block md:hidden">
        {fallbackTweet}
      </div>
    </>
  )
} 