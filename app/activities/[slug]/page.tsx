import { treks } from "@/data/treks";
import { Clock, Mountain, DollarSign, MapPin } from "lucide-react";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function TrekDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const trek = treks.find((t) => t.slug === slug);

  if (!trek) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        Trek not found
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto px-6 sm:px-10 md:px-20 lg:px-36 py-20 border-l-gray-50 border-l-4 bg-white rounded-lg shadow">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-navy mb-6 text-center sm:text-left">
        {trek.title}
      </h1>

      {/* Image */}
      <div className="relative w-full h-72 sm:h-96 md:h-125 mb-8 shadow-lg rounded-xl overflow-hidden">
        <img
          src={trek.image}
          alt={trek.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Trek Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <Clock className="w-6 h-6 text-navy" />
          <div>
            <p className="text-sm text-black">Duration</p>
            <p className="font-semibold text-black">{trek.duration} Days</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <MapPin className="w-6 h-6 text-navy" />
          <div>
            <p className="text-sm text-black">Activity</p>
            <p className="font-semibold text-black">{trek.activity}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <Mountain className="w-6 h-6 text-navy" />
          <div>
            <p className="text-sm text-black">Max Altitude</p>
            <p className="font-semibold text-black">{trek.altitude} m</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <DollarSign className="w-6 h-6 text-green-700" />
          <div>
            <p className="text-sm text-black">Price</p>
            <p className="font-semibold text-green-700">
              ${trek.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Itinerary Cards */}
      {trek.itinerary && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {trek.itinerary.map((dayStr, idx) => {
            // Split dayStr into title and description
            const [dayTitle, ...descParts] = dayStr.split(":");
            const description = descParts.join(":").trim();

            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col"
              >
                {/* Day / Day Range */}
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-navy shrink-0" />
                  <h3 className="font-semibold text-navy text-lg">
                    {dayTitle}
                  </h3>
                </div>

                {/* Description */}
                {description && (
                  <p className="text-gray-700 leading-relaxed">{description}</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
