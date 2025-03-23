"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, FileText } from "lucide-react"
import { TwitterTweet } from "@/components/twitter-tweet"
import "./blog-post.css" // Add CSS for better blog formatting

// Sample blog post data (in a real app, this would come from an API or CMS)
const blogPost = {
  id: 1,
  title: "Meet Gistify: Your AI-Powered Daily Briefing for AI and Robotics",
  content: `
    <p>Imagine starting your day with a clear, concise briefing on the latest in AI and robotics—without the hassle of digging through your inbox packed with newsletters like AI Breakfast, Ben's Bites, or The Rundown AI. That's where Gistify comes in. Designed for high-productivity individuals like you, Gistify is your personal AI assistant, scanning your email inbox, analyzing newsletters, and summarizing the most important updates in seconds. Today, we're excited to introduce you to Gistify and show you how it's revolutionizing the way elite operators stay informed.</p>

    <h2>What is Gistify?</h2>
    <p>Gistify is an innovative app that harnesses artificial intelligence to deliver daily briefings tailored to your interests in AI and robotics. Whether you're a tech executive, researcher, or enthusiast, Gistify saves you time by diving into your inbox—think TLDR AI, Superhuman, or Mindstream—and pulling out the key stories from the newsletters you already receive. No more endless scrolling or information overload. With Gistify, you get the gist, instantly.</p>
    
    <p>Gistify combines cutting-edge AI with a sleek, user-friendly interface to keep you ahead of the curve. But what makes it truly special? Let's dive into how it works and why it's a game-changer.</p>

    <h2>How Gistify Works: A Quick Tutorial</h2>
    <p>Getting started with Gistify is effortless—just connect your inbox and let the AI do the rest. Here's how it transforms your daily routine:</p>
    <ol>
      <li><strong>Connect Your Inbox:</strong> Log in to the Gistify dashboard and link your email account. Gistify automatically detects newsletters like AI Breakfast at 8:32 AM or Ben's Bites at 9:05 AM, no manual selection needed.</li>
      <li><strong>AI-Powered Scanning:</strong> Gistify's Gist Engine springs into action, analyzing every newsletter in your inbox—whether it's The Rundown AI's ASI roadmap at 9:45 AM or Superhuman's robotics drop at 11:30 AM. In seconds, it identifies key stories, prioritizes insights, and filters out the noise—no human could process this volume so fast.</li>
      <li><strong>Get Your Briefing:</strong> Each day, you receive a concise, AI-generated summary on your dashboard. It's not just a recap—it's a smart analysis with punchy insights, deep links to original sources, and options to bookmark key points for later.</li>
    </ol>

    <p>Take a look at the dashboard in action:</p>
    <figure>
      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-21%20at%2020.01.33-PpJeMAxEurqCq18tJySyqKqaIC40p5.png" alt="Gistify Dashboard Screenshot" style="width:100%;height:auto;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      <figcaption style="text-align:center;margin-top:8px;color:#6b7280;font-size:0.9em;">A glimpse of your daily briefing—clean, concise, and packed with value from your inbox.</figcaption>
    </figure>

    <p>From there, explore features like Smart Bookmarking to save insights effortlessly—say, a highlight from AI Valley—or Deep Linking to jump straight to the sources that matter, like FutureTools' AI hardware updates. It's all designed to keep you informed without slowing you down.</p>

    <h2>Why Gistify Stands Out</h2>
    <p>Gistify isn't just another news tool—it's a productivity powerhouse. Here's what sets it apart:</p>
    <ul>
      <li><strong>Ultra-Concise Summaries:</strong> Our AI condenses sprawling newsletters like Chamath Weekly into short, impactful insights. Think of it as your executive brief, ready in moments.</li>
      <li><strong>AI-Driven Perspectives:</strong> Beyond summaries, Gistify uncovers key arguments and counterpoints—perfect for dissecting Department of Product's take on Gemini powers or TAAFT's AI espionage warnings.</li>
      <li><strong>Time Savings:</strong> "Gistify cut my reading time by 80%," says Jane, a tech executive and early adopter. "I stay on top of AI trends without drowning in emails from Lenny's Newsletter or Product Hunt Daily."</li>
    </ul>

    <p>Jane's story isn't unique. Elite operators worldwide are turning to Gistify to streamline their workflows and stay ahead in fast-moving fields like AI and robotics.</p>

    <h2>Real Impact: A User's Perspective</h2>
    <p>Take Mark, a robotics researcher: "Before Gistify, I spent hours scanning my inbox for newsletters like Mindstream's robotics updates or The Weekly Kaitchup's model breakthroughs. Now, Gistify pulls it all together into a daily briefing that's spot-on—plus, I can bookmark insights for my projects. It's like having a research assistant who never sleeps."</p>

    <p>Mark's experience highlights Gistify's real-world value. By letting AI tackle your inbox, you free up time for what matters—whether that's strategizing, innovating, or simply enjoying your morning coffee.</p>

    <h2>Try Gistify Today</h2>
    <p>Ready to transform how you stay informed? Sign up today, connect your inbox, and experience the power of AI-driven briefings tailored to AI and robotics, drawn straight from newsletters like AI Breakfast, Ben's Bites, and The Rundown AI. No fluff, no overwhelm—just the insights you need, when you need them.</p>

    <p>Have questions or feedback? Follow <a href="https://twitter.com/adamdorfx" style="color:#3b82f6;text-decoration:underline;">@adamdorfx</a> on Twitter for updates and to share your experience with Gistify.</p>

    <div style="background-color:#f3f4f6;border-radius:8px;padding:16px;margin-top:24px;">
      <p style="font-weight:bold;margin-bottom:8px;">Key Takeaways:</p>
      <p>Gistify scans your inbox, delivers AI-powered daily briefings, and saves you time with smart features. Join the high-productivity revolution now.</p>
    </div>
  `,
  image: "/images/Meet Gistify.png",
  date: "March 23, 2025",
  readTime: "8 min read",
  category: "App Updates",
  author: {
    name: "Adam Dorfx",
    role: "Founder, Gistify AI",
    avatar: "/images/AdamDorfx.jpg"
  }
}

