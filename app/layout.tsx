import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Vertex Treks | Premium Himalayan Trekking in Nepal",
  description:
    "Vertex Treks is a trusted Nepal trekking company offering premium guided treks in the Himalayas, including Everest Base Camp, Annapurna, and Langtang.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
