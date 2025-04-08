"use client"
import { useState, useEffect } from "react"
import { Hero } from "@/components/hero"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart } from "lucide-react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isHydrated, setIsHydrated] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 21,
    hours: 22,
    minutes: 37,
    seconds: 42,
  })

  // Handle hydration complete
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Handle loading state - make the timeout very short
  useEffect(() => {
    if (isHydrated) {
      // Set a minimal timeout to ensure styles are loaded
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [isHydrated]);

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

  const handleSubmit = async () => {
    // Basic validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      alert("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      // Submit to our API endpoint
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Error subscribing")
      }

      // Success!
      alert(`Thanks for joining the VibeIndex waitlist with ${email}! We'll be in touch soon.`)
      setEmail("")
    } catch (error) {
      console.error("Error subscribing:", error)
      alert("There was an error subscribing. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Add scroll hide styles
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
        font-size: min(3.8rem, 16vw) !important;
        line-height: 0.9 !important;
        width: 100% !important;
        padding: 0 !important;
        text-align: center !important;
        margin-bottom: 0 !important;
      }
      .hero-title-text > div {
        width: 100% !important;
        text-align: center !important;
      }
      .hero-title-text > div > div {
        line-height: 0.95 !important;
        margin: 0 auto !important;
        width: 100% !important;
        text-align: center !important;
      }
      .hero-title-text > div > div:first-child {
        margin-bottom: 0 !important;
      }
      .hero-title-text > div > div:nth-child(2) {
        margin-bottom: 0 !important;
        padding-bottom: 0 !important;
      }
      .hero-title-text > div > div:last-child {
        padding-bottom: 0 !important;
      }
      .hero-title-text > div > div > span {
        display: inline-block;
        text-align: center !important;
        line-height: 0.95 !important;
      }
      
      /* Mobile-specific spacing */
      .hero-title-text + div {
        margin-top: -1rem !important;
      }
      
      /* Space between subtitle and email signup */
      .hero-title-text ~ div:nth-child(3) {
        margin-bottom: 2.5rem !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      /* Subtitle text improvements */
      .hero-title-text ~ div:nth-child(3) p {
        font-size: 0.925rem !important;
        line-height: 1.5 !important;
        word-break: normal !important;
        max-width: 100% !important;
        padding: 0 !important;
      }

      /* Subtitle highlighted spans */
      .hero-title-text ~ div:nth-child(3) p span.inline-block {
        margin-left: 0.05rem !important;
        margin-right: 0.05rem !important;
        padding-left: 0.25rem !important;
        padding-right: 0.25rem !important;
        white-space: normal !important;
      }

      /* Make container wider */
      .hero-title-text ~ div:nth-child(3) > div > div {
        padding-left: 0.75rem !important;
        padding-right: 0.75rem !important;
        padding-top: 1rem !important;
        padding-bottom: 0.75rem !important;
      }

      /* Email form container */
      .hero-title-text ~ div:nth-child(4) > div {
        padding-left: 0.75rem !important;
        padding-right: 0.75rem !important;
      }
    }
    
    /* Medium screen title refinements */
    @media (min-width: 475px) and (max-width: 767px) {
      .hero-title-text {
        font-size: min(4.2rem, 14vw) !important;
        line-height: 0.95 !important;
        width: 100% !important;
        padding: 0 !important;
        text-align: center !important;
      }
      .hero-title-text > div {
        text-align: center !important;
      }
      .hero-title-text > div > div {
        text-align: center !important;
        line-height: 1 !important;
      }
      .hero-title-text > div > div:first-child {
        margin-bottom: 0 !important;
      }
      .hero-title-text > div > div:last-child {
        padding-bottom: 0.3em !important;
      }
    }
    
    /* Large screen title enhancements */
    @media (min-width: 1024px) {
      .hero-title-text {
        letter-spacing: -0.02em;
        font-size: 5.5rem !important;
      }
    }

    /* Extra large screen title */
    @media (min-width: 1280px) {
      .hero-title-text {
        font-size: 6rem !important;
      }
    }

    /* Animation delay utilities */
    .animate-delay-100 { animation-delay: 100ms; }
    .animate-delay-200 { animation-delay: 200ms; }
    .animate-delay-300 { animation-delay: 300ms; }
    .animate-delay-500 { animation-delay: 500ms; }
    .animate-delay-700 { animation-delay: 700ms; }
    .animate-delay-1000 { animation-delay: 1000ms; }

    /* Pulse animation for emphasis spans */
    @keyframes soft-pulse {
      0%, 100% { 
        transform: scale(1);
        opacity: 1;
      }
      50% { 
        transform: scale(1.02);
        opacity: 0.9;
      }
    }
    .animate-soft-pulse {
      animation: soft-pulse 3s ease-in-out infinite;
    }
    .animate-soft-pulse-delayed {
      animation: soft-pulse 3s ease-in-out infinite;
      animation-delay: 1.5s;
    }

    /* Sparkle animation for emoji */
    @keyframes sparkle {
      0%, 100% { 
        transform: scale(1) rotate(0deg); 
        opacity: 1;
      }
      25% { 
        transform: scale(1.2) rotate(5deg); 
        opacity: 0.8;
      }
      50% { 
        transform: scale(1) rotate(0deg); 
        opacity: 1;
      }
      75% { 
        transform: scale(1.1) rotate(-5deg); 
        opacity: 0.9;
      }
    }
    .animate-sparkle {
      display: inline-block;
      animation: sparkle 3s ease-in-out infinite;
      transform-origin: center;
    }
  `

  if (isLoading) {
    return (
      <div className="bg-[#19b8a6] min-h-screen flex items-center justify-center">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(25,160,140,0.95)] py-3">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <div className="flex-1 flex items-center">
              <span className="text-white text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 bg-[#004d41]/30 px-3 py-1 rounded-lg shadow-sm">
                <BarChart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#ffc06b]" />
                <span className="text-white tracking-wide">VibeIndex</span>
              </span>
            </div>
          </div>
        </header>
        <div className="animate-pulse">
          <span className="text-white text-2xl font-bold">Loading VibeIndex...</span>
        </div>
      </div>
    );
  }

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
            --orange-light: #ffbc60;
            --orange-bright: #ffc06b;
          }
          
          ${scrollbarHideStyles}
        `}
      </style>
      <main className="bg-[var(--background)] min-h-screen">
        {/* Header - VIBE INDEX */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-[var(--header-gradient-start)] py-2 shadow-md" : "bg-transparent py-3"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <div className="flex-1 flex items-center">
              <span className="text-[var(--text-secondary)] text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <BarChart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#ffc06b]" />
                <span className="text-white tracking-wide">VibeIndex</span>
              </span>
            </div>
            <nav className="flex items-center justify-end flex-1">
              <div className="hidden">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <Hero 
          email={email}
          setEmail={setEmail}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </main>
    </>
  )
}

