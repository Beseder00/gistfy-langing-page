"use client"

import { useState } from "react"
import { Clock, FilterIcon, Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DashboardHeader() {
  // Add state for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0F172A] flex items-center px-4 relative">
      <div className="flex-1 flex items-center gap-4">
        {/* Hamburger Menu (Mobile) - Add onClick handler */}
        <button
          className="md:hidden text-slate-500 dark:text-slate-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-[#0F172A] shadow-md z-50 md:hidden">
            <nav className="py-2">
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    AI Radar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Scan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Read Later
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Search */}
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            type="search"
            placeholder="Search content..."
            className="pl-10 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
          />
        </div>

        {/* AI Button */}
        <Button className="gap-2">
          <Sparkles className="h-4 w-4" />
          Ask AI
        </Button>
      </div>

      <div className="flex items-center gap-4">
        {/* Metrics */}
        <Button variant="outline" className="gap-2 hidden sm:flex">
          <FilterIcon className="h-4 w-4" />
          Filtering Breakdown
        </Button>

        <Button variant="outline" className="gap-2 hidden sm:flex">
          <Clock className="h-4 w-4" />
          24.5 Hours Saved
        </Button>
      </div>
    </header>
  )
}

