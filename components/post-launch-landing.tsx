"use client"

import { ArrowRight, Check, Filter, Zap, Share2, Layers, Laptop, Tablet, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { Logo } from "./logo"

export default function PostLaunchLanding() {
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <div className="bg-[#F0ECE3]">
      {/* Header */}
      <header className="bg-[#0A6E6C] text-white p-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center">
          <a href="#features" className="ml-6 hover:text-[#FF6F61] transition-colors">
            Features
          </a>
          <a href="#pricing" className="ml-6 hover:text-[#FF6F61] transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="ml-6 hover:text-[#FF6F61] transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="ml-6 hover:text-[#FF6F61] transition-colors">
            Contact
          </a>
          <Button className="ml-6 bg-[#FF6F61] hover:bg-[#FF6F61]/90" onClick={() => setShowLoginModal(true)}>
            Login
          </Button>
        </nav>
        <button className="md:hidden text-white">
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
            className="text-[#FF6F61]"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#FF6F61]"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#0A6E6C]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block bg-[#FF6F61]/10 text-[#FF6F61] px-4 py-1 rounded-full text-sm font-medium mb-4">
            Now Available
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A6E6C] mb-4 leading-tight">
            Reclaim Your Mornings. <span className="text-[#FF6F61]">Stop Drowning in Newsletters</span>
          </h2>
          <p className="text-[#0A6E6C] text-lg mb-8 max-w-2xl mx-auto">
            For high-performing professionals who demand efficiency. Our AI scans 30+ newsletters across AI, Product,
            and Robotics, saving you 5+ hours weekly while keeping you ahead of the curve.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Button className="bg-[#FF6F61] hover:bg-[#FF6F61]/90 text-white px-8 py-6 text-lg">
              Sign Up <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61]/10 px-8 py-6 text-lg"
              onClick={() => setShowLoginModal(true)}
            >
              Login
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-[#0A6E6C]">
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-[#FF6F61]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-[#FF6F61]" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-[#FF6F61]" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#FF6F61]/10 text-[#FF6F61] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Product
            </span>
            <h2 className="text-3xl font-bold text-[#0A6E6C] mb-4">How High Performers Stay Informed in Less Time</h2>
            <p className="text-[#0A6E6C] max-w-2xl mx-auto">
              See how we extract key insights from top newsletters, saving busy professionals 5+ hours weekly while
              delivering more value than traditional reading.
            </p>
          </div>

          <div className="bg-[#0A6E6C]/5 rounded-xl p-4 md:p-8 mb-8 hover:shadow-lg transition-shadow">
            <div className="aspect-[16/9] bg-[#0A6E6C]/10 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/images/Group 5 (4).png"
                alt="AI Content Dashboard"
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <Tabs defaultValue="desktop" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-[#0A6E6C]/10">
                <TabsTrigger
                  value="desktop"
                  className="data-[state=active]:bg-[#0A6E6C] data-[state=active]:text-white"
                >
                  <Laptop className="h-4 w-4 mr-2" />
                  Desktop
                </TabsTrigger>
                <TabsTrigger value="tablet" className="data-[state=active]:bg-[#0A6E6C] data-[state=active]:text-white">
                  <Tablet className="h-4 w-4 mr-2" />
                  Tablet
                </TabsTrigger>
                <TabsTrigger value="mobile" className="data-[state=active]:bg-[#0A6E6C] data-[state=active]:text-white">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Mobile
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="desktop" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A6E6C] mb-4">Powerful Desktop Experience</h3>
                  <p className="text-[#0A6E6C] mb-6">
                    Our desktop interface gives you the full power of AI curation with advanced filtering, organization,
                    and insights.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Multi-column layout for efficient content scanning",
                      "Advanced filtering and search capabilities",
                      "Keyboard shortcuts for power users",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 mr-3 text-[#FF6F61] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0A6E6C]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#0A6E6C]/5 p-4 rounded-xl">
                  <div className="aspect-[4/3] bg-[#0A6E6C]/10 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/Group 5 (4).png"
                      alt="Desktop Dashboard"
                      className="w-full h-auto hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tablet" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-[#0A6E6C]/5 p-4 rounded-xl">
                  <div className="aspect-[3/4] bg-[#0A6E6C]/10 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/Group 5 (4).png"
                      alt="Tablet Dashboard"
                      className="w-full h-auto hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-[#0A6E6C] mb-4">Optimized for Tablets</h3>
                  <p className="text-[#0A6E6C] mb-6">
                    Our tablet interface is designed for reading and organizing on the go, with touch-friendly controls
                    and responsive layouts.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Touch-optimized interface for easy navigation",
                      "Reading mode for distraction-free consumption",
                      "Swipe gestures for quick actions",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 mr-3 text-[#FF6F61] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0A6E6C]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A6E6C] mb-4">Mobile-First Experience</h3>
                  <p className="text-[#0A6E6C] mb-6">
                    Stay productive on the go with our mobile app, designed for quick reading and content management
                    from anywhere.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Streamlined interface for small screens",
                      "Push notifications for important insights",
                      "Quick sharing to social media and messaging apps",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 mr-3 text-[#FF6F61] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0A6E6C]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center bg-[#0A6E6C]/5 p-4 rounded-xl">
                  <div className="w-64 aspect-[9/16] bg-[#0A6E6C]/10 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/Group 5 (4).png"
                      alt="Mobile Dashboard"
                      className="w-full h-auto hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#FF6F61]/10 text-[#FF6F61] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-3xl font-bold text-[#0A6E6C] mb-4">Built for Time-Conscious Professionals</h2>
            <p className="text-[#0A6E6C] max-w-2xl mx-auto">
              Our AI-powered platform is designed for high performers who need to stay informed without sacrificing
              precious time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#0A6E6C]/10 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-[#FF6F61] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Filter className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A6E6C] mb-3">Smart Curation</h3>
              <p className="text-[#0A6E6C]">
                Filters 20+ newsletters daily, delivering only what matters based on your interests and priorities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#0A6E6C]/10 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-[#FF6F61] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A6E6C] mb-3">AI Insights</h3>
              <p className="text-[#0A6E6C]">
                Instant summaries, perspectives, and action items extracted from your newsletters by our advanced AI.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#0A6E6C]/10 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-[#FF6F61] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A6E6C] mb-3">Topic Tracking</h3>
              <p className="text-[#0A6E6C]">
                Stay updated with real-time notifications on topics that matter to you across all your newsletters.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#0A6E6C]/10 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-[#FF6F61] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Share2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A6E6C] mb-3">Cross-Platform Sharing</h3>
              <p className="text-[#0A6E6C]">
                Share insights via WhatsApp, Slack, or other platforms with your team or network in just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-4 bg-[#F0ECE3]" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#FF6F61]/10 text-[#FF6F61] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Pricing
            </span>
            <h2 className="text-3xl font-bold text-[#0A6E6C] mb-4">Choose Your Plan</h2>
            <p className="text-[#0A6E6C] max-w-2xl mx-auto">
              Simple, transparent pricing that scales with your needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border-2 border-[#FF6F61] rounded-xl flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#0A6E6C] text-center mb-2">Basic</h3>
              <p className="text-3xl font-bold text-[#0A6E6C] text-center mb-4">
                $9<span className="text-base font-normal">/month</span>
              </p>
              <p className="text-[#0A6E6C] text-center mb-6">
                Perfect for individuals who want to organize their newsletter subscriptions.
              </p>

              <ul className="mb-6 flex-grow space-y-3">
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>Process up to 10 newsletters</span>
                </li>
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>AI Radar for content filtering</span>
                </li>
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>Basic summaries</span>
                </li>
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>Read Later feature</span>
                </li>
              </ul>

              <Button className="bg-[#FF6F61] hover:bg-[#FF6F61]/90 text-white w-full mt-auto">Choose Basic</Button>
            </div>

            <div className="bg-white p-6 border-2 border-[#FF6F61] rounded-xl flex flex-col relative transform scale-105 shadow-lg">
              <div className="absolute top-0 right-0 bg-[#FF6F61] text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-[#0A6E6C] text-center mb-2">Pro</h3>
              <p className="text-3xl font-bold text-[#0A6E6C] text-center mb-4">
                $19<span className="text-base font-normal">/month</span>
              </p>
              <p className="text-[#0A6E6C] text-center mb-6">
                For professionals who need advanced features and deeper insights.
              </p>

              <ul className="mb-6 flex-grow space-y-3">
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>Process up to 25 newsletters</span>
                </li>
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>All Basic features</span>
                </li>
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>Advanced AI insights</span>
                </li>
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>Topic tracking</span>
                </li>
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>1 team connection</span>
                </li>
              </ul>

              <Button className="bg-[#FF6F61] hover:bg-[#FF6F61]/90 text-white w-full mt-auto">Choose Pro</Button>
            </div>

            <div className="bg-white p-6 border-2 border-[#FF6F61] rounded-xl flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#0A6E6C] text-center mb-2">Premium</h3>
              <p className="text-3xl font-bold text-[#0A6E6C] text-center mb-4">
                $29<span className="text-base font-normal">/month</span>
              </p>
              <p className="text-[#0A6E6C] text-center mb-6">
                For teams and power users who need the ultimate newsletter management solution.
              </p>

              <ul className="mb-6 flex-grow space-y-3">
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>Unlimited newsletters</span>
                </li>
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>All Pro features</span>
                </li>
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>Custom AI training</span>
                </li>
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>5 team connections</span>
                </li>
                <li className="flex items-center text-[#0A6E6C]">
                  <Check className="h-5 w-5 text-[#FF6F61] mr-2 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>

              <Button className="bg-[#FF6F61] hover:bg-[#FF6F61]/90 text-white w-full mt-auto">Choose Premium</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4" id="testimonials">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#FF6F61]/10 text-[#FF6F61] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-[#0A6E6C] mb-4">What Our Users Say</h2>
            <p className="text-[#0A6E6C] max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our users have to say about how our platform has transformed
              their newsletter experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director",
                quote:
                  "Gist Engine has completely transformed how I stay informed. I used to spend hours scanning newsletters, now I get the same insights in minutes.",
                image: "/images/Chamath Palihapitiya (2).png",
              },
              {
                name: "Michael Chen",
                role: "Product Manager",
                quote:
                  "The AI curation is incredibly accurate. It's like having a research assistant who knows exactly what matters to me.",
                image: "/images/Chamath Palihapitiya (1).png",
              },
              {
                name: "Emma Rodriguez",
                role: "Tech Entrepreneur",
                quote:
                  "As someone who follows 30+ newsletters, this tool is a game-changer. I'm more informed while spending less time reading.",
                image: "/images/Chamath Palihapitiya.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-[#0A6E6C]/10 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#0A6E6C]">{item.name}</p>
                    <p className="text-sm text-[#0A6E6C]/70">{item.role}</p>
                  </div>
                </div>
                <p className="text-[#0A6E6C] italic mb-4">"{item.quote}"</p>
                <div className="flex text-[#FF6F61]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-[#0A6E6C] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Reclaim Hours of Your Week?</h2>
          <p className="mb-6 text-white/90 max-w-xl mx-auto">
            Join thousands of high-performing professionals who've optimized their information intake. Start your 14-day
            free trial today and take back control of your time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <Button className="bg-[#FF6F61] hover:bg-[#FF6F61]/90 text-white px-8 py-6 text-lg">
              Start Your Free Trial
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => setShowLoginModal(true)}
            >
              Login
            </Button>
          </div>
          <p className="text-sm text-white/70">No credit card required. Cancel anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F0ECE3] text-[#0A6E6C] py-6 px-4" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-4">Gistify Content Curation Dashboard</h3>
              <p className="text-sm mb-4">
                Transforming how professionals consume newsletter content through AI-powered curation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#FF6F61] hover:text-[#0A6E6C] transition-colors">
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-[#FF6F61] hover:text-[#0A6E6C] transition-colors">
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
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-[#FF6F61]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-[#FF6F61]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-[#FF6F61]">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF6F61]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF6F61]">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-sm mb-2">Have questions? We're here to help.</p>
              <p className="text-sm mb-4">Email: support@gistify.com</p>
              <form className="flex gap-2">
                <Input type="email" placeholder="Your email" className="border-[#FF6F61] text-sm" />
                <Button className="bg-[#FF6F61] hover:bg-[#FF6F61]/90 text-white text-sm">Subscribe</Button>
              </form>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#0A6E6C]/10 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Gistify Content Curation Dashboard. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#F0ECE3] p-6 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#0A6E6C]">Login</h3>
              <button onClick={() => setShowLoginModal(false)} className="text-[#0A6E6C] hover:text-[#FF6F61]">
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
                  className="h-6 w-6"
                >
                  <line x1="18" x2="6" y1="6" y2="18" />
                  <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
              </button>
            </div>
            <Input type="email" placeholder="Email" className="border-[#FF6F61] mb-4" />
            <Input type="password" placeholder="Password" className="border-[#FF6F61] mb-4" />
            <Button className="bg-[#FF6F61] hover:bg-[#FF6F61]/90 text-white w-full mb-4">Login</Button>
            <div className="text-center">
              <a href="#" className="text-[#FF6F61] hover:underline">
                Forgot Password?
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="text-[#FF6F61] hover:underline">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

