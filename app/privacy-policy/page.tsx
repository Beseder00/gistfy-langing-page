import React from "react";
import { Shield, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0f7fa] via-[#fffbe6] to-[#f1f5f9] py-0">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pt-20 pb-8 px-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center rounded-full bg-[#19b8a6]/20 p-4 shadow-md">
            <Shield className="h-8 w-8 text-[#19b8a6]" />
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#00332a] tracking-tight text-center drop-shadow-sm">
            Privacy Policy
          </h1>
        </div>
        <p className="text-base md:text-lg text-[#1a2e2b] text-center max-w-2xl mb-2">
          Your privacy is our top priority. Learn how we protect and use your data at Vibe Trends.
        </p>
        <p className="mb-0 text-xs text-[#64748B] text-center">Last updated: {new Date().toLocaleDateString()}</p>
      </section>

      {/* Card Content */}
      <main className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl px-6 py-10 md:px-10 md:py-12 border border-gray-100 text-[#1a2e2b]">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6] flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#19b8a6]" /> 1. Introduction
          </h2>
          <p>
            Welcome to Vibe Trends. We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your information. This Privacy Policy explains what data we collect, how we use it, and your rights as a user of our platform.
          </p>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6]">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><b>Email Address:</b> Collected when you join our waitlist, subscribe, or contact us.</li>
            <li><b>Coupon Codes:</b> If you claim a special offer, we collect the code you provide.</li>
            <li><b>Usage Data:</b> We may collect anonymized analytics about how you use Vibe Trends to improve our service.</li>
            <li><b>Communication Data:</b> If you contact us, we may keep records of your correspondence.</li>
          </ul>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6]">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide and improve the Vibe Trends service.</li>
            <li>To send you product updates, newsletters, and relevant communications.</li>
            <li>To process special offers and coupon claims.</li>
            <li>To respond to your inquiries and provide support.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6]">4. Third-Party Services</h2>
          <p>
            We use trusted third-party services (such as email delivery and analytics providers) to operate Vibe Trends. These providers may process your data on our behalf, but only as necessary to provide their services and in compliance with this policy.
          </p>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6]">5. Data Security</h2>
          <p>
            We use industry-standard security measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee its absolute security.
          </p>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6]">6. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You can request access to, correction of, or deletion of your personal data at any time.</li>
            <li>You can unsubscribe from our communications at any time by following the link in our emails or contacting us directly.</li>
          </ul>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6]">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the date above.
          </p>
        </section>
        <div className="border-t border-dashed border-gray-200 my-6" />
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-[#19b8a6] flex items-center gap-2">
            {/* Twitter SVG icon */}
            <svg className="h-5 w-5 text-[#19b8a6]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            8. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or your data, please contact us via Twitter:
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