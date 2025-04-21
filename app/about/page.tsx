import React from "react";
import { User, Rocket, Repeat, Wrench } from "lucide-react";
import Head from "next/head";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f6fa] via-white to-[#e6f6fa] py-0">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "iVibe Index",
          "url": "https://vibeindex.vercel.app",
          "logo": "https://vibeindex.vercel.app/logo.jpeg",
          "description": "iVibe Index helps builders think sharper, decide faster, and build smarter by delivering personalized trend insights, strategic mental models, and execution-ready product ideas.",
          "founder": {
            "@type": "Person",
            "name": "Adam Dorfman"
          },
          "sameAs": [
            "https://x.com/adamdorfx",
            "https://www.linkedin.com/in/adamdorfman2/"
          ]
        }` }} />
      </Head>
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pt-8 pb-2 px-4">
        <div className="flex flex-col items-center gap-1 mb-2 bg-white/90 rounded-xl shadow-lg border border-[#b2e6e6] px-4 py-3 max-w-3xl w-full mx-auto">
          <span className="inline-flex items-center justify-center rounded-full bg-[#19b8a6]/15 p-2 shadow-sm mb-1">
            <User className="h-7 w-7 text-[#19b8a6]" />
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-[#00332a] tracking-tight text-center font-sans leading-tight mb-1">
            About Me & iVibe Index
          </h1>
          <p className="text-sm md:text-base text-[#1a2e2b] text-center max-w-2xl font-normal leading-snug">
            Iterative building. Strong feedback loops. Relentless focus on real-world problem solving.
          </p>
        </div>
      </section>

      {/* Card Content */}
      <main className="max-w-3xl mx-auto bg-white/95 rounded-xl shadow-lg px-4 py-8 md:px-8 md:py-10 border border-[#e0f7fa] text-[#1a2e2b]">
        {/* About Me - Two column on desktop */}
        <section className="mb-8 md:flex md:items-start md:gap-8">
          <div className="md:w-2/3">
            <h2 className="text-xl font-semibold mb-2 text-[#19b8a6] flex items-center gap-2 font-sans">
              <User className="h-5 w-5 text-[#19b8a6]" /> About Me
            </h2>
            <p>
              With 10+ years in product and market analysis, I've spent my career spotting signals before they become headlines.
            </p>
            <p className="mt-3">
              A few months ago, I helped two AI startups secure pre-seed funding by analyzing the best AI information sources and product releases to uncover early market signals. Both startups were so thrilled with the results that they offered me a small ownership stake — a win for them and for me.
            </p>
            <blockquote className="mt-4 mb-2 pl-4 border-l-4 border-[#19b8a6] bg-[#e6f6fa] text-[#004d41] italic rounded-r-lg">
              That success sparked a bigger idea:<br />
              <span className="font-semibold text-[#19b8a6]">What if I could build a dashboard that gave every Vibe Coder that same advantage?</span>
            </blockquote>
            <p className="mt-3">
              That's how <span className="font-bold text-[#00332a]">iVibe Index</span> was born.
            </p>
          </div>
          <div className="md:w-1/3 flex-shrink-0 flex flex-col justify-center items-center mt-6 md:mt-0">
            <img
              src="/images/AdamDorfX_Sarah.jpg"
              alt="Adam and Sarah"
              className="w-28 h-28 md:w-32 md:h-32 rounded-lg shadow border border-gray-200 object-cover mb-2"
            />
            <span className="text-xs text-[#64748B] text-center">This is me and my girlfriend Sarah.</span>
            <span className="inline-block mt-1 px-2 py-0.5 bg-[#19b8a6]/10 text-[#19b8a6] text-[11px] rounded-full font-semibold tracking-wide">Founder</span>
          </div>
        </section>
        <hr className="my-6 border-[#e0f7fa]" />
        {/* What is iVibe Index */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-[#19b8a6] flex items-center gap-2 font-sans">
            <Rocket className="h-5 w-5 text-[#19b8a6]" /> What is iVibe Index?
          </h2>
          <div className="bg-[#f6fcfd] rounded-lg p-4 mb-2">
            <p>
              iVibe Index is your daily strategic edge.<br />
              It's not a newsletter. It's a system — built to help you <b>think sharper, decide faster, and build smarter</b>.
            </p>
            <p className="mt-3">
              We scan <b>hundreds of leading AI sources and voices</b> to surface the most relevant capabilities, fast-moving trends, and friction signals — and translate them into <b>buildable, real-world solutions</b>.
            </p>
          </div>
          <p className="mt-3">
            But this isn't about hype. It's about helping you:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Understand what AI can <i>actually</i> do</li>
            <li>Move early on emerging stacks</li>
            <li>Solve meaningful problems through iterative builds and tight feedback loops</li>
          </ul>
        </section>
        <hr className="my-6 border-[#e0f7fa]" />
        {/* Smarter Feedback Loops */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-[#19b8a6] flex items-center gap-2 font-sans">
            <Repeat className="h-5 w-5 text-[#19b8a6]" /> Smarter Feedback Loops
          </h2>
          <div className="bg-[#e6f6fa] rounded-lg p-4 mb-2">
            <p>
              By exposing where others are stuck — and where the most buildable stacks are emerging — we help you:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Stay ahead of the market</li>
              <li>Build what matters</li>
              <li>Turn signal into product</li>
              <li>And move fast without guessing</li>
            </ul>
          </div>
        </section>
        <hr className="my-6 border-[#e0f7fa]" />
        {/* Build Faster */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-[#19b8a6] flex items-center gap-2 font-sans">
            <Wrench className="h-5 w-5 text-[#19b8a6]" /> Build Faster
          </h2>
          <div className="bg-[#f6fcfd] rounded-lg p-4 mb-2">
            <p>
              We don't just tell you what's happening.<br />
              We show you:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>What to build</li>
              <li>Why now</li>
              <li>How to start (MVPs, agent loops, toolchains)</li>
            </ul>
          </div>
        </section>
        <hr className="my-6 border-[#e0f7fa]" />
        {/* Built for Vibe Coders, Marketers & Solo Entrepreneurs */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-[#19b8a6] font-sans">Built for Vibe Coders, Marketers & Solo Entrepreneurs</h2>
          <div className="bg-[#e6f6fa] rounded-lg p-4 mb-2">
            <p>
              Whether you're launching a new AI-first tool, crafting GTM, or chasing your next breakthrough — <b>iVibe Index helps you move with clarity and ship with momentum.</b>
            </p>
          </div>
        </section>
        <hr className="my-6 border-[#e0f7fa]" />
        {/* Closing */}
        <section className="mb-4">
          <blockquote className="mb-3 pl-4 border-l-4 border-[#19b8a6] bg-[#f6fcfd] text-[#004d41] italic rounded-r-lg">
            I believe:<br />
            <span className="font-semibold text-[#00332a]">Vibe Coding + the right feedback loops = high-performing products that solve real-world problems.</span>
          </blockquote>
          <p className="mb-3">
            Now, I'm testing to see if this system can help <i>you</i>, too.
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-[#e6f6fa] border border-[#b2e6e6] rounded-lg px-4 py-3 flex flex-col items-center w-full mb-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 font-mono text-base font-semibold text-[#19b8a6] hover:text-[#004d41] transition-colors underline"
              >
                Sign up for early access here →
              </a>
            </div>
            <span className="text-xs text-[#64748B]">Let's build smarter — and iterate like it matters. Welcome to iVibe Index.</span>
            <span className="block mt-4 text-[#19b8a6] text-lg font-signature">— Adam Dorfman</span>
          </div>
        </section>
      </main>
    </div>
  );
} 