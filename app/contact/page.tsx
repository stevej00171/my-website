"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    alert("Message sent (hook email later)");
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(to_right,#e6f4f3_0%,#ffffff_12%,#ffffff_88%,#e6f4f3_100%)]">
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-10 text-center">

        <h1 className="text-3xl font-bold text-gray-900">
          Contact McCowan, Jeffrey & Fich
        </h1>

        <p className="text-gray-600">
          Reach out to our team for general inquiries or support.
        </p>

        {/* CONTACT INFO */}
        <div className="space-y-2 text-gray-700">
          <p><strong>Phone:</strong> 1-647-693-33300</p>
          <p><strong>Email:</strong> info@mjf-finance.com</p>
          <p><strong>Hours:</strong> Monday – Friday, 9AM – 5PM</p>
        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-left max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-3"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border rounded-md px-4 py-3"
          />

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </main>
  );
}