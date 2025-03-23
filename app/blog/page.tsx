"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Clock, ArrowRight } from "lucide-react"
import { Logo } from "@/components/logo"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    slug: "ai-powered-daily-briefing-ai-robotics",
    title: "Meet Gistify: Your AI-Powered Daily Briefing for AI and Robotics",
    excerpt: "Discover unexpected insights and emerging trends that human readers would miss—Gistify AI connects the dots across dozens of AI and robotics sources, revealing hidden patterns and opportunities.",
    image: "/images/Meet%20Gistify.png",
    date: "March 23, 2025",
    readTime: "8 min read",
    category: "App Updates"
  }
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for header
  if (typeof window !== 'undefined') {
    // Only add the event listener on the client side
    useState(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    })
  }

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-white">
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

      {/* Hero Section - Add padding-top to account for fixed header */}
      <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Discovering hidden patterns in AI and robotics that humans would miss—turning newsletter overwhelm into actionable intelligence that gives you an edge.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10 h-12 w-full max-w-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4 shadow-sm hover:shadow-md transition-all duration-300">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Read more
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 