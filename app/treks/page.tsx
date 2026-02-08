import TrekCard from "@/components/TrekCard";

export const metadata = {
  title: "Treks & Tours | Vertex Treks",
  description:
    "Explore Everest, Annapurna, and Langtang trekking packages with Vertex Treks — a trusted Nepal trekking company.",
};

export default function TreksPage() {
  return (
    <main className="max-w-full mx-auto px-6 sm:px-10 md:px-20 lg:px-36 py-20 bg-white">
      <h1 className="text-4xl font-bold text-navy">
        Trekking Adventures Across the Himalayas
      </h1>
      <p className="mt-4 text-gray-600 max-w-2xl">
        Guided trekking experiences in Nepal designed for international
        travelers, from iconic routes to hidden valleys.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <TrekCard
          title="Everest Base Camp Trek"
          duration="14 Days"
          difficulty="Moderate–Challenging"
          altitude="5,364m"
          image="/trek/everest.jpg"
        />
        <TrekCard
          title="Annapurna Base Camp Trek"
          duration="12 Days"
          difficulty="Moderate"
          altitude="4,130m"
          image="/trek/annapurna.jpg"
        />
        <TrekCard
          title="Langtang Valley Trek"
          duration="10 Days"
          difficulty="Moderate"
          altitude="4,984m"
          image="/trek/langtang.jpg"
        />
        <TrekCard
          title="Langtang Valley Trek"
          duration="10 Days"
          difficulty="Moderate"
          altitude="4,984m"
          image="/trek/langtang.jpg"
        />
        <TrekCard
          title="Langtang Valley Trek"
          duration="10 Days"
          difficulty="Moderate"
          altitude="4,984m"
          image="/trek/langtang.jpg"
        />
        <TrekCard
          title="Langtang Valley Trek"
          duration="10 Days"
          difficulty="Moderate"
          altitude="4,984m"
          image="/trek/langtang.jpg"
        />
      </div>
      {/* Show More Button */}
      <div className="flex justify-center mt-12">
        <a
          href="/treks"
          className="inline-block mt-6 px-4 py-2 bg-navy text-white rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
        >
          Show More{" "}
        </a>
      </div>
    </main>
  );
}
