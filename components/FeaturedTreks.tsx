import TrekCard from "./TrekCard";

type Trek = {
  title: string;
  duration: string;
  difficulty: string;
  altitude: string;
  image: string;
};

const treks: Trek[] = [
  {
    title: "Everest Base Camp Trek",
    duration: "14 Days",
    difficulty: "Moderate–Challenging",
    altitude: "5,364m",
    image: "/trek/everest.jpg ",
  },
  {
    title: "Annapurna Circuit Trek",
    duration: "15 Days",
    difficulty: "Moderate",
    altitude: "5,416m",
    image: "/trek/annapurna.jpg",
  },
  {
    title: "Langtang Valley Trek",
    duration: "10 Days",
    difficulty: "Moderate",
    altitude: "4,984m",
    image: "/trek/langtang.jpg",
  },
];

export default function FeaturedTreks() {
  return (
    <div className="max-w-full mx-auto px-6 sm:px-10 md:px-20 lg:px-36 py-20 bg-white">
      {/* Section Header */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy">
        Iconic Himalayan Journeys
      </h2>
      <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
        Discover Nepal’s most legendary trekking routes with safety, comfort,
        and expert local guidance.
      </p>

      {/* Trek Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
        {treks.map((trek) => (
          <TrekCard
            key={trek.title}
            title={trek.title}
            duration={trek.duration}
            difficulty={trek.difficulty}
            altitude={trek.altitude}
            image={trek.image}
          />
        ))}
      </div>

      {/* Optional "Show More" Button */}
      <div className="flex justify-center mt-12 hover:scale-105 transition-transform">
        <a
          href="/treks"
          className="inline-block mt-6 px-4 py-2 bg-navy text-white rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
        >
          Show More
        </a>
      </div>
    </div>
  );
}
