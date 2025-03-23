"use client"

import type React from "react"

import { CheckCircle2, Mail, ChevronRight, Users, Shield, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Logo } from "./logo"
import { BeforeAfterSlider } from "./before-after-slider"
import { useState, useEffect } from "react"
import { InteractiveDashboardMockup } from "./interactive-dashboard-mockup"
import Image from "next/image"

// Add this after the imports
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`

export default function PreLaunchLanding() {
  // Existing code remains the same
  const [email, setEmail] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [newsletterCount, setNewsletterCount] = useState(5)
  const [countdown, setCountdown] = useState({
    days: 21,
    hours: 22,
    minutes: 37,
    seconds: 42,
  })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showEmailPopup, setShowEmailPopup] = useState(false)

  // Calculate metrics based on newsletter count
  const minutesPerNewsletter = 30
  const itemsPerNewsletter = 15

  const totalScanningTime = newsletterCount * minutesPerNewsletter
  const totalContentItems = newsletterCount * itemsPerNewsletter
  const gistifyTime = Math.max(5, Math.round(newsletterCount * 1)) // Minimum 5 minutes with Gistify
  const timeSaved = totalScanningTime - gistifyTime
  const timeReduction = Math.round((timeSaved / totalScanningTime) * 100)
  const weeklyHoursSaved = Math.round((timeSaved * 7) / 60)
  const monthlyHoursSaved = Math.round((timeSaved * 30) / 60)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Simulate countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      alert("Please enter a valid email address")
      return
    }

    try {
      console.log("Submitting email:", email)
      
      // Use the new API endpoint
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
      
      console.log("Response status:", response.status)
      const data = await response.json()
      console.log("Response data:", data)
      
      if (!response.ok) {
        throw new Error(data.message || "Error submitting email")
      }
      
      alert(`Thanks for joining our waitlist with ${email}! We'll be in touch soon.`)
      setEmail("")
      setShowEmailPopup(false)
    } catch (error) {
      console.error("Error submitting email:", error)
      alert("There was an error submitting your email. Please try again.")
    }
  }

  const handleSubmitTest = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@') || !email.includes('.')) {
      alert("Please enter a valid email address")
      return
    }

    try {
      console.log("Submitting test email:", email)
      
      const response = await fetch("/api/subscribe-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
      
      console.log("Test response status:", response.status)
      const data = await response.json()
      console.log("Test response data:", data)
      
      alert(`Test subscription successful with ${email}!`)
      setEmail("")
      setShowEmailPopup(false)
    } catch (error) {
      console.error("Error in test submission:", error)
      alert("There was an error in the test. Please check the console.")
    }
  }

  // Modify the CTA section button to open the popup
  const openEmailPopup = () => {
    setShowEmailPopup(true)
  }

  // Add this right before the return statement
  return (
    <>
      <style jsx global>
        {scrollbarHideStyles}
      </style>
      <div className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] min-h-screen">
        {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-[#0F172A]/95 backdrop-blur-md py-3" : "bg-gradient-to-r from-[#0F172A] to-[#1E293B] py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <div className="flex-1">
              <Logo />
            </div>
            <nav className="flex items-center justify-end flex-1">
              <a
                href="/blog"
                className="ml-3 md:ml-6 text-xs md:text-sm hover:text-[#60A5FA] transition-colors font-medium text-white/90"
              >
                Blog
              </a>
              <a
                href="#examples"
                className="ml-3 md:ml-6 text-xs md:text-sm hover:text-[#60A5FA] transition-colors font-medium text-white/90"
              >
                Examples
              </a>
              <a
                href="#features"
                className="ml-3 md:ml-6 text-xs md:text-sm hover:text-[#60A5FA] transition-colors font-medium text-white/90"
              >
                Features
              </a>
              <a
                href="#contact"
                className="ml-3 md:ml-6 text-xs md:text-sm hover:text-[#60A5FA] transition-colors font-medium text-white/90"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section with Email Overload Background Image */}
        <section className="pt-24 pb-20 px-4 relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://p7lrpwrygsvtwfmu.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-19%2015.22.50%20-%20A%20digital%20illustration%20of%20an%20overwhelming%20email%20inbox%20scene.%20A%20stressed-out%20person%20sits%20at%20a%20cluttered%20desk%2C%20surrounded%20by%20stacks%20of%20unread%20emails%2C%20no-RwzG2XeF571lisqK6GH05Asa0Lq5rW.webp"
              alt="Overwhelming email inbox"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay to mute the background image */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/85 to-[#F8FAFC]/95"></div>

            {/* Additional blur effects for depth */}
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#60A5FA]/20 blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#818CF8]/20 blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div id="waitlist-form" className="relative text-center flex flex-col items-center z-10 max-w-4xl mx-auto">
            <span className="inline-block mx-auto bg-gradient-to-r from-[#818CF8]/20 to-[#818CF8]/10 text-[#6366F1] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm">
              Coming Soon — Join the Waitlist
            </span>
            <h1 className="text-center text-4xl md:text-7xl font-bold mb-6 leading-tight text-shadow-sm">
              <span className="text-[#1E3A8A]">Drowning in Newsletters?</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#2563EB]">
                Reclaim
              </span>
              <span className="text-[#6366F1]"> Your Mornings.</span>
            </h1>
            <p className="text-[#334155] text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed font-light bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2">
              Our AI analyzes 30+ AI, Product, and Robotics Newsletters in your Inbox, Delivering You{" "}
              <span className="font-semibold text-[#3B82F6] animate-pulse-subtle relative">
                <span className="relative z-10">The Gist</span>
                <span className="absolute inset-0 bg-blue-100/50 rounded blur-sm -z-10"></span>
              </span>{" "}
              in Seconds!
            </p>

            {/* Countdown Timer - Moved Above */}
            <div className="flex justify-center gap-4 mb-10">
              {[
                { value: countdown.days, label: "Days" },
                { value: countdown.hours, label: "Hours" },
                { value: countdown.minutes, label: "Minutes" },
                { value: countdown.seconds, label: "Seconds" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-[#0F172A] text-white text-2xl font-bold w-14 h-14 rounded-md flex items-center justify-center shadow-lg">
                    {item.value < 10 ? `0${item.value}` : item.value}
                  </div>
                  <span className="text-[#64748B] mt-2 text-sm bg-white/80 px-2 rounded">{item.label}</span>
                  {index < 3 && (
                    <span className="hidden md:block text-[#0F172A] text-2xl font-bold mx-1 -mt-14">:</span>
                  )}
                </div>
              ))}
            </div>

            {/* Email Subscription - Larger Version */}
            <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 max-w-md w-full mx-auto mb-6 border border-blue-100">
              <div className="flex items-center justify-center mb-3">
                <span className="inline-flex items-center text-[#3B82F6] text-sm font-medium">
                  <span className="mr-1">🎁</span> One-Time Offer
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] text-center mb-5">Get 60% Off at Launch</h3>

              <form onSubmit={handleSubmit} className="mb-4">
                <div className="relative mb-3">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#94A3B8]" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 h-12 border-[#E2E8F0] rounded-lg w-full bg-white shadow-md focus:shadow-blue-300/50 focus:shadow-lg transition-shadow duration-1000 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 animate-pulse-subtle border-blue-200 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="button"
                  onClick={openEmailPopup}
                  className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white py-3 rounded-lg font-medium text-base h-12 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Early Access
                </Button>
              </form>

              <div className="flex justify-center gap-x-6 text-xs text-[#64748B]">
                <div className="flex items-center">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-[#3B82F6]" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-[#3B82F6]" />
                  <span>No credit card needed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Slider Section */}
        <section className="pt-8 md:pt-12 pb-16 px-4 bg-white" id="examples">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#1E3A8A] mt-2 mb-12 max-w-4xl mx-auto leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]">
                Increase Your Productivity <span className="font-extrabold text-[#F43F5E]">10x</span> by Delegating Your
                Newsletter Reading
              </span>
            </h2>
            {/* New Before/After Slider Component */}
            <BeforeAfterSlider />
          </div>
        </section>

        {/* How to Get Started Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden relative">
          {/* Background decorative elements */}
          <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-100/30 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
                Simple 3-Step Process
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
                How Gistify Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Getting started with Gistify is so fast—just link your inbox and let AI become your executive assistant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
              {/* Connection lines between steps (visible on desktop only) */}
              <div className="hidden md:block absolute top-24 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 z-0">
                {/* Empty div for the connecting line */}
              </div>
              
              {/* Step 1 */}
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-blue-100 relative z-10">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  1
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Connect Your Inbox</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Gistify instantly spots newsletters like <span className="font-semibold text-blue-700">AI Breakfast (8:32 AM)</span> or <span className="font-semibold text-blue-700">Ben's Bites (9:05 AM)</span>—no manual picking required.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-emerald-100 relative z-10">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="7" width="16" height="12" rx="2" />
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                    <circle cx="9" cy="13" r="1.5" fill="currentColor" />
                    <circle cx="15" cy="13" r="1.5" fill="currentColor" />
                    <path d="M9 18l3 1.5 3-1.5" />
                  </svg>
                </div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  2
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">AI-Powered Scanning</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Our Gist Engine dives in, scanning and parsing all items from every newsletter—from <span className="font-semibold text-emerald-700">The Rundown AI (9:45 AM)</span> to <span className="font-semibold text-emerald-700">Superhuman's robotics update (11:30 AM)</span>.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-purple-100 relative z-10">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  3
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Get Your Daily Briefing</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Wake up to a sleek, AI-crafted summary with <span className="font-semibold text-purple-700">hidden insights</span>, <span className="font-semibold text-purple-700">trend analysis</span>, <span className="font-semibold text-purple-700">direct source links</span>, and easy bookmarking.
                </p>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="mt-16 text-center">
              <a href="#waitlist-form" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                Start Saving Time
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-[#F8FAFC]">
          <InteractiveDashboardMockup />
        </section>

        {/* Improved Testimonials Section - Carousel */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F8FAFC]" id="testimonials">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              {/* Section label */}
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                <span>Real User Experiences</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">What Our Users Say</h2>

              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                Join professionals who've transformed how they consume newsletter content
              </p>
            </div>

            {/* Enhanced testimonial carousel */}
            <div className="max-w-4xl mx-auto relative">
              {/* Testimonial Carousel */}
              <div className="overflow-hidden">
                <div
                  className="transition-transform duration-500 ease-in-out flex snap-x snap-mandatory scrollbar-hide touch-pan-x"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {/* Testimonial 1 */}
                  <div className="w-full flex-shrink-0 px-4 pb-6 snap-center">
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-50 hover:shadow-xl transition-shadow duration-300">
                      {/* User info at the top */}
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2854%29.jpg-bX6WYUsbXqlDa9orpEa1kBP5Rx7Pla.jpeg"
                            alt="Noa Levi"
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-[#1E3A8A] text-lg">Noa Levi</p>
                          <p className="text-blue-600">Marketing Director</p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex mb-4 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-slate-700 text-lg leading-relaxed mb-6">
                        "I used to spend <span className="font-semibold text-blue-600">2 hours every morning</span>{" "}
                        going through newsletters. With Gist Engine, I get all the key insights in just 15 minutes. It's
                        like having a personal research assistant that knows exactly what matters to me."
                      </p>

                      {/* Quote decoration */}
                      <div className="absolute top-8 right-8 text-blue-100 opacity-30">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="w-full flex-shrink-0 px-4 pb-6 snap-center">
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-50 hover:shadow-xl transition-shadow duration-300">
                      {/* User info at the top */}
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2853%29.jpg-fxhapua2NOaUxbr3Dhh4pxG4nyWBD5.jpeg"
                            alt="Avi Cohen"
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-[#1E3A8A] text-lg">Avi Cohen</p>
                          <p className="text-blue-600">Product Manager</p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex mb-4 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-slate-700 text-lg leading-relaxed mb-6">
                        "The Gist Engine is a <span className="font-semibold text-blue-600">game-changer</span> for
                        staying informed. I'm getting better insights in less time, and the AI summaries help me
                        understand complex topics quickly. It's like having a team of analysts working for me 24/7."
                      </p>

                      {/* Quote decoration */}
                      <div className="absolute top-8 right-8 text-blue-100 opacity-30">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 3 (New) */}
                  <div className="w-full flex-shrink-0 px-4 pb-6 snap-center">
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-50 hover:shadow-xl transition-shadow duration-300">
                      {/* User info at the top */}
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%281%29.jpg-BWlPVbWiMOSwyNwcNtUpUW7FcJVaUh.jpeg"
                            alt="Tal Shapira"
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-[#1E3A8A] text-lg">Tal Shapira</p>
                          <p className="text-blue-600">Tech Entrepreneur</p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex mb-4 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-slate-700 text-lg leading-relaxed mb-6">
                        "As someone who subscribes to over{" "}
                        <span className="font-semibold text-blue-600">30 newsletters</span>, Gist Engine has been
                        revolutionary. It extracts exactly what I need to know and presents it in a way that saves me
                        hours each week. The ROI is incredible."
                      </p>

                      {/* Quote decoration */}
                      <div className="absolute top-8 right-8 text-blue-100 opacity-30">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced navigation buttons */}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev > 0 ? prev - 1 : 2))}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-5 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-blue-100 group"
                aria-label="Previous testimonial"
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
                  className="text-blue-600 group-hover:text-blue-800 transition-colors"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                onClick={() => setCurrentTestimonial((prev) => (prev < 2 ? prev + 1 : 0))}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-5 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-blue-100 group"
                aria-label="Next testimonial"
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
                  className="text-blue-600 group-hover:text-blue-800 transition-colors"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {/* Improved carousel indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? "bg-blue-600 w-8" : "bg-blue-200 hover:bg-blue-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Testimonial count indicator */}
              <div className="text-center mt-4 mb-8 text-sm text-slate-500">
                <span className="font-medium text-blue-600">{currentTestimonial + 1}</span> of <span>3</span>
              </div>

              {/* Mobile indicators */}
              <div className="md:hidden text-xs text-blue-600/80 mt-2 text-center font-medium">Swipe to navigate</div>
            </div>

            {/* Social proof - logos */}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white" id="faq">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-gradient-to-r from-[#818CF8]/20 to-[#818CF8]/10 text-[#6366F1] px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-sm">
                FAQ
                </span>
              <h2 className="text-4xl md:text-4xl font-bold text-[#1E3A8A] mb-4">Frequently Asked Questions</h2>
              <p className="text-[#334155] text-lg max-w-2xl mx-auto">
                Everything you need to know about our upcoming platform.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How exactly does Gist Engine save me time?",
                  answer:
                    "Gist Engine uses advanced AI to analyze your newsletters, extract only the most relevant information, and present it in a concise, scannable format. Our users report saving 5-7 hours weekly when following 20+ newsletters. The platform automatically filters out repetitive content, identifies key insights across multiple sources, and presents everything in a unified dashboard—eliminating the need to open dozens of emails or browser tabs.",
                },
                {
                  question: "What types of newsletters and content does Gist Engine support?",
                  answer:
                    "Gist Engine specializes in processing newsletters across three primary domains: AI/Technology, Product/Business, and Robotics/Innovation. We've fine-tuned our models specifically for these areas to provide the most accurate and relevant insights. Our system can handle both free and premium newsletters, text-heavy and visual content, and even extract valuable information from webinars or podcast summaries that arrive in newsletter format.",
                },
                {
                  question: "How is Gist Engine different from other content curation tools?",
                  answer:
                    "Unlike basic content aggregators or RSS readers, Gist Engine doesn't just collect—it comprehends. Our AI doesn't simply forward headlines; it understands context, identifies patterns across sources, extracts actionable insights, and presents different perspectives on the same topic. We also provide unique features like AI-Driven Perspectives that give you multiple viewpoints on complex topics, Deep Links that extract all important resources, and cross-newsletter topic tracking that alerts you when multiple sources are covering the same trend.",
                },
                {
                  question: "When will Gist Engine officially launch?",
                  answer:
                    "We're launching in approximately 3 weeks. By joining our waitlist today, you'll receive early access 48 hours before the public launch, a 60% discount on your first year's subscription, and priority onboarding support from our team. We're limiting our early access program to ensure a smooth experience, so we recommend securing your spot now.",
                },
                {
                  question: "Can I customize what content I see and how it's organized?",
                  answer:
                    "Gist Engine offers extensive customization options. You can prioritize specific newsletters, set up topic filters to focus on your interests (like 'AI ethics' or 'robotics startups'), create custom dashboards for different areas of interest, and even adjust the AI's filtering sensitivity. The more you use Gist Engine, the better it gets at understanding your preferences and delivering exactly what matters to you.",
                },
                {
                  question: "Is my newsletter data secure and private?",
                  answer:
                    "Security and privacy are our top priorities. We use enterprise-grade encryption (AES-256) for all data, maintain strict access controls, and never share your reading habits or personal information with third parties. Our AI processes your content without storing the original newsletters longer than necessary. You can delete your data at any time, and we comply with all major privacy regulations including GDPR and CCPA.",
                },
                {
                  question: "Do you offer a free plan or trial period?",
                  answer:
                    "Yes! We offer a 14-day free trial with full access to all premium features. After that, we have a limited free tier that allows you to process up to 5 newsletters. Our paid plans start at $9/month (with annual billing) and include additional features like AI-Driven Perspectives, unlimited newsletters, and team sharing capabilities. Early waitlist members receive a 60% discount on their first year.",
                },
                {
                  question: "How does the AI-Driven Perspectives feature work?",
                  answer:
                    "AI-Driven Perspectives analyzes content and generates multiple viewpoints on complex topics. For example, if you're reading about a new AI technology, it might present the optimistic business perspective, potential ethical concerns, and technical implementation challenges—all automatically generated based on comprehensive analysis. This helps you quickly understand different angles without having to research multiple sources yourself, making you better informed in less time.",
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-[#E2E8F0] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#3B82F6]/30"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-[#F8FAFC]/50 text-[#1E3A8A] font-medium text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-[#334155] leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section - Update the button to open the popup */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-4xl font-bold mb-6">Ready to Reclaim Hours of Your Week?</h2>
            <p className="mb-8 text-white/90 max-w-xl mx-auto text-lg leading-relaxed">
              Join our waitlist today. Designed for high-performing professionals who know the value of their time.
            </p>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 max-w-md mx-auto mb-6">
              <div className="flex items-center justify-center mb-3">
                <span className="inline-flex items-center text-white text-sm font-medium">
                  <span className="mr-1">🎁</span> One-Time Offer
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-5">Get 60% Off at Launch</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 h-12 border-white/30 bg-white/15 text-white rounded-lg w-full placeholder:text-white/80 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] focus:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-1000 focus:ring-2 focus:ring-white/30 hover:border-white/50 focus:border-white/70"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white hover:bg-white/90 text-[#1E40AF] py-3 rounded-lg font-medium text-base h-12 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Early Access
                </Button>

                <Button
                  type="button"
                  onClick={handleSubmitTest}
                  className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-3 rounded-lg font-medium text-base h-12 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Test Submission
                </Button>

                <div className="flex justify-center gap-x-6 text-xs text-white/80 mt-4">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-white" />
                    <span>Cancel anytime</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-white" />
                    <span>No credit card needed</span>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/90 mt-8">
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                <span>Early access</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Join 500+ early adopters</span>
              </div>
            </div>
          </div>
        </section>

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
              <h3 className="text-2xl font-bold text-[#0F172A] text-center mb-5">Get 60% Off at Launch</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 h-12 border-white/30 bg-white/15 text-white rounded-lg w-full placeholder:text-white/80 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] focus:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-1000 focus:ring-2 focus:ring-white/30 hover:border-white/50 focus:border-white/70"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white hover:bg-white/90 text-[#1E40AF] py-3 rounded-lg font-medium text-base h-12 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Early Access
                </Button>

                <Button
                  type="button"
                  onClick={handleSubmitTest}
                  className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-3 rounded-lg font-medium text-base h-12 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Test Submission
                </Button>

                <div className="flex justify-center gap-x-6 text-xs text-white/80 mt-4">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-white" />
                    <span>Cancel anytime</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-white" />
                    <span>No credit card needed</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-12 px-4" id="contact">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10 mb-10">
              <div>
                <Logo />
                <p className="text-sm mb-6 text-white/80 mt-4 max-w-xs leading-relaxed">
                  Transforming how professionals consume newsletter content through AI-powered curation.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/adamdorfx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B82F6] hover:text-[#6366F1] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-[#3B82F6] hover:text-[#6366F1] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                  >
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
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#examples"
                      className="text-white/80 hover:text-[#3B82F6] transition-colors flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" /> Examples
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="text-white/80 hover:text-[#3B82F6] transition-colors flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" /> Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="text-white/80 hover:text-[#3B82F6] transition-colors flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" /> FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  Have questions? We're here to help. Contact us via X (Twitter).
                </p>
                <form className="flex gap-2" onSubmit={handleSubmit}>
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="border-[#3B82F6] text-sm bg-white/15 focus:bg-white/20 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.1)] focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 focus:ring-1 focus:ring-white/30"
                  />
                  <Button type="submit" className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm rounded-full">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
              <div className="flex gap-6 mb-4 md:mb-0">
                <a href="#" className="text-white/60 hover:text-[#3B82F6] text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-[#3B82F6] text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-white/60 hover:text-[#3B82F6] text-sm">
                  Cookie Policy
                </a>
              </div>
              <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Gistify. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

