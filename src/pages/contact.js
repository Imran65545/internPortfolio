// pages/contact.js
import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError("Enter an email address like example@mysite.com.");
      return;
    }
    setError("");
    alert("Form submitted successfully!");
    // Do backend submission here
  };

  return (
    <div className="px-10 py-16 max-w-5xl mx-auto pt-36">
        <Navbar/>
      <h2 className="text-center text-xl font-semibold tracking-widest mb-10">CONTACT</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">First name *</label>
            <input
              type="text"
              name="first"
              value={formData.first}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Last name *</label>
            <input
              type="text"
              name="last"
              value={formData.last}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full border px-4 py-2 ${error ? "border-red-500" : ""}`}
            />
            {error && (
              <p className="text-red-600 text-sm mt-1">{error}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border px-4 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 text-center hover:bg-black transition"
        >
          Submit
        </button>
      </form>
      <Footer/>
    </div>
  );
}
