"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'

// TypeScript declaration for Twitter widgets
declare global {
  interface Window {
    twttr: {
      widgets: {
        load: (element?: HTMLElement) => Promise<void>;
        createTweet: (tweetId: string, element: HTMLElement, options?: any) => Promise<HTMLElement>;
      };
    };
  }
}

interface TwitterTweetProps {
  tweetId: string
}

export function TwitterTweet({ tweetId }: TwitterTweetProps) {
  const tweetContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Twitter widget JS
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.id = 'twitter-widget-js'
    
    // Create tweet embed
    if (tweetContainerRef.current) {
      tweetContainerRef.current.innerHTML = `
        <blockquote class="twitter-tweet" data-dnt="true">
          <a href="https://twitter.com/adamdorfx/status/${tweetId}"></a>
        </blockquote>
      `
    }
    
    // Only add script if it doesn't exist
    if (!document.getElementById('twitter-widget-js')) {
      document.body.appendChild(script)
      
      script.onload = () => {
        // When script loads, process any tweets
        if (window.twttr && tweetContainerRef.current) {
          window.twttr.widgets.load(tweetContainerRef.current)
        }
      }
    } else if (window.twttr && tweetContainerRef.current) {
      // If script already loaded, just load this tweet
      window.twttr.widgets.load(tweetContainerRef.current)
    }
    
    return () => {
      // Cleanup
      if (tweetContainerRef.current) {
        tweetContainerRef.current.innerHTML = ''
      }
    }
  }, [tweetId])

  return (
    <div className="w-full">
      {/* Tweet container - shown on all devices */}
      <div className="min-h-[250px]" ref={tweetContainerRef}></div>
    </div>
  )
} 