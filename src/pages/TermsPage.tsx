export default function TermsPage() {
  return (
    <main className="flex-grow bg-white px-6 py-16 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mb-10">
          Last updated: October 23, 2025
        </p>

        <section className="space-y-6 leading-relaxed">
          <p>
            Welcome to <strong>Email Verifier</strong>. These Terms & Conditions
            outline the rules and regulations for using our website and services.
            By accessing or using our platform, you accept these terms in full.
            If you disagree with any part of these terms, please do not use our service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">1. Use of Our Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance
            with these Terms. You must not misuse our platform, attempt unauthorized
            access, or interfere with its functionality in any way.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">2. Accounts</h2>
          <p>
            To access certain features, you may be required to create an account.
            You are responsible for maintaining the confidentiality of your login
            credentials and for all activities under your account.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">3. Intellectual Property</h2>
          <p>
            All content, trademarks, and materials on this website are the property
            of <strong>Email Verifier</strong> or its licensors. You may not copy,
            modify, or redistribute any part of the site without prior written consent.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">4. Limitation of Liability</h2>
          <p>
            We are not responsible for any damages resulting from your use or inability
            to use our services. All services are provided “as is” without any warranties,
            express or implied.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">5. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services
            at any time, without prior notice, if we believe you have violated these Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">6. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws
            of India.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:support@emailverifier.io" className="text-blue-600 underline">
              support@emailverifier.io
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
