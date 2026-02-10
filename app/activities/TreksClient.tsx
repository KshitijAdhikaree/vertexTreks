"use client";

import { useState } from "react";
import TrekCard from "@/components/TrekCard";
import { treks, Trek } from "@/data/treks";

export default function TreksClient() {
  const [activity, setActivity] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [duration, setDuration] = useState("All");
  const [price, setPrice] = useState("All");
  const [altitude, setAltitude] = useState("All");

  const filtered = treks.filter((item: Trek) => {
    // ---------- ACTIVITY ----------
    const matchActivity =
      activity === "All" ||
      item.activity.toLowerCase().includes(activity.toLowerCase());

    // ---------- DIFFICULTY ----------
    const difficultyMap: Record<string, string[]> = {
      Easy: ["easy"],
      Moderate: ["moderate"],
      Challenging: ["challenging", "very challenging"],
    };

    const matchDifficulty =
      difficulty === "All" ||
      difficultyMap[difficulty]?.some((level) =>
        item.difficulty.toLowerCase().includes(level),
      );

    // ---------- DURATION ----------
    const matchDuration =
      duration === "All" ||
      (duration === "1-5" && item.duration <= 5) ||
      (duration === "6-10" && item.duration >= 6 && item.duration <= 10) ||
      (duration === "11-15" && item.duration >= 11 && item.duration <= 15) ||
      (duration === "16+" && item.duration >= 16);

    // ---------- PRICE ----------
    const matchPrice =
      price === "All" ||
      (price === "0-1000" && item.price <= 1000) ||
      (price === "1000-2000" && item.price > 1000 && item.price <= 2000) ||
      (price === "2000+" && item.price > 2000);

    // ---------- ALTITUDE ----------
    const matchAltitude =
      altitude === "All" ||
      (altitude === "<4000" && item.altitude < 4000) ||
      (altitude === "4000-5000" &&
        item.altitude >= 4000 &&
        item.altitude <= 5000) ||
      (altitude === "5000+" && item.altitude > 5000);

    return (
      matchActivity &&
      matchDifficulty &&
      matchDuration &&
      matchPrice &&
      matchAltitude
    );
  });

  return (
    <section className="max-w-full mx-auto px-6 sm:px-10 md:px-20 lg:px-36 py-20 border-l-gray-50 border-l-4 bg-white rounded-lg shadow">
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-navy">
          Treks & Adventure Activities in Nepal
        </h1>
        <p className="mt-4 text-gray-600">
          Trekking, tours, peak climbing, helicopter rides, safaris, and more —
          all designed for international adventurers.
        </p>
      </div>

      {/* Filters */}
      <div
        className="
    mt-10
    grid
    grid-cols-1
    gap-4
    bg-white
    border
    border-gray-200
    p-4
    rounded-xl
    text-black

    sm:grid-cols-2
    sm:p-5

    md:grid-cols-3
    md:p-6

    lg:grid-cols-5
  "
      >
        <select
          className="w-full border p-3 rounded-lg bg-white"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="All">All Activities</option>
          <option value="Trekking">Trekking</option>
          <option value="Peak Climbing">Peak Climbing</option>
          <option value="Helicopter">Helicopter Tours</option>
          <option value="Safari">Jungle Safari</option>
          <option value="Cultural">Cultural Tour</option>
          <option value="Paragliding">Paragliding</option>
          <option value="Adventure">Adventure</option>
        </select>

        <select
          className="w-full border p-3 rounded-lg bg-white"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Challenging">Challenging</option>
        </select>

        <select
          className="w-full border p-3 rounded-lg bg-white"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        >
          <option value="All">Any Duration</option>
          <option value="1-5">1–5 Days</option>
          <option value="6-10">6–10 Days</option>
          <option value="11-15">11–15 Days</option>
          <option value="16+">16+ Days</option>
        </select>

        <select
          className="w-full border p-3 rounded-lg bg-white"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="All">Any Price</option>
          <option value="0-1000">Under $1,000</option>
          <option value="1000-2000">$1,000 – $2,000</option>
          <option value="2000+">$2,000+</option>
        </select>

        <select
          className="w-full border p-3 rounded-lg bg-white"
          value={altitude}
          onChange={(e) => setAltitude(e.target.value)}
        >
          <option value="All">Any Altitude</option>
          <option value="<4000">Below 4,000m</option>
          <option value="4000-5000">4,000–5,000m</option>
          <option value="5000+">Above 5,000m</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filtered.map((item) => (
          <TrekCard
            key={item.slug}
            title={item.title}
            duration={item.duration}
            difficulty={item.difficulty}
            altitude={item.altitude}
            price={item.price}
            image={item.image}
            slug={item.slug}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-12 text-center text-gray-500">
          No activities match your selected filters.
        </p>
      )}
    </section>
  );
}
