import TreksClient from "./TreksClient";

export const metadata = {
  title: "Treks & Activities in Nepal | Vertex Treks",
  description:
    "Explore trekking, tours, peak climbing, helicopter tours, jungle safari, paragliding and Himalayan adventures in Nepal with Vertex Treks.",
};

export default function TreksPage() {
  return (
    <main className="bg-white">
      <TreksClient />
    </main>
  );
}
