"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <main className="relative p-6 max-w-6xl mx-auto space-y-16 min-h-screen overflow-hidden
    bg-[linear-gradient(to_right,#e6f4f3_0%,#ffffff_12%,#ffffff_88%,#e6f4f3_100%)]">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-100 opacity-30 blur-3xl rounded-full pointer-events-none"></div>

      {/* NAV */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 flex justify-between items-center py-4 border-b border-gray-200 mb-8 rounded-lg px-4">
        <div className="font-bold text-lg">SteveLaw Investments</div>
        <div className="space-x-6 text-sm">
          <a href="#services" className="hover:text-teal-600 transition">Services</a>
          <a href="#contact" className="hover:text-teal-600 transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center space-y-6 py-16 bg-white rounded-xl shadow-sm border border-gray-100">
        <Image src="/badges.png" alt="Awards and recognition" width={420} height={130} className="mx-auto object-contain" />

        <h1 className="text-4xl font-bold text-gray-900">
          Canada’s Leading Litigation Funding Solutions
        </h1>

        <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Fast, confidential settlement funding—so you don’t have to wait months or years.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <span>✔ No Win, No Repayment</span>
          <span>✔ Fast Approval</span>
          <span>✔ 100% Confidential</span>
        </div>

        <a
          href="#contact"
          className="bg-teal-600 text-white px-6 py-3 rounded-lg inline-block shadow-sm transition-all duration-200 hover:bg-teal-700 hover:-translate-y-0.5 active:scale-95"
        >
          Apply for Funding
        </a>

        <div className="text-yellow-500 text-lg">★★★★★</div>
        <div className="text-sm text-gray-500">Trusted by clients across Canada</div>
      </section>

      {/* SERVICES */}
      <section id="services" className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Our Services</h2>

        <div className="space-y-6">
          {[
            "Settlement Advances",
            "Lawsuit Funding",
            "Law Firm Financing",
            "Business & Loan Funding",
          ].map((title, i) => (
            <details
              key={i}
              className="border border-gray-200 p-5 rounded-xl shadow-sm bg-white transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer"
            >
              <summary className="font-semibold text-lg">{title}</summary>
              <p className="text-gray-700 mt-3">
                Professional funding solutions tailored to your needs with fast approvals and flexible structures.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Apply for Funding
        </h2>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <input type="text" name="name" placeholder="Full Name" required className="w-full border border-gray-200 p-3 rounded-lg" />
          <input type="email" name="email" placeholder="Email Address" required className="w-full border border-gray-200 p-3 rounded-lg" />
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full border border-gray-200 p-3 rounded-lg" />

          <select name="service" required className="w-full border border-gray-200 p-3 rounded-lg">
            <option value="">Select Service</option>
            <option>Settlement Advance</option>
            <option>Lawsuit Funding</option>
            <option>Law Firm Financing</option>
            <option>Business / Loan Funding</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg w-full transition-all duration-200 hover:bg-teal-700 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-sm text-center">
              ✅ Your request has been submitted. We’ll get back to you shortly.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-sm text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t pt-8 mt-12 text-sm text-gray-600 space-y-4">
        <div className="font-semibold text-black">SteveLaw Investments</div>

        <p>Providing fast, confidential funding solutions across Canada.</p>

        <div className="space-y-1">
          <div>Phone: <a href="tel:14162220000">1-416-222-0000</a></div>
          <div>Email: <a href="mailto:stevej00171@gmail.com">stevej00171@gmail.com</a></div>
          <div>First Canadian Place, Toronto, ON</div>
        </div>
      </footer>

    </main>
  );
}