import Footer from "@/components/Footer";
import Navbar from '../components/Navbar';

// pages/showreel.js
export default function ShowReel() {
  return (
    <div className="min-h-screen px-6 py-12 font-sans mb-20">
        <Navbar/>
      <h1 className="text-3xl font-bold mb-6">Show Reel</h1>
      
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          src="https://player.vimeo.com/video/63019263"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Showreel"
          className="w-full h-[480px] max-w-5xl mx-auto"
        ></iframe>
      </div>

      <div className="max-w-4xl mx-auto mt-6 text-gray-700">
        <p className="mb-2 font-semibold">Year of production: 2035</p>
        <p className="mb-2">Running Time: 2:30 min</p>
        <p className="mb-2">Color / Sound / Subtitled</p>

        <p className="mt-4 mb-10">
          I’m a paragraph. Click here to add your own text and edit me. Just click “Edit Text” or double click me to add your own content and make changes to the font...
        </p>
      </div>
      <Footer/>
    </div>
  );
}
