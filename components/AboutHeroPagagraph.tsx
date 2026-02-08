"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function AboutHeroParagraph() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // render nothing on SSR

  return (
    <div className="mt-6 text-gray-600 max-w-3xl mx-auto px-4 sm:px-6 text-center overflow-x-auto">
      <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed whitespace-nowrap">
        <Typewriter
          words={[
            "Adventure",
            "Safety",
            "Comfort",
            "Expert Guides",
            "Himalayas",
            "Unforgettable",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>
    </div>
  );
}
