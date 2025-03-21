"use client"

import { CommandCenter } from "./command-center"
import { Button } from "@/components/ui/button"
import { setActiveTab } from "@/app/page" // Assuming setActiveTab is defined in the page component

export function InteractiveDashboardMockup() {
  return (
    <>
      <CommandCenter />
      <Button
        className="mt-8 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-white font-medium px-8 py-6 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-400/20"
        onClick={() => setActiveTab("after")}
      >
        Unlock Hours in Your Day
      </Button>
    </>
  )
}

