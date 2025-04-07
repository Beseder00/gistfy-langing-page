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

  const handleSubmit = () => {
    alert(`Thanks for joining our waitlist with ${email}! We'll be in touch soon.`)
    setEmail("")
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
        font-size: min(2.5rem, 10vw) !important;
        line-height: 1.1 !important;
      }
      .hero-title-text > span {
        display: block;
        line-height: 1.15 !important;
        margin: 0 !important;
        padding: 0.1em 0 !important;
      }
      .hero-title-text > span:first-child {
        margin-bottom: 0.2em !important;
      }
    }
    
    /* Medium screen title refinements */
    @media (min-width: 475px) and (max-width: 767px) {
      .hero-title-text {
        font-size: min(3.2rem, 8vw) !important;
        line-height: 1.15 !important;
      }
    }
    
    /* Large screen title enhancements */
    @media (min-width: 1024px) {
      .hero-title-text {
        letter-spacing: -0.02em;
      }
    }
  `

  if (isLoading) {
    return (
      <div className="bg-[#19b8a6] min-h-screen flex items-center justify-center">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(25,160,140,0.95)] py-3">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <div className="flex-1 flex items-center">
              <span className="text-white text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 bg-[#004d41]/30 px-3 py-1 rounded-lg shadow-sm">
                <BarChart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#ffb347]" />
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
          }
          
          ${scrollbarHideStyles}
        `}
      </style>
      <main className="bg-[var(--background)] min-h-screen">
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
                <span className="text-white tracking-wide">VibeIndex</span>
              </span>
            </div>
            <nav className="flex items-center justify-end flex-1">
              <a
                href="#insights"
                className="ml-2 sm:ml-3 md:ml-6 text-xs sm:text-sm font-medium text-[var(--header-text)] hover:text-[#ffb347] transition-colors"
              >
                Insights
              </a>
              <a
                href="#sources"
                className="ml-2 sm:ml-3 md:ml-6 text-xs sm:text-sm font-medium text-[var(--header-text)] hover:text-[#ffb347] transition-colors"
              >
                Sources
              </a>
              <a
                href="#features"
                className="ml-2 sm:ml-3 md:ml-6 text-xs sm:text-sm font-medium text-[var(--header-text)] hover:text-[#ffb347] transition-colors"
              >
                Features
              </a>
              <div className="ml-3 md:ml-6">
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
          countdown={countdown}
        />
      </main>
    </>
  )
}

