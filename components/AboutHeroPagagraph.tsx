"use client";

import { Typewriter } from "react-simple-typewriter";

export default function AboutHeroParagraph() {
  return (
    <div className="mt-6 text-gray-600 max-w-full mx-auto px-4 sm:px-6 text-center">
      <p className="text-base sm:text-lg md:text-xl leading-relaxed whitespace-nowrap">
        <Typewriter
          words={[
            "Adventure",
            "Safety",
            "Comfort",
            "Expert Guides",
            "Himalayas",
            "Unforgettable",
          ]}
          loop={0} // 0 = infinite
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={2000}
        />
      </p>
    </div>
  );
}
