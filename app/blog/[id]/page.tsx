"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

// Map of ID to slug for redirects
const idToSlugMap: Record<string, string> = {
  "1": "ai-powered-daily-briefing-ai-robotics"
}

export default function BlogPostRedirect() {
  const params = useParams()
  const router = useRouter()
  const postId = params.id as string

  useEffect(() => {
    // Get slug from ID
    const slug = idToSlugMap[postId]
    
    if (slug) {
      // Redirect to slug-based URL
      router.replace(`/blog/${slug}`)
    } else {
      // Redirect to blog index if ID not found
      router.replace('/blog')
    }
  }, [postId, router])

  // Return null or loading state while redirect happens
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  )
} 