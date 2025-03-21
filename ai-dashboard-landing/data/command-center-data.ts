import { Settings, Users, Bookmark, Link, FileText, Star } from "lucide-react"

export const commandCenterData = {
  sectionTitle: "Command Center",
  heading: {
    firstPart: "Meet Your New",
    highlightedPart: "Command Center",
  },
  subtitle: {
    text: "For",
    highlight: "High-Productivity",
    suffix: "Individuals",
  },
  dashboard: {
    url: "app.gistify.ai/dashboard",
    imageSrc: "https://gistfy.vercel.app/images/dashboardmockup.png",
    imageAlt: "Gistify AI Dashboard",
  },
  ctaButton: {
    text: "Try Gistify Dashboard",
  },
  emailPopup: {
    title: "Get 60% Off at Launch",
    badge: "One-Time Offer",
    buttonText: "Get Early Access",
    placeholder: "Enter your email",
    benefits: ["Cancel anytime", "No credit card needed"],
  },
  featureCards: [
    {
      id: "gist-engine",
      icon: Settings,
      iconBgColor: "bg-[#EBF5FF]",
      iconColor: "#0066FF",
      title: "Gist Engine – AI-Powered Bulk Parsing",
      description:
        "AI ingests dozens (or hundreds) of newsletters in seconds, isolating major stories instantly. No human could process this volume before.",
      progressColor: "bg-blue-500",
    },
    {
      id: "daily-ai",
      icon: Users,
      iconBgColor: "bg-[#E3FCEF]",
      iconColor: "#36B37E",
      title: "Daily AI Summary – AI-Driven Intelligence",
      description:
        "A single AI-powered briefing that doesn't just summarize—it reads, analyzes, prioritizes insights from newsletters in real time.",
      progressColor: "bg-green-500",
    },
    {
      id: "smart-bookmarking",
      icon: Bookmark,
      iconBgColor: "bg-[#F3E8FF]",
      iconColor: "#9B51E0",
      title: "Smart Bookmarking",
      description:
        "Save and organize key insights effortlessly. Never lose track of important information from newsletters.",
      progressColor: "bg-purple-500",
    },
    {
      id: "deep-links",
      icon: Link,
      iconBgColor: "bg-[#E6FFFA]",
      iconColor: "#0CA5E9",
      title: "Deep Linking",
      description: "Jump straight to key sources, references, and insights—no manual searching required.",
      progressColor: "bg-cyan-500",
    },
    {
      id: "ai-summaries",
      icon: FileText,
      iconBgColor: "bg-[#FFEFEF]",
      iconColor: "#FF5630",
      title: "Ultra-Concise AI Summaries",
      description: "AI condenses newsletters into short, punchy insights—so you get the gist instantly.",
      progressColor: "bg-red-500",
    },
    {
      id: "ai-arguments",
      icon: Star,
      iconBgColor: "bg-[#E6F9FF]",
      iconColor: "#00B8D9",
      title: "AI-Driven Arguments",
      description:
        "Instant AI-generated perspectives—uncover key arguments, counterpoints, and insights on major topics.",
      progressColor: "bg-indigo-500",
    },
  ],
}

