"use client"

import type React from "react"

import { CheckCircle2, Mail, ChevronRight, Users, Shield, Sparkles, X, ArrowRight, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Logo } from "./logo"
import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Hero } from "./hero"

// Add this after the imports
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }

  /* Small screen title adjustments */
  @media (max-width: 474px) {
    .hero-title-text {
      font-size: min(2.5rem, 11vw) !important;
      line-height: 1.1 !important;
    }
  }
`

export default function PreLaunchLandingDuplicate() {
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
        {`
          :root {
            --background: #19b8a6;
            --card-background: #ffae44;
            --header-gradient-start: rgba(25, 160, 140, 0.95);
            --header-text: #ffffff;
            --muted-foreground: #004d41;
            --primary: #ff8a20;
            --primary-hover: #e67400;
            --text-primary: #004d41;
            --text-secondary: #ffffff;
          }
          
          ${scrollbarHideStyles}
        `}
      </style>
      <div className="bg-[var(--background)] min-h-screen">
        {/* Header - VIBE INDEX */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-[var(--header-gradient-start)] py-2 shadow-md" : "bg-[var(--header-gradient-start)] py-3"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <div className="flex-1 flex items-center">
              <span className="text-[var(--text-secondary)] text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 bg-[#004d41]/30 px-3 py-1 rounded-lg shadow-sm">
                <BarChart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#ffb347]" />
                <span className="text-[#fffadc] tracking-wide">VibeIndex</span>
              </span>
            </div>
            <nav className="flex items-center justify-end flex-1">
              <div className="ml-3 md:ml-6">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section - Using the modular Hero component */}
        <Hero 
          email={email}
          setEmail={setEmail}
          onSubmit={openEmailPopup}
        />
      </div>
    </>
  )
} 