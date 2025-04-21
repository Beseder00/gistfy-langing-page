import React from "react";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0f7fa] via-[#fffbe6] to-[#f1f5f9] py-0">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pt-20 pb-8 px-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center rounded-full bg-[#19b8a6]/20 p-4 shadow-md">
            <FileText className="h-8 w-8 text-[#19b8a6]" />
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#00332a] tracking-tight text-center drop-shadow-sm">
            Terms of Service
          </h1>
        </div>
        <p className="text-base md:text-lg text-[#1a2e2b] text-center max-w-2xl mb-2">
          Please read these terms carefully before using Vibe Index.
        </p>
        <p className="mb-0 text-xs text-[#64748B] text-center">Last updated: {new Date().toLocaleDateString()}</p>
      </section>

      {/* Card Content */}
      <main className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl px-6 py-10 md:px-10 md:py-12 border border-gray-100 text-[#1a2e2b]">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6] flex items-center gap-2">
            <FileText className="h-5 w-5 text-[#19b8a6]" /> 1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using Vibe Index, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
          </p>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6]">2. Service Description</h2>
          <p>
            Vibe Index is an AI-powered newsletter and insights platform designed for coders, marketers, and solo entrepreneurs. We provide curated content, analytics, and tools to help you stay ahead.
          </p>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6]">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide accurate and up-to-date information when subscribing or contacting us.</li>
            <li>Do not misuse the service or attempt to access it using unauthorized means.</li>
            <li>Respect the intellectual property and rights of others.</li>
          </ul>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6]">4. Intellectual Property</h2>
          <p>
            All content, trademarks, and intellectual property on Vibe Index are owned by us or our licensors. You may not reproduce, distribute, or create derivative works without our permission.
          </p>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6]">5. Disclaimers</h2>
          <p>
            Vibe Index is provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of any content or service.
          </p>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6]">6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Vibe Index and its team shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.
          </p>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6]">7. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of Vibe Index after changes constitutes acceptance of the new terms.
          </p>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6] flex items-center gap-2">
            {/* Twitter SVG icon */}
            <svg className="h-5 w-5 text-[#19b8a6]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            8. Contact
          </h2>
          <p>
            For questions about these Terms, contact us via Twitter:
          </p>
          <div className="mt-3 flex items-center gap-2 bg-[#e0f7fa] rounded-lg px-4 py-3 text-[#00332a] shadow-sm">
            <a
              href="https://x.com/adamdorfx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-[#19b8a6] hover:text-[#004d41] transition-colors underline"
              aria-label="Contact on Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              @adamdorfx
            </a>
          </div>
        </section>
      </main>
    </div>
  );
} 