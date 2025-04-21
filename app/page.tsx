"use client"
import PreLaunchLandingDuplicate from "@/components/pre-launch-landing-duplicate"
import Head from "next/head"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#00a693]">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          \"@context\": \"https://schema.org\",\n          \"@type\": \"Product\",\n          \"name\": \"iVibe Index\",\n          \"description\": \"iVibe Index is an AI-powered trend intelligence system that helps Vibe Coders, Marketers, and Solo Entrepreneurs think, decide, and build faster by surfacing personalized, high-signal insights. Spot trends early, apply them to real-world problems, and stay ahead of the market.\",\n          \"url\": \"https://vibeindex.vercel.app\",\n          \"brand\": {\n            \"@type\": \"Organization\",\n            \"name\": \"iVibe Index\",\n            \"url\": \"https://vibeindex.vercel.app\",\n            \"logo\": \"https://vibeindex.vercel.app/logo.jpeg\"\n          },\n          \"applicationCategory\": \"AI Strategic Intelligence, Trend Detection, Builder Tools\"\n        }` }} />
      </Head>
      <PreLaunchLandingDuplicate />
    </main>
  )
}

