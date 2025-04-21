"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Clock, ArrowRight, Eye } from "lucide-react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { blogPosts } from "@/data/blog-posts"
import { BlogPost } from "@/types/blog"
import { Skeleton } from "@/components/ui/skeleton"

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [loading, setLoading] = useState(true)
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [showDrafts, setShowDrafts] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false)
      setFilteredPosts(blogPosts)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const filtered = blogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesSearch && (showDrafts || !post.isDraft)
    })
    setFilteredPosts(filtered)
  }, [searchQuery, showDrafts])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--muted-background)] to-[var(--card-background)]">
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

      {/* Hero Section - Add padding-top to account for fixed header */}
      <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-[var(--header-text)] max-w-2xl">
            Discovering hidden patterns in AI and robotics that humans would miss—turning newsletter overwhelm into actionable intelligence that gives you an edge.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className={`sticky top-0 z-10 bg-white dark:bg-gray-900 py-4 transition-shadow ${scrolled ? "shadow-md" : ""}`}>
          <div className="flex items-center gap-4 max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowDrafts(!showDrafts)}
              className={`${showDrafts ? 'bg-blue-100 text-blue-600' : ''}`}
              title={showDrafts ? "Hide drafts" : "Show drafts"}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <div className="flex gap-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            ))
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.id}
                className={`group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  post.isDraft ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  {post.isDraft && (
                    <div className="absolute top-2 right-2 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded">
                      Draft
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No blog posts found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 