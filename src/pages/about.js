// pages/about.js
import Image from "next/image";
import Navbar from '../components/Navbar';
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="px-10 pt-36 max-w-6xl mx-auto ">
        <Navbar/>
      <h2 className="text-center text-xl font-semibold tracking-widest mb-10">ABOUT ALEX CARTER</h2>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <Image
          src="/about.jpg" // ← Add your image to /public/images/
          alt="Adam in field"
          width={400}
          height={400}
          className="rounded-lg shadow-md"
        />
        <div className="text-gray-700 max-w-xl">
          <p className="mb-4">
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
          <p>
            This is a great space to write about your company and your services. You can go into detail about your team, story, and what makes you different from competitors.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-16 border-t pt-10">
        <div>
          <h3 className="font-semibold mb-4">AWARDS & RECOGNITIONS</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>2035 - Add Award Name - Add City</li>
            ))}
          </ul>
        </div>
        <div className="mb-40">
          <h3 className="font-semibold mb-4">CONTACT</h3>
          <p className="text-sm text-gray-600">info@mysite.com</p>
          <p className="text-sm text-gray-600">Tel: 123-456-7890</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
