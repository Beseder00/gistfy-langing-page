"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { commandCenterData } from "@/data/command-center-data"
import { styles } from "@/styles/command-center-styles"
import { SectionHeader } from "./section-header"
import { DashboardMockup } from "./dashboard-mockup"
import { FeatureCard } from "./feature-card"
import { EmailPopup } from "./email-popup"

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
    <section className={styles.section} id="command-center">
      {/* Background elements - kept in main component for simplicity */}
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
        <div className="absolute top-20 right-[15%] w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-[15%] w-16 h-16 bg-indigo-500/10 rounded-full blur-xl"></div>
        <div
          className="absolute top-[30%] right-[20%] w-8 h-8 bg-blue-400/20 rounded-full blur-sm animate-float"
          style={{ animationDuration: "15s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-[30%] left-[20%] w-6 h-6 bg-indigo-400/20 rounded-full blur-sm animate-float"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwQTZFNkMiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik02MCAwdjYwSDBWMGg2MHpNMCB2NjB2MEgzMHYzMHpNMCA2MGgzMFYzMEgwdjMwek0wIHY2MGgzMFYzMEgwdjMwek0zMCA2MGgzMFYzMEgzMHYzMHoiIGZpbGw9IiMwQTZFNkMiIGZpbGwtb3BhY2l0eT0iMC4wNCIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Section Header Component */}
          <SectionHeader
            sectionTitle={commandCenterData.sectionTitle}
            heading={commandCenterData.heading}
            subtitle={commandCenterData.subtitle}
          />

          {/* Dashboard Mockup and Features */}
          <div className={styles.mockupAndFeaturesContainer}>
            {/* Dashboard Mockup Component */}
            <DashboardMockup
              url={commandCenterData.dashboard.url}
              imageSrc={commandCenterData.dashboard.imageSrc}
              imageAlt={commandCenterData.dashboard.imageAlt}
            />

            {/* Feature Cards */}
            <div className="lg:flex-1 w-full max-w-sm flex flex-col justify-between h-full">
              <div className={styles.featureCardsContainer}>
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
          </div>

          {/* CTA Button */}
          <div className={styles.ctaContainer}>
            <button onClick={() => setShowEmailPopup(true)} className={styles.ctaButton}>
              <span>{commandCenterData.ctaButton.text}</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Email Popup Component */}
      <EmailPopup
        isOpen={showEmailPopup}
        onClose={() => setShowEmailPopup(false)}
        onSubmit={handleSubmit}
        email={email}
        onEmailChange={(e) => setEmail(e.target.value)}
        title={commandCenterData.emailPopup.title}
        badge={commandCenterData.emailPopup.badge}
        buttonText={commandCenterData.emailPopup.buttonText}
        placeholder={commandCenterData.emailPopup.placeholder}
        benefits={commandCenterData.emailPopup.benefits}
      />
    </section>
  )
}

