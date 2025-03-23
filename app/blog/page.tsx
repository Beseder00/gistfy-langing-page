"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Clock, ArrowRight } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Meet Gistify: Your AI-Powered Daily Briefing for AI and Robotics",
    excerpt: "Imagine starting your day with a clear, concise briefing on the latest in AI and robotics—without the hassle of digging through your inbox packed with newsletters.",
    image: "/images/Meet Gistify.png",
    date: "March 23, 2025",
    readTime: "8 min read",
    category: "App Updates"
  }
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Insights, updates, and stories about AI, productivity, and the future of communication.
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
            <Link href={`/blog/${post.id}`} key={post.id}>
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