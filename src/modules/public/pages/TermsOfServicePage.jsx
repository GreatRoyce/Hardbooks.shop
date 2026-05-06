import React from "react";
import NavBar from "../components/NavBar";

const TermsOfServicePage = () => {
  return (
    <div className="bg-secondary min-h-screen px-4 sm:px-6 md:px-16 pt-20 pb-12 font-poppins">
      <NavBar />
      <div className="max-w-4xl mt-10 mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-semibold text-headline mb-4">
          Terms of Service
        </h1>
        <p className="text-base text-body">
          Read the rules that govern Hardbook.shop.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 text-body text-sm leading-relaxed">
        <p>
          <strong className="text-headline">1. Acceptance of terms</strong>
          <br />
          By using Hardbook.shop, you agree to these Terms of Service. If you do
          not agree, please do not use the website.
        </p>
        <p>
          <strong className="text-headline">2. Orders and payments</strong>
          <br />
          All orders are subject to availability and confirmation. We reserve the
          right to cancel any order due to stock issues or pricing errors.
          Payments are processed securely; you agree to provide accurate billing
          information.
        </p>
        <p>
          <strong className="text-headline">3. Shipping and delivery</strong>
          <br />
          Estimated delivery times are provided but not guaranteed. We are not
          responsible for delays caused by carriers, weather, or customs.
        </p>
        <p>
          <strong className="text-headline">4. Returns and refunds</strong>
          <br />
          Please see our <span className="text-primary">Returns Policy</span> for
          detailed information about returns, exchanges, and refunds.
        </p>
        <p>
          <strong className="text-headline">5. Prohibited conduct</strong>
          <br />
          You may not use the site for any illegal purpose, to harass others, or
          to interfere with the website's operation.
        </p>
        <p>
          <strong className="text-headline">6. Changes to terms</strong>
          <br />
          We may update these Terms at any time. Continued use of the site after
          changes constitutes acceptance.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
