import React from "react";

export default function CookiePolicy() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 text-[#004d41] bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Cookie Policy</h1>
      <p className="mb-6 text-sm text-gray-500 text-center">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device by your browser when you visit websites. They help websites remember your preferences, improve your experience, and analyze site usage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. How Vibe Index Uses Cookies</h2>
        <p>
          We use cookies to:
        </p>
        <ul className="list-disc pl-6">
          <li>Remember your preferences and settings.</li>
          <li>Enable essential site functionality.</li>
          <li>Analyze site traffic and usage to improve our service.</li>
          <li>Support marketing and communication efforts.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Types of Cookies We Use</h2>
        <ul className="list-disc pl-6">
          <li><b>Essential Cookies:</b> Necessary for the website to function properly.</li>
          <li><b>Analytics Cookies:</b> Help us understand how visitors interact with Vibe Index.</li>
          <li><b>Preference Cookies:</b> Remember your choices and settings.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Third-Party Cookies</h2>
        <p>
          We may use third-party services (such as analytics or email providers) that set their own cookies. We do not control these cookies, and their use is governed by the privacy policies of those third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Managing Cookies</h2>
        <p>
          You can control or delete cookies through your browser settings. Most browsers allow you to refuse or delete cookies. However, disabling cookies may affect your experience on Vibe Index.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us at:
        </p>
        <p className="mt-2 font-mono">adamdorfman2@gmail.com</p>
      </section>
    </main>
  );
} 