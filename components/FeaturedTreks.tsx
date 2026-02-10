import TrekCard from "./TrekCard";
import { treks } from "../data/treks"; // Make sure treks is exported from treks.ts
import Link from "next/link";

export default function FeaturedTreks() {
  return (
    <div className="max-w-full mx-auto px-6 sm:px-10 md:px-20 lg:px-36 py-20 border-l-gray-50 border-l-4 bg-white rounded-lg shadow">
      {/* Section Header */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy">
        Iconic Himalayan Journeys
      </h2>
      <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
        Discover Nepal’s most legendary trekking routes with safety, comfort,
        and expert local guidance.
      </p>

      {/* Trek Cards Grid (show 3 random treks) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
        {[...treks]
          .sort(() => Math.random() - 0.5) // shuffle
          .slice(0, 3)
          .map((trek) => (
            <TrekCard key={trek.slug} {...trek} />
          ))}
      </div>

      {/* Optional "Show More" Button */}
      <div className="flex justify-center mt-12">
        <Link href="/activities">
          <div className="inline-block px-6 py-3 bg-navy text-white rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition duration-300">
            Show More
          </div>
        </Link>
      </div>
    </div>
  );
}
