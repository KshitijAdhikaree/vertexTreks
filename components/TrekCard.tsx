import Image from "next/image";
import Link from "next/link";
import { Clock, Mountain, BarChart3, DollarSign } from "lucide-react";

type TrekCardProps = {
  title: string;
  duration: number;
  difficulty: string;
  altitude: number;
  price: number;
  image: string;
  slug: string;
};

export default function TrekCard({
  title,
  duration,
  difficulty,
  altitude,
  price,
  image,
  slug,
}: TrekCardProps) {
  const imageSrc = image.startsWith("/") ? image : `/${image}`;

  return (
    <Link href={`/activities/${slug}`} className="block h-full">
      <div className="relative border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 duration-300 bg-white flex flex-col">
        {/* Image container with relative positioning */}
        <div className="relative h-48 w-full">
          <Image src={imageSrc} alt={title} fill className="object-cover" />

          {/* Price badge bottom-right */}
          <div className="absolute right-3 z-10 flex items-center gap-1.5 rounded-lg  px-3 py-1.5 shadow-lg">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm font-semibold">
              ${price.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-navy line-clamp-2 min-h-14">
            {title}
          </h3>

          <ul className="mt-4 text-gray-700 space-y-3 text-sm flex-1">
            <li className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-navy" />
              <span>
                <strong>Duration:</strong> {duration} Days
              </span>
            </li>

            <li className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-navy" />
              <span>
                <strong>Difficulty:</strong> {difficulty}
              </span>
            </li>

            <li className="flex items-center gap-2">
              <Mountain className="w-5 h-5 text-navy" />
              <span>
                <strong>Max Altitude:</strong> {altitude} m
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
