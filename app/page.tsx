import Hero from "@/components/Hero";
import FeaturedTreks from "@/components/FeaturedTreks";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Featured Treks */}
      <FeaturedTreks />

      {/* Why Choose Us */}
      <WhyChoose />
      
    </main>
  );
}
