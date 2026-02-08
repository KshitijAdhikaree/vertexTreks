import Image from "next/image";

type TrekCardProps = {
  title: string;
  duration: string;
  difficulty: string;
  altitude: string;
  image: string; // image path in /public folder
};

export default function TrekCard({
  title,
  duration,
  difficulty,
  altitude,
  image,
}: TrekCardProps) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 duration-300 bg-white">
      {/* Trek Image */}
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-navy">{title}</h3>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li>
            <span className="font-semibold text-gray-800">Duration:</span>{" "}
            {duration}
          </li>
          <li>
            <span className="font-semibold text-gray-800">Difficulty:</span>{" "}
            {difficulty}
          </li>
          <li>
            <span className="font-semibold text-gray-800">Max Altitude:</span>{" "}
            {altitude}
          </li>
        </ul>

        <a
          href="/contact"
          className="inline-block mt-6 px-4 py-2 bg-navy text-white rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
        >
          View Details →
        </a>
      </div>
    </div>
  );
}
