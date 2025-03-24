"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { DashboardMockup } from "./dashboard-mockup"
import { FeatureCard } from "./feature-card"
import { styles } from "@/styles/command-center-styles"
import { commandCenterData } from "@/data/command-center-data"
import { SectionHeader } from "./section-header"
import { Button } from "@/components/ui/button"

export function CommandCenter() {
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
    <section className="relative">
      <div className="py-8 md:py-12 px-4 bg-gradient-to-b from-[var(--muted-background)] to-[var(--card-background)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <SectionHeader
              sectionTitle={commandCenterData.sectionTitle}
              heading={commandCenterData.heading}
              subtitle={commandCenterData.subtitle}
            />
          </div>

          {/* Dashboard Mockup and Features Container */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
            {/* Dashboard Mockup */}
            <div className="w-full lg:w-[55%] xl:w-[60%]">
              <DashboardMockup
                url={commandCenterData.dashboard.url}
                imageSrc={commandCenterData.dashboard.imageSrc}
                imageAlt={commandCenterData.dashboard.imageAlt}
              />
            </div>

            {/* Feature Cards */}
            <div className="w-full lg:w-[40%] space-y-3">
              {commandCenterData.featureCards.map((card) => (
                <FeatureCard
                  key={card.id}
                  icon={card.icon}
                  iconBgColor={card.iconBgColor}
                  iconColor={card.iconColor}
                  title={card.title}
                  description={card.description}
                  progressColor={card.progressColor}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 flex justify-center">
            <Button
              onClick={() => {
                // Find the waitlist form element by ID and scroll to it
                const waitlistForm = document.getElementById("waitlist-form");
                if (waitlistForm) {
                  waitlistForm.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4F46E5] hover:from-[#2563EB] hover:via-[#4F46E5] hover:to-[#4338CA] text-white font-bold px-10 py-5 rounded-2xl text-xl tracking-wide shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_15px_60px_rgba(59,130,246,0.6)] transition-all duration-500 ease-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:ring-offset-2 active:scale-[0.98] border border-white/10 overflow-hidden"
              aria-label="Try Gistify Dashboard - Click to explore our time-saving features"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out -z-10"></div>
              
              {/* Moving light effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent skew-x-[-20deg] transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out -z-5"></div>
              
              {/* Icon with animation */}
              <Sparkles className="w-6 h-6 text-blue-100 transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-12" />
              
              {/* Text with underline animation */}
              <span className="relative font-extrabold">
                Try Gistify Dashboard
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-blue-100 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
              </span>
              
              {/* Arrow with animation */}
              <ArrowRight className="w-6 h-6 text-blue-100 transition-transform duration-500 ease-out group-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

