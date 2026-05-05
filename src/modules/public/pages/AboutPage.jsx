import React from "react";
import NavBar from "../components/NavBar";

const AboutPage = () => {
  return (
    <div className="bg-secondary min-h-screen px-4 sm:px-6 md:px-16 pt-20 pb-12 font-poppins">
      {/* Header Section */}
      <NavBar />
      <div className="max-w-4xl mt-10 mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-semibold text-headline mb-4">
          About Hardbook.shop
        </h1>
        <p className="text-base text-body">
          A place for readers who still believe books should be held, not just
          scrolled through.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto space-y-8 text-body text-sm leading-relaxed">
        <p>
          In a time where reading has become increasingly digital, Hardbook.shop
          exists for those who still value the physical experience of a book.
          The feel of paper, the weight in your hands, the quiet presence of
          something real. Not a file. Not a screen. A book.
        </p>

        <p>
          Hardbook.shop is built for readers who prefer hard copies over PDFs or
          e-books. It is a simple and focused platform where you browse, select,
          and order physical books that are delivered to you. No downloads, no
          digital clutter, just tangible reading.
        </p>

        <p>
          Every part of the platform is designed with intention. From the warm,
          grounded colors to the clean typography, the goal is to create a calm
          and distraction-free environment where the books remain the center of
          attention.
        </p>

        <p>
          We believe reading should feel personal, not transactional. Whether
          you are revisiting a classic, discovering a new author, or simply
          looking for your next read, Hardbook.shop offers a space where you can
          explore at your own pace.
        </p>

        <p>
          As the platform grows, we aim to introduce features that make the
          experience even better, including the ability for users to request
          specific books they cannot find. This ensures that readers are not
          limited by what is available, but supported in what they seek.
        </p>

        <p>
          At its core, Hardbook.shop is not just a store. It is a space for
          readers who appreciate the depth, presence, and authenticity that only
          physical books can provide.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
