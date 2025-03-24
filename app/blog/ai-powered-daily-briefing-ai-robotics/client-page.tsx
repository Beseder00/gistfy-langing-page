"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, CheckCircle } from "lucide-react"
import { TwitterTweet } from "@/components/twitter-tweet"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
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
    <div className="min-h-screen bg-[var(--background)]">
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
            <div className="ml-4">
              <ThemeToggle />
            </div>
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
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={blogPost.author.avatar}
              alt={blogPost.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-[var(--foreground)]">{blogPost.author.name}</h3>
            <p className="text-sm text-[var(--muted-foreground)]">{blogPost.author.role}</p>
          </div>
        </div>

        {/* Article body with proper styling for blog content */}
        <div className="prose prose-lg max-w-none blog-content dark:prose-invert prose-headings:text-[var(--foreground)] prose-p:text-[var(--foreground)] prose-strong:text-[var(--foreground)] prose-li:text-[var(--foreground)]">
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </div>

        {/* Share section */}
        <div className="border-t border-[var(--border)] mt-12 pt-8">
          <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button 
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blogPost.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="p-2 bg-[var(--muted-background)] rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              aria-label="Share on Twitter"
            >
              <svg className="h-5 w-5 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button 
              onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blogPost.title)}`, '_blank')}
              className="p-2 bg-[var(--muted-background)] rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <svg className="h-5 w-5 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
            <button 
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href)
                  alert('Link copied to clipboard!')
                }
              }}
              className="p-2 bg-[var(--muted-background)] rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              aria-label="Copy link"
            >
              <Share2 className="h-5 w-5 text-[var(--foreground)]" />
            </button>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 bg-[var(--card-background)] border border-[var(--border)] rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
            Get our latest AI insights and updates
          </h3>
          <p className="text-[var(--muted-foreground)] mb-6">
            Join our newsletter to stay up to date on features and releases.
          </p>

          {isSubmitted ? (
            <div className="flex items-center text-green-600 dark:text-green-500">
              <CheckCircle className="h-5 w-5 mr-2" />
              <p>Thanks for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[var(--background)]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {error && <p className="mt-1 text-red-600 text-sm">{error}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
} 