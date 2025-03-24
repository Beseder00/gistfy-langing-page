"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"
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
              className="h-12 px-6 bg-[#3B82F6] hover:bg-[#2563EB] dark:bg-[#60A5FA] dark:hover:bg-[#3B82F6] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap relative overflow-hidden group border-2 border-transparent hover:border-white/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              <Sparkles className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Try Gistify Dashboard</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

