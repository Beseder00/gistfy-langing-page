"use client"
import PostLaunchLanding from "@/components/post-launch-landing"

export const setActiveTab = (tab: string) => {
  // This function doesn't actually do anything, but it needs to exist
  // to satisfy the type checker.  The actual tab switching is handled
  // by the BeforeAfterSlider component.
  console.log(`Setting active tab to ${tab}`)
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <PostLaunchLanding />
    </main>
  )
}

