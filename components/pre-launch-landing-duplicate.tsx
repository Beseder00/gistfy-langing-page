"use client"

import type React from "react"

import { CheckCircle2, Mail, ChevronRight, Users, Shield, Sparkles, X, ArrowRight, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Logo } from "./logo"
import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Hero } from "./hero/Hero"

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
  const [coupon, setCoupon] = useState("")
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
    if (!email || !email.includes('@') || !email.includes('.')) {
      alert("Please enter a valid email address")
      return
    }
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, coupon }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || "Error submitting email")
      }
      alert(`Thanks for joining our waitlist with ${email}! We'll be in touch soon.`)
      setEmail("")
      setCoupon("")
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

  // Create a no-parameter submit handler for the Hero component
  const submitEmail = () => {
    if (!email || !email.includes('@') || !email.includes('.')) {
      alert("Please enter a valid email address");
      return;
    }
    fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, coupon }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          alert(`Thanks for joining our waitlist with ${email}! We'll be in touch soon.`);
          setEmail("");
          setCoupon("");
        } else {
          throw new Error("Error submitting email");
        }
      })
      .catch(error => {
        console.error("Error submitting email:", error);
        alert("There was an error submitting your email. Please try again.");
      });
  };

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
        {/* Header - VIBE TRENDS */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-[var(--header-gradient-start)] py-2 shadow-md" : "bg-[var(--header-gradient-start)] py-3"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <div className="flex-1 flex items-center">
              <span className="text-[var(--text-secondary)] text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 bg-[#004d41]/30 px-3 py-1 rounded-lg shadow-sm">
                <BarChart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#ffb347]" />
                <span className="text-[#fffadc] tracking-wide">iVibeTrends</span>
              </span>
            </div>
            <nav className="flex items-center justify-end flex-1">
              <a
                href="/about"
                className="ml-3 md:ml-6 px-4 py-2 rounded-lg bg-white/10 text-white font-semibold hover:bg-[#ffae44] hover:text-[#004d41] transition-colors duration-200"
              >
                About Us
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section - Using the modular Hero component */}
        <Hero 
          email={email}
          setEmail={setEmail}
          coupon={coupon}
          setCoupon={setCoupon}
          onSubmit={submitEmail}
          subtitle="Built for Vibe Coders, Marketers, and Solo Entrepreneurs building AI-first products. iVibe Trends surfaces early trends and helps you turn them into real-world solutions."
        />
      </div>

      {/* Email Popup Form */}
      {showEmailPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowEmailPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h3 className="text-xl font-bold mb-4 text-[#004d41]">Join the iVibeTrends Waitlist</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="popup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:ring-[#00a693] focus:border-[#00a693] focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="popup-coupon" className="block text-sm font-medium text-gray-700 mb-1">
                  Coupon code (optional)
                </label>
                <input
                  id="popup-coupon"
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Coupon code (optional)"
                  className="w-full pl-4 py-2 border border-gray-300 rounded-md focus:ring-[#00a693] focus:border-[#00a693] focus:outline-none"
                />
              </div>
              <div className="w-full text-left text-xs text-blue-700 bg-blue-50 rounded px-3 py-2 mb-2">
                🎉 <b>Special Offer:</b> Enter your coupon code above for lifetime access!
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#00b4a2] to-[#00a693] text-white font-medium py-2 px-4 rounded-md hover:shadow-md transition-all duration-200"
                >
                  Join Waitlist
                </button>
                
                <button
                  type="button"
                  onClick={handleSubmitTest}
                  className="flex-1 bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-md hover:bg-gray-200 transition-all duration-200"
                >
                  Test Submission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#004d41] to-[#00a693] text-white py-12 px-4" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <span className="text-2xl font-bold flex items-center gap-2">
                <BarChart className="h-7 w-7 text-[#ffae44]" />
                <span className="tracking-wide">Vibe Trends</span>
              </span>
              <p className="text-sm mb-6 text-white/80 mt-4 max-w-xs leading-relaxed">
                Built for Vibe Coders, Marketers & Solo Entrepreneurs. Vibe Trends accelerates how you think, decide, and build—by surfacing what actually matters.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://x.com/adamdorfx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ffae44] transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
                  aria-label="Twitter"
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
                  href="https://www.linkedin.com/in/adamdorfman2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ffae44] transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
                  aria-label="LinkedIn"
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
                    href="/about"
                    className="text-white/80 hover:text-[#ffae44] transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" /> About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Have questions? We're here to help. Contact us via X (Twitter).
              </p>
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-white text-sm bg-white/15 focus:bg-white/20 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)] focus:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 focus:ring-1 focus:ring-white/30"
                />
                <Input
                  type="text"
                  placeholder="Coupon code (optional)"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="border-white text-sm bg-white/15 focus:bg-white/20 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)] focus:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 focus:ring-1 focus:ring-white/30 pl-4"
                />
                <div className="w-full text-left text-xs text-yellow-200 bg-yellow-700/30 rounded px-3 py-2 mb-2">
                  🎉 <b>Special Offer:</b> Enter your coupon code above for lifetime access!
                </div>
                <Button type="submit" className="bg-[#ffae44] hover:bg-white text-[#004d41] text-sm rounded-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="/privacy-policy" className="text-white/60 hover:text-[#ffae44] text-sm">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-white/60 hover:text-[#ffae44] text-sm">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-white/60 hover:text-[#ffae44] text-sm">
                Cookie Policy
              </a>
            </div>
            <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Vibe Trends. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
} 