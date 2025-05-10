import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";

export default function ShowReel() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Main container */}
      <main className="px-4 sm:px-6 md:px-8 pt-32 pb-16 max-w-5xl mx-auto font-sans">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Show Reel</h1>

        {/* Responsive Video */}
        <div className="w-full aspect-video mb-10">
          <iframe
            src="https://player.vimeo.com/video/63019263"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Showreel"
          ></iframe>
        </div>

        {/* Details */}
        <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
          <p className="mb-2 font-semibold">Year of production: 2035</p>
          <p className="mb-2">Running Time: 2:30 min</p>
          <p className="mb-2">Color / Sound / Subtitled</p>

          <p className="mt-4">
            I’m a paragraph. Click here to add your own text and edit me. Just click “Edit Text” or
            double click me to add your own content and make changes to the font...
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
