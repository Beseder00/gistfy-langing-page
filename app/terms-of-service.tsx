import React from "react";

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 text-[#004d41] bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
      <p className="mb-6 text-sm text-gray-500 text-center">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Vibe Index, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Service Description</h2>
        <p>
          Vibe Index is a platform that curates, summarizes, and delivers newsletter content and insights for professionals. We may update, modify, or discontinue features at any time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
        <ul className="list-disc pl-6">
          <li>Provide accurate and up-to-date information when subscribing or contacting us.</li>
          <li>Do not misuse the service, attempt unauthorized access, or disrupt the platform.</li>
          <li>Respect the rights and privacy of other users.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
        <p>
          All content, branding, and technology on Vibe Index are the property of Vibe Index or its licensors. You may not copy, reproduce, or distribute any part of the service without permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Disclaimers</h2>
        <p>
          Vibe Index is provided "as is" and "as available" without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of any content or service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Vibe Index and its affiliates are not liable for any indirect, incidental, or consequential damages arising from your use of the service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Changes to Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Continued use of Vibe Index after changes constitutes acceptance of the new terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="mt-2 font-mono">adamdorfman2@gmail.com</p>
      </section>
    </main>
  );
} 