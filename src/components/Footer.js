// components/Footer.js
import { FaFacebookF, FaInstagram, FaTwitter, FaVimeoV } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-6 py-10 bg-white text-black text-sm border-t">
      <p className="mb-4 md:mb-0 text-center">
        © 2035 by <span className="font-semibold">ALEX CARTER</span> All rights reserved
      </p>
      <div className="flex gap-5 text-xl">
        <a href="#" className="hover:opacity-70"><FaFacebookF /></a>
        <a href="#" className="hover:opacity-70"><FaInstagram /></a>
        <a href="#" className="hover:opacity-70"><FaTwitter /></a>
        <a href="#" className="hover:opacity-70"><FaVimeoV /></a>
      </div>
    </footer>
  );
}
