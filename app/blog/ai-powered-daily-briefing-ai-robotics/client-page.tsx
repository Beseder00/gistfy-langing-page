"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, CheckCircle } from "lucide-react"
import { TwitterTweet } from "@/components/twitter-tweet"
import { Logo } from "@/components/logo"
import "../[id]/blog-post.css" // Add CSS for better blog formatting

type BlogPost = {
  id: number;
  slug: string;
  title: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  }
}

interface ClientBlogPostProps {
  blogPost: BlogPost;
}

export function ClientBlogPost({ blogPost }: ClientBlogPostProps) {
  const [scrolled, setScrolled] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle email submission
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError("Please enter a valid email address")
      return
    }
    
    setError("")
    setIsSubmitting(true)
    
    try {
      // Using the same API endpoint as the main page
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong")
      }
      
      // Success!
      setIsSubmitted(true)
      setEmail("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
      console.error("Error submitting email:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0F172A]/95 backdrop-blur-md py-3" : "bg-gradient-to-r from-[#0F172A] to-[#1E293B] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex-1">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <nav className="flex items-center justify-end flex-1">
            <Link
              href="/blog"
              className="ml-3 md:ml-6 text-xs md:text-sm hover:text-[#60A5FA] transition-colors font-medium text-white/90"
            >
              Blog
            </Link>
            <a
              href="/#examples"
              className="ml-3 md:ml-6 text-xs md:text-sm hover:text-[#60A5FA] transition-colors font-medium text-white/90"
            >
              Examples
            </a>
            <a
              href="/#features"
              className="ml-3 md:ml-6 text-xs md:text-sm hover:text-[#60A5FA] transition-colors font-medium text-white/90"
            >
              Features
            </a>
            <a
              href="/#contact"
              className="ml-3 md:ml-6 text-xs md:text-sm hover:text-[#60A5FA] transition-colors font-medium text-white/90"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Adjust top padding to account for fixed header */}
      <div className="relative h-[450px] md:h-[550px] pt-16">
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
              width={56}
              height={56}
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
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-700">
                Adam Dorfx is the founder of Gistify AI, focused on developing intelligent solutions for newsletter management and content summarization. Follow his X account to see daily examples of Gistify in action.
              </p>
            </div>
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
        
        {/* Newsletter Signup - Modified for functionality */}
        <div className="bg-gray-50 py-16 mt-16 -mx-4 sm:-mx-6 md:-mx-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay updated with the latest insights</h3>
            <p className="text-gray-600 mb-6">Subscribe to our newsletter for updates on AI, productivity, and technology.</p>
            
            {isSubmitted ? (
              <div className="max-w-md mx-auto bg-green-50 border border-green-200 rounded-lg p-6 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <p className="text-green-700">Thank you for subscribing! We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className={`flex-1 rounded-lg border ${error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} px-4 py-2.5 focus:ring-2 focus:border-blue-500 outline-none`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                  <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm mt-2 text-left">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 