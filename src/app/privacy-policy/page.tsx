import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-paper text-ink p-8 md:p-16 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-mauve/20">
    
        <Link href="/" className="inline-block mb-8 text-mauve-dark hover:text-mauve font-bold">
          ← Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-serif text-mauve-dark mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-ink/50 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3 text-mauve-dark">1. Introduction</h2>
            <p>
              Welcome to <strong>Digital Love</strong>. We respect your privacy and are committed to protecting the personal data you share with us to create digital gifts for your loved ones.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-mauve-dark">2. Information We Collect</h2>
            <p>To provide our website building service, we collect the following information when you place an order:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Client Details:</strong> Your name, mobile number, and email address (to contact you).</li>
              <li><strong>Recipient Details:</strong> The name of the person you are gifting the site to.</li>
              <li><strong>Project Details:</strong> Personal messages, notes, and preferences for the website content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-mauve-dark">3. How We Use Your Data</h2>
            <p>We use this data solely for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Building and designing the personalized website.</li>
              <li>Sending you order confirmations and updates via Email or WhatsApp.</li>
              <li>We do <strong>not</strong> sell or share your personal data with advertisers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-mauve-dark">4. Third-Party Services</h2>
            <p>We use trusted third-party services to function:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Firebase (Google):</strong> To securely store your order details.</li>
              <li><strong>EmailJS:</strong> To send automatic email notifications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-mauve-dark">5. Contact Us</h2>
            <p>
              If you have any questions about this policy or want to request the deletion of your data, please contact us via the contact details provided on our homepage.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-mauve/20 text-center">
            <Link href="/#order" className="px-6 py-3 bg-mauve text-white rounded hover:bg-mauve-dark transition">
                Book a Website Now
            </Link>
        </div>
      </div>
    </main>
  );
}