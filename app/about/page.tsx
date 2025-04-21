import React from "react";
import { User, Rocket, Repeat, Wrench } from "lucide-react";
import Head from "next/head";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0f7fa] via-[#fffbe6] to-[#f1f5f9] py-0">
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
      <section className="w-full flex flex-col items-center justify-center pt-12 pb-4 px-4">
        <div className="flex flex-col items-center gap-2 mb-2 bg-white/80 rounded-2xl shadow-2xl border border-[#19b8a6]/20 px-4 py-4 max-w-lg">
          <span className="inline-flex items-center justify-center rounded-full bg-[#19b8a6]/20 p-3 shadow-md mb-1">
            <User className="h-8 w-8 text-[#19b8a6]" />
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#00332a] tracking-tight text-center drop-shadow-sm font-serif leading-tight mb-1">
            About Me & Vibe Index
          </h1>
          <p className="text-sm md:text-base text-[#1a2e2b] text-center max-w-xl font-medium leading-snug">
            Iterative building. Strong feedback loops. Relentless focus on real-world problem solving.
          </p>
        </div>
      </section>

      {/* Card Content */}
      <main className="max-w-4xl mx-auto bg-gradient-to-br from-[#fffbe6] via-white to-[#e0f7fa] rounded-3xl shadow-2xl px-4 py-8 md:px-12 md:py-12 border border-[#19b8a6]/10 text-[#1a2e2b]">
        {/* About Me - Two column on desktop */}
        <section className="mb-8 md:flex md:items-start md:gap-8">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-2 text-[#19b8a6] flex items-center gap-2 font-serif">
              <User className="h-5 w-5 text-[#19b8a6]" /> About Me
            </h2>
            <p>
              With 10+ years in product and market analysis, I've spent my career spotting signals before they become headlines.
            </p>
            <p className="mt-3">
              A few months ago, I helped two AI startups secure pre-seed funding by analyzing the best AI information sources and product releases to uncover early market signals. Both startups were so thrilled with the results that they offered me a small ownership stake — a win for them and for me.
            </p>
            <blockquote className="mt-4 mb-2 pl-4 border-l-4 border-[#19b8a6] bg-[#e0f7fa]/60 text-[#004d41] italic rounded-r-lg">
              That success sparked a bigger idea:<br />
              <span className="font-semibold text-[#19b8a6]">What if I could build a dashboard that gave every Vibe Coder that same advantage?</span>
            </blockquote>
            <p className="mt-3">
              That's how <span className="font-bold text-[#00332a]">Vibe Index</span> was born.
            </p>
          </div>
          <div className="md:w-1/3 flex-shrink-0 flex flex-col items-center mt-6 md:mt-0">
            <img
              src="/images/AdamDorfX_Sarah.jpg"
              alt="Adam and Sarah"
              className="w-32 h-32 md:w-40 md:h-40 rounded-xl shadow-md border border-gray-200 object-cover mb-2 md:ml-auto"
            />
            <span className="text-xs text-[#64748B] text-center">This is me and my girlfriend Sarah.</span>
            <span className="inline-block mt-1 px-2 py-0.5 bg-[#19b8a6]/10 text-[#19b8a6] text-[11px] rounded-full font-semibold tracking-wide">Founder</span>
          </div>
        </section>
        <div className="border-t border-dashed border-[#19b8a6]/20 my-6" />
        {/* What is Vibe Index */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-[#19b8a6] flex items-center gap-2 font-serif">
            <Rocket className="h-5 w-5 text-[#19b8a6]" /> What is Vibe Index?
          </h2>
          <div className="bg-[#fffbe6] rounded-lg p-4 mb-2">
            <p>
              Vibe Index is your daily strategic edge.<br />
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
        <div className="border-t border-dashed border-[#19b8a6]/20 my-6" />
        {/* Smarter Feedback Loops */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-[#19b8a6] flex items-center gap-2 font-serif">
            <Repeat className="h-5 w-5 text-[#19b8a6]" /> Smarter Feedback Loops
          </h2>
          <div className="bg-[#e0f7fa]/60 rounded-lg p-4 mb-2">
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
        <div className="border-t border-dashed border-[#19b8a6]/20 my-6" />
        {/* Build Faster */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-[#19b8a6] flex items-center gap-2 font-serif">
            <Wrench className="h-5 w-5 text-[#19b8a6]" /> Build Faster
          </h2>
          <div className="bg-[#fffbe6] rounded-lg p-4 mb-2">
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
        <div className="border-t border-dashed border-[#19b8a6]/20 my-6" />
        {/* Built for Vibe Coders, Marketers & Solo Entrepreneurs */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-[#19b8a6] font-serif">Built for Vibe Coders, Marketers & Solo Entrepreneurs</h2>
          <div className="bg-[#e0f7fa]/60 rounded-lg p-4 mb-2">
            <p>
              Whether you're launching a new AI-first tool, crafting GTM, or chasing your next breakthrough — <b>Vibe Index helps you move with clarity and ship with momentum.</b>
            </p>
          </div>
        </section>
        <div className="border-t border-dashed border-[#19b8a6]/20 my-6" />
        {/* Closing */}
        <section className="mb-4">
          <blockquote className="mb-3 pl-4 border-l-4 border-[#19b8a6] bg-[#fffbe6] text-[#004d41] italic rounded-r-lg">
            I believe:<br />
            <span className="font-semibold text-[#00332a]">Vibe Coding + the right feedback loops = high-performing products that solve real-world problems.</span>
          </blockquote>
          <p className="mb-3">
            Now, I'm testing to see if this system can help <i>you</i>, too.
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-[#19b8a6]/10 border border-[#19b8a6]/30 rounded-lg px-4 py-3 flex flex-col items-center w-full mb-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 font-mono text-base font-semibold text-[#19b8a6] hover:text-[#004d41] transition-colors underline"
              >
                Sign up for early access here →
              </a>
            </div>
            <span className="text-xs text-[#64748B]">Let's build smarter — and iterate like it matters. Welcome to the Vibe Index.</span>
            <span className="block mt-4 text-[#19b8a6] text-lg font-signature">— Adam Dorfman</span>
          </div>
        </section>
      </main>
    </div>
  );
} 