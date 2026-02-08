import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 lg:px-36 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <p className="font-bold text-3xl text-white">Vertex Treks</p>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Premium trekking experiences in the Himalayas. Explore Nepal with
            expert guides and unforgettable adventures.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-5 gap-4 text-xl">
            <a
              href="#"
              className="hover:text-glacier transition-transform transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-glacier transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-glacier transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-glacier transition-transform transform hover:scale-110"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center  md:text-left mt-8 md:mt-0">
          <h4 className="font-semibold text-xl mb-5">Quick Links</h4>
          <ul className="space-y-3 text-gray-300 hover:text-white">
            <li>
              <Link href="/treks" className=" transition-colors duration-300">
                Treks
              </Link>
            </li>
            <li>
              <Link href="/about" className=" transition-colors duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className=" transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left mt-8 md:mt-0">
          <h4 className="font-semibold text-xl mb-5">Contact</h4>
          <p className="text-gray-300">Kathmandu, Nepal</p>
          <p className="text-gray-300 mt-2">
            Email:{" "}
            <a
              href="mailto:treksvertex@gmail.com"
              className="hover:text-white transition-colors"
            >
              treksvertex@gmail.com
            </a>
          </p>
          <p className="text-gray-300 mt-2">
            Phone:{" "}
            <a
              href="tel:+9779860105823"
              className="hover:text-white transition-colors"
            >
              +977 9860105823
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-16 border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Vertex Treks. All rights reserved.
      </div>
    </footer>
  );
}
