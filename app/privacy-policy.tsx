import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 text-[#004d41] bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <p className="mb-6 text-sm text-gray-500 text-center">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Vibe Index. We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your information. This Privacy Policy explains what data we collect, how we use it, and your rights as a user of our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc pl-6">
          <li><b>Email Address:</b> Collected when you join our waitlist, subscribe, or contact us.</li>
          <li><b>Coupon Codes:</b> If you claim a special offer, we collect the code you provide.</li>
          <li><b>Usage Data:</b> We may collect anonymized analytics about how you use Vibe Index to improve our service.</li>
          <li><b>Communication Data:</b> If you contact us, we may keep records of your correspondence.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6">
          <li>To provide and improve the Vibe Index service.</li>
          <li>To send you product updates, newsletters, and relevant communications.</li>
          <li>To process special offers and coupon claims.</li>
          <li>To respond to your inquiries and provide support.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Third-Party Services</h2>
        <p>
          We use trusted third-party services (such as email delivery and analytics providers) to operate Vibe Index. These providers may process your data on our behalf, but only as necessary to provide their services and in compliance with this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We use industry-standard security measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee its absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <ul className="list-disc pl-6">
          <li>You can request access to, correction of, or deletion of your personal data at any time.</li>
          <li>You can unsubscribe from our communications at any time by following the link in our emails or contacting us directly.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the date above.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or your data, please contact us at:
        </p>
        <p className="mt-2 font-mono">adamdorfman2@gmail.com</p>
      </section>
    </main>
  );
} 