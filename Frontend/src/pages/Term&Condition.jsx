import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-16 text-gray-800 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
          Terms and Conditions
        </h1>

        <p className="text-sm text-gray-500 text-center">
          Last updated: April 20, 2025
        </p>

        <div className="space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Changes to Terms</h2>
            <p>
              We reserve the right to update the Terms and Conditions at any time. Continued use of the site after any such
              changes shall constitute your consent to such changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password and for restricting access
              to your computer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of the website owner and
              is protected by applicable copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Governing Law</h2>
            <p>
              These terms shall be governed and construed in accordance with the laws of your jurisdiction, without regard to its
              conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Pricing & Payment</h2>
            <p>
              Our service/product is offered with a <strong>one-time payment</strong>. There are no recurring charges or hidden fees.
              You will only be charged once at the time of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Prize Policy</h2>
            <p>
              The prize is a <strong>one-time offer</strong> and will only be applicable for the first project for each individual. It cannot be claimed more than once.
            </p>
          </section>
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          If you have any questions about these Terms, please contact us at muntasirniloy2002@gmail.com.
        </p>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
