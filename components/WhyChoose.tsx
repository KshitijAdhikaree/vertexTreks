import { FaUserTie, FaShieldAlt, FaCertificate, FaUsers } from "react-icons/fa";

export default function WhyChoose() {
  const features = [
    {
      title: "Certified Guides",
      description: "Experienced, English-speaking professionals.",
      icon: <FaUserTie className="w-8 h-8 text-navy" />,
    },
    {
      title: "Safety First",
      description: "Altitude protocols and emergency planning.",
      icon: <FaShieldAlt className="w-8 h-8 text-navy" />,
    },
    {
      title: "Licensed & Insured",
      description: "Fully registered Nepal trekking operator.",
      icon: <FaCertificate className="w-8 h-8 text-navy" />,
    },
    {
      title: "Small Groups",
      description: "Personalized and responsible trekking.",
      icon: <FaUsers className="w-8 h-8 text-navy" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy">
          Why Choose Vertex Treks
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Experience safe, professional, and unforgettable Himalayan adventures.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition transform duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-xl text-navy text-center">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
