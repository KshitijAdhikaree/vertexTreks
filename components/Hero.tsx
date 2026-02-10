"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/hero/everest.jpeg",
  "/hero/annapurna.jpeg",
  "/hero/langtang.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change slide every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Himalayan trekking with Vertex Treks"
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Reach the Summit with Vertex Treks
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Premium Himalayan trekking experiences for international travelers who
          value safety, expertise, and unforgettable adventure.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          {/* Explore Treks Button */}
          <a
            href="/treks"
            className="px-8 py-3 bg-navy text-white rounded-lg font-semibold 
               transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
          >
            Explore Treks
          </a>

          {/* Plan Your Trip Button */}
          <a
            href="/contact"
            className="px-8 py-3 border border-white text-white rounded-lg font-semibold 
               transform transition duration-300 hover:scale-105 hover:shadow-lg 
               hover:bg-white/10 hover:text-navy"
          >
            Plan Your Trip
          </a>
        </div>
      </div>
    </section>
  );
}
