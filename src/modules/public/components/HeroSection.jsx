import React from "react";
import CompBtn from "../../../components/ui/primitives/CompBtn";
import hero from "../../../assets/heroimage.jpg";
import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule?.default ?? MarqueeModule;

const marqueeItems = {
  amber: "mx-4 sm:mx-8 text-red-400/60 font-semibold text-xs sm:text-sm",
  gray: "mx-4 sm:mx-8 text-offwhite text-xs sm:text-sm",
  inverted: "mx-4 sm:mx-8 text-white bg-inverted/80 px-2 rounded text-xs sm:text-sm",
};

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-16 md:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-offwhite/90 mb-2 sm:mb-4">
          Where Every Page
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-amber-500/90 font-normal mb-4 sm:mb-6">
          Tells a Story of Art
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">
          A curated sanctuary for modern bibliophile. Discover rare editions,
          antic classics, and the finest contemporary literature.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a href="#collection">
            <CompBtn
              variant="outline"
              size="large"
              className="text-white/80 bg-gradient-to-l from-primary to-tertiary border-0 text-sm font-semibold tracking-wide hover:bg-gradient-to-r hover:from-primary/80 hover:to-tertiary/80 w-full md:w-full sm:w-auto"
            >
              Explore Collection
            </CompBtn>
          </a>
          <CompBtn
            variant="outline"
            size="large"
            className="bg-white/20 text-white/80 text-sm font-semibold tracking-wide hover:bg-transparent/20 w2/2  sm:w-auto"
          >
            Our Manifesto
          </CompBtn>
        </div>
      </div>

      {/* Marquee footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden">
        <Marquee
          gradient={false}
          speed={20}
          pauseOnHover={true}
          direction="left"
          className="w-full bg-black/70 font-thin py-2 sm:py-3"
        >
          <span className={marqueeItems.amber}>Moby Dick</span>
          <span className={marqueeItems.gray}>The Great Gatsby</span>
          <span className={marqueeItems.inverted}>Game of Thrones</span>
          <span className={marqueeItems.gray}>12 Rules for Life</span>
          <span className={marqueeItems.amber}>Romeo and Juliet</span>
          <span className={marqueeItems.inverted}>The Scarlet Letter</span>
          <span className={marqueeItems.amber}>The Count of Monte Cristo</span>
          <span className={marqueeItems.gray}>The Picture of Dorian Gray</span>
          <span className={marqueeItems.amber}>Meditations (Marcus Aurelius)</span>
          <span className={marqueeItems.gray}>The Republic (Plato)</span>
          <span className={marqueeItems.inverted}>Man’s Search for Meaning</span>
          <span className={marqueeItems.gray}>Leaves of Grass</span>
        </Marquee>
      </footer>
    </div>
  );
};

export default HeroSection;