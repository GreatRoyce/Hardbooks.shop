import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import MembershipCard from "../components/MembershipCard";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeaturedSection />
      <MembershipCard />
      <Footer />
    </div>
  );
};

export default LandingPage;
