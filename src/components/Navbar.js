import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 bg-white bg-opacity-90 z-50 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">A.Carter</h1>
      <div className="space-x-8 uppercase">
        <Link href="/" className="hover:text-gray-500 transition">Home</Link>
        <Link href="/showreel" className="hover:text-gray-500 transition">
          Show Reel
        </Link>

        <Link href="/about" className="hover:text-gray-500 transition">About</Link>
        <Link href="/contact" className="hover:text-gray-500 transition">Contact</Link>
      </div>
    </nav>
  );
}
