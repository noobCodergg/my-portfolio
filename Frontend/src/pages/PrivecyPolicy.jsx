import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-16 text-gray-800 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 text-center">
          Last updated: April 20, 2025
        </p>

        <div className="space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p>
              We collect information that you provide to us directly, such as your name, email address,
              and payment details. We may also collect information automatically such as your IP address,
              browser type, and device information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p>
              We use your information to provide and improve our services, respond to inquiries, process
              transactions, and send relevant communications. Your information helps us to enhance
              user experience and customer support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
            <p>
              We do not sell or rent your personal data. We may share information with third-party
              service providers who assist in operating our services, provided they agree to keep
              this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
            <p>
              Our site uses cookies to enhance user experience. You may choose to set your web browser
              to refuse cookies or alert you when cookies are being sent. However, some parts of the
              site may not function properly without them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
            <p>
              We implement appropriate data collection, storage, and processing practices and security
              measures to protect against unauthorized access, alteration, disclosure, or destruction
              of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You may also
              object to certain processing and request data portability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time. Any changes will be
              posted on this page with an updated revision date.
            </p>
          </section>
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          If you have any questions or concerns about this Privacy Policy, please contact us at support@example.com.
        </p>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
