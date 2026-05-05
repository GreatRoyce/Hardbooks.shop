import React from "react";
import NavBar from "../components/NavBar";

const ShippingPage = () => {
  return (
    <div className="bg-secondary min-h-screen px-4 sm:px-6 md:px-16 pt-20 pb-12 font-poppins">
      <NavBar />
      <div className="max-w-4xl mt-10 mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-semibold text-headline mb-4">
          Shipping Information
        </h1>
        <p className="text-base text-body">
          How we deliver your hardcover books.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 text-body text-sm leading-relaxed">
        <p>
          <strong className="text-headline">Processing time</strong>
          <br />
          Orders are processed within 1–3 business days. You will receive a
          confirmation email once your order has been shipped.
        </p>
        <p>
          <strong className="text-headline">Shipping rates & delivery</strong>
          <br />
          <span className="block mt-1">• Standard shipping (5–7 business days): ₦2,500</span>
          <span className="block">• Express shipping (2–3 business days): ₦5,000</span>
          <span className="block">• Free standard shipping on orders over ₦40,000</span>
        </p>
        <p>
          <strong className="text-headline">International shipping</strong>
          <br />
          We currently ship to the United States, Canada, United Kingdom,
          Australia, and most of Europe. International delivery times range from
          10–20 business days. Customs fees are the responsibility of the buyer.
        </p>
        <p>
          <strong className="text-headline">Tracking your order</strong>
          <br />
          A tracking number will be emailed to you as soon as your order ships.
          Please allow 24 hours for tracking updates to appear.
        </p>
        <p>
          <strong className="text-headline">Lost or damaged packages</strong>
          <br />
          If your package is lost or arrives damaged, contact us within 7 days at
          <span className="text-primary"> shipping@hardbook.shop</span>. We will
          work with the carrier to resolve the issue.
        </p>
      </div>
    </div>
  );
};

export default ShippingPage;
