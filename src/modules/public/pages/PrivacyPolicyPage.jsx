import React from "react";
import NavBar from "../components/NavBar";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-secondary min-h-screen px-4 sm:px-6 md:px-16 pt-20 pb-12 font-poppins">
      <NavBar />
      <div className="max-w-4xl mt-10 mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-semibold text-headline mb-4">
          Privacy Policy
        </h1>
        <p className="text-base text-body">
          How Hardbook.shop handles your information.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 text-body text-sm leading-relaxed">
        <p>
          <strong className="text-headline">1. Information we collect</strong>
          <br />
          When you place an order, we collect your name, shipping address, email,
          and payment details. We also collect browsing data to improve your
          experience.
        </p>
        <p>
          <strong className="text-headline">2. How we use your information</strong>
          <br />
          We use your data to process orders, communicate shipping updates, and
          personalize your book recommendations. We never sell your personal
          information to third parties.
        </p>
        <p>
          <strong className="text-headline">3. Data security</strong>
          <br />
          Your payment information is encrypted via secure payment gateways. We
          do not store full credit card details on our servers.
        </p>
        <p>
          <strong className="text-headline">4. Cookies</strong>
          <br />
          We use essential cookies to remember your cart and session preferences.
          You can disable cookies in your browser, but some features may not work
          correctly.
        </p>
        <p>
          <strong className="text-headline">5. Your rights</strong>
          <br />
          You may request access to, correction of, or deletion of your personal
          data by contacting us at <span className="text-primary">privacy@hardbook.shop</span>.
        </p>
        <p className="text-xs text-body/70 mt-4">
          Last updated: April 2026
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
