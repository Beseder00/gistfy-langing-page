"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { AIFilteredContent } from "@/components/ai-filtered-content"

export default function AIDashboard() {
  return (
    <div className="flex h-screen bg-[#F8FAFC] dark:bg-[#0F172A]">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />

        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-auto">
          <AIFilteredContent />
        </div>
      </div>
    </div>
  )
}

