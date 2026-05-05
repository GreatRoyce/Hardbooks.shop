import React from "react";
import NavBar from "../components/NavBar";

const ReturnsPage = () => {
  return (
    <div className="bg-secondary min-h-screen px-4 sm:px-6 md:px-16 pt-20 pb-12 font-poppins">
      <NavBar />
      <div className="max-w-4xl mt-10 mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-semibold text-headline mb-4">
          Returns & Refunds
        </h1>
        <p className="text-base text-body">
          Our promise to make things right.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 text-body text-sm leading-relaxed">
        <p>
          <strong className="text-headline">30‑day return window</strong>
          <br />
          You may return most new, unread books within 30 days of delivery for a
          full refund. Books must be in original condition with no markings,
          tears, or damage.
        </p>
        <p>
          <strong className="text-headline">How to return an item</strong>
          <br />
          1. Contact us at <span className="text-primary">returns@hardbook.shop</span> with your order number and reason for return.<br />
          2. We will provide a return shipping label (cost deducted from refund unless the return is due to our error).<br />
          3. Pack the book securely and drop it off at the designated carrier.<br />
          4. Once received and inspected, we will issue a refund within 5–7 business days.
        </p>
        <p>
          <strong className="text-headline">Non‑returnable items</strong>
          <br />
          Signed copies, limited editions, and books marked "final sale" cannot be
          returned. Digital products (if any) are also non‑returnable.
        </p>
        <p>
          <strong className="text-headline">Damaged or incorrect items</strong>
          <br />
          If you receive a damaged, defective, or wrong book, contact us within 7
          days. We will send a replacement at no extra cost or issue a full
          refund including original shipping charges.
        </p>
        <p>
          <strong className="text-headline">Refund timing</strong>
          <br />
          Refunds are issued to your original payment method. Depending on your
          bank, it may take 5–10 business days to appear on your statement.
        </p>
      </div>
    </div>
  );
};

export default ReturnsPage;
