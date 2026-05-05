import React from "react";
import carddesign from "../../../assets/carddesign.png";
import CompBtn from "../../../components/ui/primitives/CompBtn";
import { FaBookReader } from "react-icons/fa";

const MembershipCard = () => {
  return (
    <div>
      <div className="my-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mx-4 sm:mx-10 lg:mx-32 items-stretch">
          <div className="bg-inverted rounded-2xl relative overflow-hidden min-h-[260px]">
            <div
              className="absolute inset-0 bg-left bg-no-repeat"
              style={{ backgroundImage: `url(${carddesign})`, opacity: 0.5 }}
            ></div>
            <div className="relative z-10 p-6 sm:p-8 w-full sm:w-2/3 lg:w-1/2 space-y-4">
              <h1 className="text-2xl font-semibold text-white">
                Become a Patron
              </h1>
              <p className="text-xs text-white">
                Recieve early access to limited edition drops and curator-led
                virtual salons.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full sm:w-60 text-xs bg-white/10 border outline-none text-white border-white/80 px-2 py-2 rounded-md"
                />
                <CompBtn
                  variant="primary"
                  size="small"
                  className="text-white text-semibold tracking-wide "
                >
                  Join
                </CompBtn>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-primary/80 to-yellow-500/80 p-6 sm:p-10 lg:p-16 rounded-2xl">
            <div className="h-full flex gap-2 flex-col justify-between items-center text-center">
              <FaBookReader className="text-inverted text-3xl" />
              <p className="font-bold text-sm text-inverted/80">
                Our Physical Atelier
              </p>
              <p className="font-semibold text-center text-xs text-inverted/70">
                Visit our Lagos store for a bespoke browsing experience.
              </p>
              <CompBtn
                className="uppercase font-semibold text-sm"
                variant="outline"
                size="medium"
              >
                Book a visit
              </CompBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
