import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "Contact & Book Now | Vertex Treks",
  description:
    "Plan your Himalayan trekking adventure with Vertex Treks. Contact us to book Everest, Annapurna, or Langtang treks.",
};

export default function ContactPage() {
  return (
    <main className="max-w-full mx-auto px-6 sm:px-10 md:px-20 lg:px-36 py-20 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
          Plan Your Himalayan Adventure
        </h1>
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Tell us about your travel plans and our team will help design your
          perfect trek in Nepal. We’ll respond promptly to make your adventure
          safe, memorable, and unforgettable.
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy transition"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy transition"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy transition"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy transition md:col-span-2"
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:col-span-2 mt-2">
            <button
              type="submit"
              className="bg-navy text-white py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition flex-1 flex items-center justify-center gap-2 text-center"
            >
              <FaPaperPlane className="w-5 h-5" />
              Send Inquiry
            </button>

            <a
              href="https://wa.me/9779860105823" // replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition flex-1 flex items-center justify-center gap-2 text-center"
            >
              <FaWhatsapp className="w-5 h-5" />
              Contact via WhatsApp
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
