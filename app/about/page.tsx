import Image from "next/image";
import { FaShieldAlt, FaGlobe, FaStar, FaEye, FaHeart } from "react-icons/fa";
import AboutHeroParagraph from "@/components/AboutHeroPagagraph";

export const metadata = {
  title: "About Us | Vertex Treks",
  description:
    "Learn about Vertex Treks — a professional Himalayan trekking company committed to safety, sustainability, and authentic adventure.",
};

export default function AboutPage() {
  return (
    <main className="max-w-full mx-auto px-6 sm:px-10 md:px-20 lg:px-36 py-20 bg-white">
      {/* Hero / Header */}
      <div className="text-center md:text-center mb-20 px-4 sm:px-6 md:px-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy leading-tight">
          About Vertex Treks
        </h1>
        <AboutHeroParagraph />

        {/* Optional accent line */}
        <div className="mt-6 w-24 h-1 bg-glacier mx-auto rounded-full"></div>
      </div>

      {/* Our Story */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 mb-20">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify">
            Vertex Treks was founded by experienced Himalayan guides with a
            mission to provide safe, professional, and authentic trekking
            experiences in Nepal. We combine local expertise with international
            standards to serve trekkers from around the world. Our goal is to
            make every journey unforgettable, comfortable, and adventurous.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
            <Image
              src="/trekking_team.png"
              alt="Vertex Treks Team"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex items-start gap-4">
          <FaShieldAlt className="w-10 h-10 text-navy shrink-0" />
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver world-class trekking adventures in the Himalayas while
              prioritizing safety, sustainability, and cultural respect.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex items-start gap-4">
          <FaEye className="w-10 h-10 text-navy shrink-0" />
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become the most trusted Nepal trekking company for
              international travelers seeking authentic and unforgettable
              Himalayan experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-navy text-center mb-8">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col items-center gap-3">
            <FaShieldAlt className="w-10 h-10 text-navy" />
            <h4 className="text-xl font-semibold text-navy">Safety</h4>
            <p className="text-gray-700">
              Every trek follows strict altitude protocols and emergency plans.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col items-center gap-3">
            <FaGlobe className="w-10 h-10 text-navy" />
            <h4 className="text-xl font-semibold text-navy">Sustainability</h4>
            <p className="text-gray-700">
              Responsible tourism that respects the environment and local
              culture.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col items-center gap-3">
            <FaStar className="w-10 h-10 text-navy" />
            <h4 className="text-xl font-semibold text-navy">Authenticity</h4>
            <p className="text-gray-700">
              Genuine Himalayan experiences guided by local experts.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
