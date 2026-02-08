"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="relative w-full max-w-4xl">
        {/* Background Image */}
        <Image
          src="/mountain_notfound.png" // replace with your generated 404 image
          alt="Page Not Found"
          width={1024}
          height={768}
          className="rounded-xl object-cover w-full h-full sm:h-125 md:h-150"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 rounded-xl flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-white mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-white max-w-xl mb-6 leading-relaxed">
            Oops! The page you are looking for doesn’t exist. It might have been
            moved, renamed, or never existed.
          </p>
          <Link
            href="/"
            className="bg-navy text-white px-5 py-2 rounded-lg hover:opacity-90"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
