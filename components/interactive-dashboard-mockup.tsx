// Enhanced version with improved mockup and features presentation
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, X, CheckCircle2 } from "lucide-react"

export function InteractiveDashboardMockup() {
  const [showEmailPopup, setShowEmailPopup] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to a waitlist API
    fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`Thanks for joining our waitlist with ${email}! We'll be in touch soon.`)
        setEmail("")
        setShowEmailPopup(false)
      })
      .catch((error) => {
        console.error("Error submitting email:", error)
        alert("There was an error submitting your email. Please try again.")
      })
  }

  return (
    <section
      className="py-16 px-4 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden"
      id="command-center"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

        {/* Additional decorative elements */}
        <div className="absolute top-20 right-[15%] w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-[15%] w-16 h-16 bg-indigo-500/10 rounded-full blur-xl"></div>

        {/* Animated floating elements */}
        <div
          className="absolute top-[30%] right-[20%] w-8 h-8 bg-blue-400/20 rounded-full blur-sm animate-float"
          style={{ animationDuration: "15s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-[30%] left-[20%] w-6 h-6 bg-indigo-400/20 rounded-full blur-sm animate-float"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        ></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwQTZFNkMiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik02MCAwdjYwSDBWMGg2MHpNMCB2NjB2MEgzMHYzMHpNMCA2MGgzMFYzMEgwdjMwek0wIHY2MGgzMFYzMEgwdjMwek0zMCA2MGgzMFYzMEgzMHYzMHoiIGZpbGw9IiMwQTZFNkMiIGZpbGwtb3BhY2l0eT0iMC4wNCIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* Enhanced badge */}

          {/* Enhanced heading with decorative elements */}
          <div className="relative mb-12">
            {/* Background decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/5 rounded-full blur-xl hidden md:block"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-indigo-500/5 rounded-full blur-xl hidden md:block"></div>

            {/* Decorative accent */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 text-sm font-semibold border border-blue-100/50 shadow-sm">
                Command Center
              </span>
            </div>

            {/* Main heading with gradient and animation */}
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#1E3A8A] tracking-tight leading-none">
              <span className="inline-block relative">
                <span className="relative z-10">Meet Your New </span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200 opacity-70 -z-10 transform -rotate-1 rounded"></span>
              </span>
              <br className="md:hidden" />
              <span className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-transparent bg-clip-text">
                Command Center
              </span>
            </h2>

            {/* Enhanced divider with animation */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced subtitle with badge styling */}
            <div className="max-w-3xl mx-auto mb-16 relative">
              <p className="text-lg md:text-2xl text-[#334155] leading-relaxed font-medium">
                For <span className="text-blue-600 font-semibold">High-Productivity</span> Individuals
              </p>

              {/* Decorative dots */}
              <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 hidden lg:flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              </div>
              <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 hidden lg:flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup and Features - Side by Side with enhanced styling */}
          <div className="flex flex-col lg:flex-row gap-6 items-start mb-10">
            {/* ENHANCED MOCKUP with realistic browser and annotations */}
            <div className="lg:flex-[1.5] w-full max-w-3xl transform perspective-1000 rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-700">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 transform hover:scale-[1.02] transition-all duration-500 group">
                {/* Enhanced Browser Chrome with tabs */}
                <div className="bg-gradient-to-r from-slate-100 to-slate-50 p-2 rounded-t-lg border-b border-slate-200">
                  {/* Browser chrome spacing */}
                  <div className="h-2"></div>

                  {/* URL bar */}
                  <div className="flex items-center">
                    <div className="flex items-center space-x-1.5 mr-3">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                    </div>
                    <div className="flex-1 bg-white border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-500 flex items-center group-hover:border-blue-200 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 mr-2 text-blue-500"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <span className="flex-1">app.gistify.ai/dashboard</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 ml-2 text-slate-400"
                      >
                        <path d="M12 5v14M5 12h14"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Dashboard Image with annotations */}
                <div className="w-full relative overflow-hidden">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  {/* Dashboard image */}
                  <img
                    src="/images/dashboardmockup.png"
                    alt="Gistify AI Dashboard"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Browser status bar */}
                <div className="bg-slate-50 border-t border-slate-200 py-1 px-3 text-xs text-slate-500 flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                    Secure connection
                  </div>
                  <div>© 2025 Gistify</div>
                </div>
              </div>

              {/* Shadow/reflection effect */}
              <div className="h-4 bg-gradient-to-b from-black/10 to-transparent rounded-b-xl mx-5 blur-sm"></div>
            </div>

            {/* ENHANCED FEATURES LIST with cards */}
            <div className="lg:flex-1 w-full max-w-sm flex flex-col justify-between h-full">
              {/* Features cards with progress indicators */}
              <div className="space-y-3 h-full flex flex-col justify-between">
                {/* Feature 1 - AI Signals */}
                <div className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#EBF5FF] flex items-center justify-center mb-3 sm:mb-0 sm:mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0066FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-semibold text-slate-900 mb-1 text-base">Gist Engine</h4>
                      <p className="text-slate-600 text-xs mb-3">
                        Automatically reduce the noise and focus on what matters most.
                      </p>
                      <div className="w-full max-w-[200px] mx-auto sm:mx-0 bg-slate-100 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 2 - AI-Driven Arguments */}
                <div className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#E3FCEF] flex items-center justify-center mb-3 sm:mb-0 sm:mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#36B37E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                        <path d="M9 22h9a2 2 0 0 0 2-2v-7" />
                        <path d="M13 14h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-9" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="M9 15c-2.21 0-4 1.79-4 4" />
                        <circle cx="15" cy="16" r="2" />
                        <path d="m21 10-4 4-4-4" />
                      </svg>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-semibold text-slate-900 mb-1 text-base">Daily AI Meta-Analysis</h4>
                      <p className="text-slate-600 text-xs mb-3">
                        Get AI-generated insights across all your content sources in one daily summary.
                      </p>
                      <div className="w-full max-w-[200px] mx-auto sm:mx-0 bg-slate-100 rounded-full h-1.5">
                        <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 - Smart Content Bookmarking */}
                <div className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#FFEFEF] flex items-center justify-center mb-3 sm:mb-0 sm:mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FF5630"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                      </svg>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-semibold text-slate-900 mb-1 text-base">Smart Content Bookmarking</h4>
                      <p className="text-slate-600 text-xs mb-3">Easily organize content for easy review later.</p>
                      <div className="w-full max-w-[200px] mx-auto sm:mx-0 bg-slate-100 rounded-full h-1.5">
                        <div className="bg-red-500 h-1.5 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 4 - Deep Links */}
                <div className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#E6FFFA] flex items-center justify-center mb-3 sm:mb-0 sm:mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0CA5E9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-semibold text-slate-900 mb-1 text-base">Deep Links</h4>
                      <p className="text-slate-600 text-xs mb-3">
                        Save time and frustration. Deep Links instantly shows every important link from the story.
                      </p>
                      <div className="w-full max-w-[200px] mx-auto sm:mx-0 bg-slate-100 rounded-full h-1.5">
                        <div className="bg-cyan-500 h-1.5 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 4 - Daily AI Meta-Analysis */}
                <div className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#E6F9FF] flex items-center justify-center mb-3 sm:mb-0 sm:mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00B8D9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      </svg>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-semibold text-slate-900 mb-1 text-base">AI-Driven Arguments</h4>
                      <p className="text-slate-600 text-xs mb-3">
                        Get AI-generated insights and arguments to instantly see different perspectives.
                      </p>
                      <div className="w-full max-w-[200px] mx-auto sm:mx-0 bg-slate-100 rounded-full h-1.5">
                        <div className="bg-indigo-500 h-1.5 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Try Gistify Dashboard Button - Moved to center below both columns */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowEmailPopup(true)}
              className="mt-8 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] hover:from-[#2563EB] hover:to-[#4F46E5] text-white font-medium py-3.5 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <span>Try Gistify Dashboard</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Email Popup */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowEmailPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center justify-center mb-3">
              <span className="inline-flex items-center text-[#3B82F6] text-sm font-medium">
                <span className="mr-1">🎁</span> One-Time Offer
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1E3A8A] text-center mb-5">Get 60% Off at Launch</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-12 border-gray-300 rounded-lg w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 rounded-lg font-medium text-base h-12"
              >
                Get Early Access
              </Button>

              <div className="flex justify-center gap-x-6 text-xs text-gray-500 mt-4">
                <div className="flex items-center">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-[#3B82F6]" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-[#3B82F6]" />
                  <span>No credit card needed</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