export default function BlogPost() {
  const params = useParams()
  const postId = params.id

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[450px] md:h-[550px]">
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors border border-white/30 rounded-full px-4 py-1 text-sm hover:border-white/60"
            >
              <ArrowLeft className="h-3.5 w-3.5 mr-2" />
              Back to Blog
            </Link>
            <div className="space-y-4">
              <span className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4 shadow-sm">
                {blogPost.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {blogPost.title}
              </h1>
              <div className="flex items-center gap-8 text-white/90">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {blogPost.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {blogPost.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 bg-white -mt-12 rounded-t-3xl shadow-sm">
        {/* Author Info */}
        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
          <div className="relative h-14 w-14 rounded-full overflow-hidden shadow-md border-2 border-white">
            <Image
              src={blogPost.author.avatar}
              alt={blogPost.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{blogPost.author.name}</h3>
            <p className="text-gray-600 text-sm">{blogPost.author.role}</p>
          </div>
          <div className="ml-auto">
            <a 
              href={`https://twitter.com/adamdorfx`} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              <svg className="h-5 w-5 mr-1.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              Follow
            </a>
          </div>
        </div>

        {/* Article Content */}
        <article 
          className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-gray-900 prose-headings:mt-8 prose-headings:mb-4 prose-p:my-4 prose-img:my-8 prose-ul:my-6 prose-ol:my-6"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
        
        {/* Tweet from Author */}
        <div className="my-14 pt-10 pb-10 border-t border-b border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">Author</h3>
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <TwitterTweet tweetId="1903663964904440234" />
          </div>
        </div>

        {/* Share Button */}
        <div className="flex items-center justify-between gap-4 mt-14">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: blogPost.title,
                  text: "Check out this article about Gistify!",
                  url: window.location.href,
                })
              }
            }}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <Share2 className="h-5 w-5" />
            Share
          </button>
          <Link 
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-1.5" />
            All articles
          </Link>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-gray-50 py-16 mt-16 -mx-4 sm:-mx-6 md:-mx-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay updated with the latest insights</h3>
            <p className="text-gray-600 mb-6">Subscribe to our newsletter for updates on AI, productivity, and technology.</p>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 